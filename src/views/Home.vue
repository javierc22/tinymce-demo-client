<template>
  <section class="section">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

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
        <div class="card">
          <div class="card-image">
            <!-- <figure class="image is-16by9">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure> -->
          </div>
          <div class="card-content">
            <p class="title is-4">{{ post.title }}</p>

            <div class="content">
              <p v-html="post.extract"></p>
              <br>
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
