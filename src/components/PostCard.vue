<template>
  <div class="card cursor-pointer" @click="$router.push(`/${post.id}`)">
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