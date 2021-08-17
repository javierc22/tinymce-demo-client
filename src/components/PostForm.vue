<template>
  <form @submit.prevent="handleSubmitForm()">
    <b-field 
      label="Título" 
      :message="titleErrors" 
      :type="{'is-danger': $v.post.title.$error}"
    >
      <b-input 
        v-model.trim="post.title"
        @blur="$v.post.title.$touch()"
      ></b-input>
    </b-field>

    <b-field label="Extracto">
      <b-input v-model="post.extract"></b-input>
    </b-field>

    <TinyEditor 
      :value="post.content" 
      @setValue="(value) => post.content = value" 
    />

    <div class="has-text-danger" v-if="$v.post.content.$error">Campo requerido</div>

    <button type="submit" class="button is-primary mt-3">
      {{ action }}
    </button>
  </form>
</template>
<script>
import TinyEditor from './TinyEditor.vue'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  components: { TinyEditor },
  validations: {
    post: {
      title: {
        required,
        minLength: minLength(3)
      },
      content: {
        required,
      }
    }
  },
  props: {
    post: { type: Object, required: true },
    submitForm: { type: Function, required: true },
    action: { type: String, required: true },
  },
  computed: {
    titleErrors () {
      const errors = []
      if (!this.$v.post.title.$dirty) return errors
      !this.$v.post.title.minLength && errors.push('Debe tener mínimo 3 caracteres')
      !this.$v.post.title.required && errors.push('Campo requerido')
      return errors
    },
    contentErrors () {
      const errors = []
      if (!this.$v.post.content.$dirty) return errors
      !this.$v.post.content.required && errors.push('Campo requerido')
      return errors
    },
  },
  methods: {
    handleSubmitForm() {
      this.$v.$touch()
      if (this.$v.$invalid) return
      
      this.submitForm()
    }
  },
}
</script>
<style lang="">
  
</style>