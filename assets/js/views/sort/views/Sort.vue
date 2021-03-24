<template>
  <layout>
    <div class="v-heading text-h3 text-sm-h3 mb-4">Triage Harem</div>
    <v-btn color="primary">Ajouter Mari</v-btn>

    <v-list>
      <draggable v-model="myArray">
        <div v-for="element in myArray" :key="element.id">
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="element.image"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="element.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="element.description"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </draggable>
    </v-list>
  </layout>
</template>

<script>
import draggable from "vuedraggable";

export default {
  data: () => ({
    myArray: [
      {
        id: 1,
        title: "Nezuko Kamado",
        description: "Elle",
        image:
          "https://medias.spotern.com/spots/w640/236/236687-1570116600.jpg",
      },
      {
        id: 2,
        title: "Naruto Uzumaki",
        description: "Lui",
        image:
          "https://www.alfabetajuega.com/wp-content/uploads/2021/01/naruto-uzumaki-hotel-abj-780x405.jpg",
      },
      {
        id: 3,
        title: "Senku",
        description: "Lui",
        image:
          "https://www.nautiljon.com/images/perso/00/72/ishigami_senku_18427.jpg",
      },
      {
        id: 4,
        title: "Light Yagami",
        description: "Lui",
        image:
          "https://pbs.twimg.com/profile_images/1188396016401354752/VpE97MnS_400x400.jpg",
      },
    ],
  }),
  computed: {},
  created() {},
  methods: {},
  components: {
    draggable,
  },
};
</script>


