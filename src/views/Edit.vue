<template>
  <div class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link :to="'/'">Inicio</router-link></li>
        <li><router-link :to="`/${$route.params.id}`">{{ post.title }}</router-link></li>
        <li class="is-active"><router-link :to="'#'">Editar</router-link></li>
      </ul>
    </nav>

    <h2 class="title is-3">Editar publicación</h2>

    <PostForm 
      :post="post" 
      :submitForm="submitForm"
      action="Actualizar publicación"
    />

    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import { updatePost, fetchPost } from '@/api/posts'

export default {
  components: {
    PostForm,
  },
  data() {
    return {
      isLoading: false,
      post: {
        title: "",
        extract: "",
        content: ""
      }  
    }
  },
  methods: {
    async submitForm() {
      this.isLoading = true
      const res = await updatePost(this.post)

      if(res.success) this.$router.push(`/${this.post.id}`)

      this.isLoading = false
    },
    async getPost(id) {
      this.isLoading = true
      const res = await fetchPost(id)
      this.post = res
      this.isLoading = false
    }
  },
  created() {
    this.getPost(this.$route.params.id)
  },
}
</script>
