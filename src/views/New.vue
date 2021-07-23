<template>
  <div class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link :to="'/'">Inicio</router-link></li>
        <li class="is-active"><router-link :to="'#'">Nueva publicación</router-link></li>
      </ul>
    </nav>

    <h2 class="title is-3">Nueva publicación</h2>

    <PostForm :post="post" :submitForm="submitForm" />

    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import { createPost } from '@/api/posts'

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
      const res = await createPost(this.post)

      if(res.success) {
        this.$router.push("/")
      }

      this.isLoading = false
    }
  },
}
</script>
