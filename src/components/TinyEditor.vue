<template>
  <div>
    <label class="label">Contenido</label>
    <editor
      v-model="content"
      :api-key="apiKey"
      :init="{
        content_style: customStyle,
        height: 500,
        menubar: false,
        selector: 'textarea',
        file_picker_types: 'image',
        image_title: true,
        file_picker_callback: function (cb, value, meta) {

        },
        plugins: [
          'advlist autolink lists link image charmap',
          'searchreplace visualblocks code fullscreen',
          'print preview anchor insertdatetime media',
          'paste code help wordcount table'
        ],
        toolbar:
          'undo redo | formatselect | bold italic | \
          alignleft aligncenter alignright | \
          bullist numlist outdent indent | help | media | link image | code'
      }"
    >
    </editor>
  </div>
</template>
<script>
import Editor from '@tinymce/tinymce-vue'

export default {
  props: {
    value: { type: String, default: "" }
  },
  components: {
    'editor': Editor
  },
  data() {
    return {
      apiKey: process.env.VUE_APP_TINYMCE_API_KEY,
      customStyle: "body { line-height: 1; } p { margin: 0; }"
    }
  },
  computed: {
    content: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('setValue', value)
      }
    }
  }
}
</script>
<style lang="css">
</style>