<template>
  <div class="section">
    <Breadcrumbs :items="post.breadcrumbs" />

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
import PostForm from '@/components/PostForm'
import { updatePost, fetchPostEdit } from '@/api/posts'
import Breadcrumbs from '@/components/Breadcrumbs'

export default {
  components: {
    PostForm,
    Breadcrumbs,
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
      const res = await fetchPostEdit(id)
      this.post = res
      this.isLoading = false
    },
  },
  created() {
    this.getPost(this.$route.params.id)
  },
}
</script>
