<template>
  <form @submit.prevent="handleSubmitForm()">
    <b-field label="Título">
      <b-input v-model="post.title"></b-input>
    </b-field>

    <b-field label="Extracto">
      <b-input v-model="post.extract"></b-input>
    </b-field>

    <TinyEditor 
      :content="post.content" 
      @setValue="(value) => post.content = value" 
    />

    <button type="submit" class="button is-primary mt-3">Crear publicación</button>
  </form>
</template>
<script>
import TinyEditor from './TinyEditor.vue'
export default {
  components: { TinyEditor },
  props: {
    post: { type: Object, required: true },
    submitForm: { type: Function, required: true },
  },
  methods: {
    handleSubmitForm() {
      this.submitForm()
    }
  },
}
</script>
<style lang="">
  
</style>