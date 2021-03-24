<template>
  <layout>
    <div class="v-heading text-h3 text-sm-h3 mb-4">Mon Harem</div>

    <v-container>
      <v-row v-for="(harems, index1) in chunkedHarem" :key="index1">
        <v-flex sm12 md4 v-for="(harem, index2) in harems" :key="index2">
          <HaremCard :item="harem" style="margin:5px" />
        </v-flex>
      </v-row>
    </v-container>
  </layout>
</template>

<script>
import HaremCard from "../../../components/HaremCard";
export default {
  data: () => ({
    item: {
      color: "white",
      title: "Nezuko Kamado",
      description: "La plus belle des fifilles, après Nathou évidemment",
      image: "https://medias.spotern.com/spots/w640/236/236687-1570116600.jpg",
    },
  }),

  computed: {
    chunkedHarem() {
      let localItem = [];
      for (let i = 0; i < 15; i++) localItem.push(this.item);

      let finalTab = [];
      let tempTab = [];
      for (let i in localItem) {
        if (tempTab.length == 3) {
          finalTab.push(tempTab);
          tempTab = [];
        }
        tempTab.push(localItem[i]);
      }
      if (tempTab.length > 0) {
        finalTab.push(tempTab);
      }
      return finalTab;
    },
  },
  created() {},
  methods: {},
  components: {
    HaremCard,
  },
};
</script>


