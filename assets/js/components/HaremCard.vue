<template>
  <v-card :color="item.color">
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title class="headline" v-text="item.title"></v-card-title>
    
        <v-card-subtitle v-text="item.description"></v-card-subtitle>
      </div>

      <v-avatar class="ma-3" size="125" tile>
        <v-img :src="item.image"></v-img>
      </v-avatar>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "HaremCard",
  computed: {},
  props: {
    item: {
      type: Object,
      default: {
          color:"white",
          title:"",
          description:"",
          image:""
      },
    }
  },
};
</script>

<style scoped lang="scss">
</style>
