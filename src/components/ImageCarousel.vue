<template>
    <div>
    <v-row>
      <v-col>
            <v-carousel >
               <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
               ></v-carousel-item>
            </v-carousel>
      </v-col>
    </v-row>
    </div>    
</template>

<script>
export default {
    name: "ImageCarousel",

  data() {
    return {
        items: [
            {
                src: 'https://cdn0.weddingwire.com/emp/fotos/5/7/3/3/9/7/r10_2x_1477510601264-luis-jarod-070916-143.jpg',
            },
            {
                src: 'https://media-api.xogrp.com/images/565108b1-6651-48e9-9e2f-67ec1663f65d~rs_400.h',
            },
            {
                src: 'https://cdn10.bostonmagazine.com/wp-content/uploads/sites/2/2019/08/wedding-photographers-instagram-social.jpg',
            },
            {
                src: 'https://media-api.xogrp.com/images/ccbeafe7-d210-4c8c-ae1f-eceb3126d929~rs_400.h',
            },
        ], 
        }
    },
}
</script>
