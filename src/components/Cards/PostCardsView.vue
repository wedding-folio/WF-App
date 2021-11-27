<template>
   <div> 
        <div class="d-flex ma-0 flex-wrap flex-row pa-4 justify-space-around">
            <PostCard v-for="post in posts" 
                :key="post.id" 
                :postTitle="post.title" 
                :postCity="post.city" 
                :postState="post.state" 
                :postDescription="post.description"
            />
        </div>
    </div>
</template>

<script>
import PostCard from './PostCard.vue';

export default {
        components: {PostCard},
        data() {
            return {
                posts: [
                    {
                        id: 1,
                        title: "First Title",
                        city: "Harrisburg",
                        state: "PA",
                        description: "words words words so many fucking words get it right get it tight"
                    },
                    {
                        id: 2,
                        title: "Another Title",
                        city: "Pittsburgh",
                        state: "PA",
                        description: "words words words so many fucking words get it right get it tight"
                    },
                    {
                        id: 3,
                        title: "Titles Are Big and Small",
                        city: "Shitville",
                        state: "ST",
                        description: "words words words so many fucking words get it right get it tight"
                    },
                    {
                        id: 4,
                        title: "I like your Title",
                        city: "Krackville",
                        state: "TG",
                        description: "words words words so many fucking words get it right get it tight"
                    },
                ],

            };
        },
}
</script>

<style>

</style>