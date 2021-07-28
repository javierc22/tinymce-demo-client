<template>
  <div class="card cursor-pointer" @click="$router.push(`/${post.id}`)">
    <div class="card-content">
      <p class="title is-4">{{ post.title }}</p>

      <div class="content">
        <p v-html="post.extract"></p>
        <br>
        <time>{{ post.created_at }} hrs</time>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: { type: Object, required: true },
  }
}
</script>
<style lang="css">
.cursor-pointer {
  cursor: pointer
}
</style>