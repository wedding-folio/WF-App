<template>
  <div>
  <v-card width='500' class="ma-4">
    <div id="image-container">
        <v-row>
          <v-col>
            <v-img>
              <img src="https://cdn0.weddingwire.com/emp/fotos/5/7/3/3/9/7/r10_2x_1477510601264-luis-jarod-070916-143.jpg" alt="">
              </v-img>
          </v-col>
        </v-row>
    </div>  
    <div>
      <v-container>
        <h4>{{postTitle}}</h4>
        <div>{{postCity}}{{postState}}</div>
        <p>{{postDescription}}</p>
      </v-container>
    </div>    

</v-card>
  </div>
</template>

<script>
export default {
  name: "PostCard",
props: {
  postTitle: {
    type: String,
    default: "Default Title"
  },
   postCity: {
    type: String,
    default: "Default City"
  },
   postState: {
    type: String,
    default: "Default State"
  },
   postDescription: {
    type: String,
    default: "where the description goes"
  }
},
  // data() {
  //   return {
  //     viewName: "PostCard",
  //     post: {
  //         title: "Default", 
  //         city: "City", 
  //         state: "State", 
  //         description: "words words words so many fucking words get it right get it tight"
  //         },
  //   };
  // },
};
</script>


<style scoped>

</style>
