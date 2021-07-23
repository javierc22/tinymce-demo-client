<template>
  <div>
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
import { fetchPosts } from "@/api/posts";

export default {
  name: 'Home',
  components: {

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
    }
  },
  created() {
    this.getPosts()
  },
}
</script>
