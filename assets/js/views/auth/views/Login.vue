<template>
  <div class="root">
    <div class="imgDiv"><div class="opacityDiv"></div></div>
    <v-row class="logWindow">
      <v-col>
        <v-skeleton-loader
          height="300"
          max-width="350"
          :loading="loading"
          transition="fadeIn"
          type="list-item-three-line"
          class="mx-auto"
        >
          <v-card v-if="step==1" max-width="350" class="mx-auto">
            <v-card-title>Connexion - HaremLand</v-card-title>
            <v-card-text class="pl-5 pr-5 pb-5 pt-5">
              <label for="email">Email</label>
              <v-text-field
                dense
                v-model="credentials.email"
                :class="isInvalidField('email')"
                v-on:keyup.enter="login"
              />
              <error-message :errors="errors" field="email"></error-message>
              <label for="password">Mot de passe</label>
              <v-text-field
                dense
                v-model="credentials.password"
                type="password"
                :class="isInvalidField('password')"
                v-on:keyup.enter="login"
              />
              <error-message :errors="errors" field="password"></error-message>
              <p class="text-right">
                <a @click="step=2">Mot de passe oublié ?</a>
              </p>
            </v-card-text>
            <v-card-actions class="pr-5 pb-5">
              <v-spacer></v-spacer>
              <v-btn @click="login" color="primary">Se connecter</v-btn>
            </v-card-actions>
          </v-card>
        </v-skeleton-loader>

        <v-card v-if="step==2" max-width="350" class="mx-auto">
          <v-card-title>Mot de passe oublié</v-card-title>

          <v-card-text class="pl-5 pr-5 pb-5 pt-5">
            <label for="email">Email</label>
            <v-text-field
              dense
              v-model="credentials.email"
              :class="isInvalidField('email')"
              v-on:keyup.enter="resetPswd"
            />
            <error-message :errors="errors" field="email"></error-message>
          </v-card-text>
          <v-card-actions class="pr-5 pb-5">
            <v-spacer></v-spacer>
            <v-btn type="button" @click="step=1" color="primary">Annuler</v-btn>
            <v-btn type="submit" @click="resetPswd" color="primary">Réinitialiser</v-btn>
          </v-card-actions>
        </v-card>

        <v-card v-if="step==3" max-width="350" class="mx-auto">
          <v-card-text
            class="pl-5 pr-5 pb-5 pt-5"
          >Un Email pour réinitialiser votre mot de passe vient de vous être envoyé.</v-card-text>
          <v-card-actions class="pr-5 pb-5">
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary" @click="step=1">Retour</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    credentials: {
      email: "",
      password: ""
    },
    step: 1,
    loading: false,
    errors : {}
  }),
  computed: {
    ...mapGetters("auth",{
      authenticatedUser: "isAuth"
    })
  },
  created() {

  },
  methods: {
    ...mapActions({

    }),
    login() {
      //this.credentials.client_id = 40;
      this.$router.push({ name: "home" });
    },
    resetPswd() {
      this.$http
        .post("/auth/password/sendMail", {
          email: this.credentials.email
        })
        .then(() => {
          this.step = 3;
        })
        .catch(err => {
          this.$store.commit("makeSnackErrorMessage", err.response.data.errors);
          this.$store.commit("showSnack", true);
        });
    }
  }
};
</script>

<style src="./style.css">

</style>
