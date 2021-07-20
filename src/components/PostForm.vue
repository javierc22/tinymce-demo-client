<template>
  <form action="">
    <b-field label="Título">
      <b-input v-model="post.title"></b-input>
    </b-field>

    <b-field label="Extracto">
      <b-input v-model="post.extract"></b-input>
    </b-field>

    <TinyEditor :content="post.content" @setValue="(value) => post.content = value" />
  </form>
</template>
<script>
import TinyEditor from './TinyEditor.vue'
export default {
  components: { TinyEditor },
  props: {
    post: { type: Object, required: true }
  }
}
</script>
<style lang="">
  
</style>