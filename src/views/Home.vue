<template>
  <div>
    <ImageCarousel/>
  </div>
</template>

<script>
import ImageCarousel from '../components/ImageCarousel.vue';
export default {
  name: "Home",

  components: {ImageCarousel,},

  data() {
    return {
      viewName: "Home Component",

    };
  },
};
</script>


<style scoped>
</style>
