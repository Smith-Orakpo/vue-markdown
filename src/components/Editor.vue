<template>
  <div>
    <div class="center">EDITOR</div>
    <div class="input-field">
      <input type="text" v-model="note.title" id="title" />
    </div>
    <div class="input-field">
      <textarea v-model="note.content" id="content" class="materialize-textarea"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "editor",
  props: ["note"]
};
</script>
