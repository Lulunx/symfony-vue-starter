<template>
  <div class="root">
    <div class="imgDiv">
      <div class="opacityDiv"></div>
    </div>
    <v-row class="logWindow">
      <v-col>
        <v-card v-if="step==1" max-width="350" class="mx-auto">
                      <v-card-title>Réinitialisation - Huchet Caen</v-card-title>

          <v-card-text class="pl-5 pr-5 pb-5 pt-5">
            <label for="email">Nouveau mot de passe</label>
            <v-text-field dense v-model="password" type="password" v-on:keyup.enter="resetPwd" />
            <label for="password">Confirmer Mot de passe</label>
            <v-text-field dense v-model="confPassword" type="password" v-on:keyup.enter="resetPwd" />
          </v-card-text>
          <v-card-actions class="pr-5 pb-5">
            <v-spacer></v-spacer>
            <v-btn @click="resetPwd" color="primary">Réinitialiser</v-btn>
          </v-card-actions>
        </v-card>

        <v-card v-if="step==2" max-width="350" class="mx-auto">
          <v-card-text class="pl-5 pr-5 pb-5 pt-5">Votre mot de passe a été réinitialisé avec succès</v-card-text>
          <v-card-actions class="pr-5 pb-5">
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary" @click="backToLogin()">Me connecter</v-btn>
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
    password: "",
    confPassword: "",
    step: 1
  }),
  computed: {},
  methods: {
    resetPwd() {
      if (this.password === this.confPassword) {
        this.$http
          .post("/auth/password/reset", {
            token: this.$route.query.token,
            password: this.password
          })
          .then(() => {
            this.step = 2;
          })
          .catch(err => {
            this.$store.commit(
              "makeSnackErrorMessage",
              err.response.data.errors
            );
            this.$store.commit("showSnack", true);
          });
      } else {
        this.$store.commit(
          "updateSnackMessage",
          "Les mots de passe ne sont pas identiques"
        );
        this.$store.commit("setSnackColor", "error");
        this.$store.commit("showSnack", true);
      }
    },
    backToLogin() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style src="./style.css">

</style>
