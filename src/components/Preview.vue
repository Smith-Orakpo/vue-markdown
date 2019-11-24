<template>
  <div>
    <div class="center">PREVIEW</div>
    <div v-html="preview"></div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "preview",
  props: ["note"],
  computed: {
    preview() {
      return marked(this.note.content);
    }
  }
};
</script>
