<template>
  <div class="center">
    <div>NOTES</div>
    <div>
      <button class="btn blue darken-2 white-text" @click.prevent="create">create</button>
    </div>
    <div class="collection" v-for="note in notes" :key="note.id">
      <span class="center" @click.prevent="select(note.id)">{{ note.title }}</span>
      <button class="btn-small red white-text right" @click.prevent="remove(note)">delete</button>
    </div>
  </div>
</template>

<script>
import { event } from "@/main";
import uuid from "uuid";

export default {
  name: "notes",
  props: ["notes"],
  methods: {
    create() {
      const note = {
        id: uuid.v4(),
        title: "note title",
        content: "note content"
      };
      event.$emit("create", note);
    },
    select(id) {
      event.$emit("select", id);
    },
    remove(note) {
      event.$emit("remove", note);
    }
  }
};
</script>
