<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app permanent>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="blue lighten-4--text text--accent-4"
        >
          <v-list-item @click="drawer = false">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg" />
            </v-list-item-avatar>
            <v-list-item-title>Lucas Gancel</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item
            v-for="item in menu"
            v-show="item.if"
            :key="item.icon"
            @click="clickItem(item.action, item.to)"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="indigo darken-4" dark app>
      <!--v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon-->

      <v-toolbar-title>MyHarem</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-power</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    menu: [
      {
        icon: "mdi-home",
        title: "Mon Harem",
        action: "page",
        to: "/home",
        if: true,
      },
      {
        icon: "mdi-format-list-bulleted",
        title: "Trier",
        action: "page",
        to: "/sort",
        if: true,
      },
    ],
  }),
  created: function () {},
  components: {},
  computed: {},
  methods: {
    clickItem(action, to) {
      if (action === "page") {
        if (this.$route.path != to) {
          this.$router.push(to);
        }
      } else if (action === "req") {
      }
    },
  },
};
</script>
<style scoped>
</style>