<template>
  <section class="section">
    <div class="columns">
      <div class="column is-12 has-text-right">
        <b-button 
          type="is-success" 
          outlined
          tag="router-link"
          to="/nuevo"
        >Crear publicación</b-button>
      </div>
    </div>

    <div class="columns">
      <div class="column is-two-fifths" v-for="(post, i) in posts" :key="i">
        <PostCard :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
import { fetchPosts } from "@/api/posts";
import PostCard from '../components/PostCard.vue';

export default {
  name: 'Home',
  components: {
    PostCard

  },
  data() {
    return {
      posts: []
    }
  },
  methods: {
    async getPosts() {
      const res = await fetchPosts()
      this.posts = res
    },
  },
  created() {
    this.getPosts()
  },
}
</script>

<style>
</style>
