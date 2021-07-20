<template>
  <div class="section">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link :to="'/'">Inicio</router-link></li>
        <li class="is-active"><router-link :to="'#'">Nueva publicación</router-link></li>
      </ul>
    </nav>

    <h2 class="title is-3">Nueva publicación</h2>

    <PostForm :post="post" />
  </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
export default {
  components: {
    PostForm,
  },
  data() {
    return {
      post: {
        title: "",
        extract: "",
        content: ""
      }  
    }
  },
}
</script>
