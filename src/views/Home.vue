<template>
  <div class="container">
    <img alt="Vue logo" src="../assets/logo.png">

    <editor
      v-model="content"
      :api-key="apiKey"
      :init="{
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
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Editor from '@tinymce/tinymce-vue'


export default {
  name: 'Home',
  components: {
    HelloWorld,
    'editor': Editor
  },
  data() {
    return {
      content: "",
      apiKey: process.env.VUE_APP_TINYMCE_API_KEY
    }
  },
}
</script>
