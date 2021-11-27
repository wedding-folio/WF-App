<template>
  <div>
    <PostCardsView/>
  </div>
</template>

<script>
import PostCardsView from '../components/Cards/PostCardsView.vue';

export default {
  name: "Home",

  components: { PostCardsView },

  data() {
    return {
      viewName: "Home Component",
    };
  },
};
</script>


<style scoped>
</style>
