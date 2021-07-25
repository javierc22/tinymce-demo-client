<template>
  <section class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link :to="'/'">Inicio</router-link></li>
        <li class="is-active"><router-link :to="'#'">{{ post.title }}</router-link></li>
      </ul>
    </nav>

    <h1 class="title">{{ post.title }}</h1>
    <h2 class="subtitle">
      {{ post.extract }}
    </h2>

    <p v-html="post.content"></p>

    <div class="buttons mt-5">
      <b-button type="is-primary is-light" tag="router-link" to="/">
        Volver
      </b-button>
      <b-button type="is-primary" tag="router-link" :to="`/${$route.params.id}/editar`">
        Editar
      </b-button>
      <b-button type="is-danger">
          Eliminar
      </b-button>
    </div>
  </section>
</template>
<script>
import { fetchPost } from "@/api/posts"

export default {
  data() {
    return {
      post: {}
    }
  },
  methods: {
    async getPost(id) {
      const res = await fetchPost(id)
      this.post = res
    }
  },
  created() {
    this.getPost(this.$route.params.id)
  },
}
</script>
<style lang="">
  
</style>