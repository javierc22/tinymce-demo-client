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
      {{ post.created_at }} hrs
    </h2>
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
      <b-button type="is-danger" @click="alertConfirm">
          Eliminar
      </b-button>
    </div>

    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
  </section>
</template>
<script>
import { deletePost, fetchPost } from "@/api/posts"

export default {
  data() {
    return {
      post: {},
      isLoading: false
    }
  },
  methods: {
    async getPost(id) {
      const res = await fetchPost(id)
      this.post = res
    },
    alertConfirm() {
      this.$buefy.dialog.confirm({
        title: 'Eliminar publicación',
        message: '¿Estás seguro/a de <b>eliminar</b> esta publicación?',
        cancelText: 'Cancelar',
        confirmText: 'Eliminar',
        onConfirm: () => this.handleDelete()
      })
    },
    async handleDelete() {
      this.isLoading = true
      const res = await deletePost(this.post.id)
      if(res.success) {
        this.$router.push("/")
        this.$buefy.toast.open('Publicación eliminada')
      } else {
        this.$buefy.toast.open({
            duration: 5000,
            message: "Algo salió mal",
            type: 'is-danger'
        })
      }

      this.isLoading = true
    }
  },
  created() {
    this.getPost(this.$route.params.id)
  },
}
</script>
<style lang="">
  
</style>