<template>
  <div>
    <header class="navbar-fixed">
      <nav>
        <div class="nav-wrapper blue lighten-2">
          <div class="container">
            <div class="brand-logo center black-text">VueMarkdown</div>
          </div>
        </div>
      </nav>
    </header>
    <div class="section">
      <div class="row">
        <div class="col s4">
          <Notes :notes="notes" />
        </div>
        <template v-if="note">
          <div class="col s4">
            <Editor :note="note" />
          </div>
          <div class="col s4">
            <Preview :note="note" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { event } from "@/main";
import Notes from "./Notes";
import Editor from "./Editor";
import Preview from "./Preview";

export default {
  name: "notebook",
  data: () => ({
    notes: undefined,
    selectedID: undefined
  }),
  created() {
    this.notes = JSON.parse(localStorage.getItem("notes")) || [];
    this.selectedID = localStorage.getItem("selectedID") || null;
    event.$on("create", note => this.create(note));
    event.$on("select", id => this.select(id));
    event.$on("remove", note => this.remove(note));
  },
  methods: {
    create(note) {
      this.notes.unshift(note);
    },
    select(id) {
      this.selectedID = id;
    },
    remove(note) {
      const index = this.notes.indexOf(note);
      if (index !== -1) {
        this.notes.splice(index, 1);
      }
    },
    save() {
      localStorage.setItem("notes", JSON.stringify(this.notes));
    }
  },
  computed: {
    note() {
      return this.notes.find(note => note.id === this.selectedID);
    }
  },
  watch: {
    notes: {
      handler: "save",
      deep: true
    },
    selectedID(val) {
      localStorage.setItem("selectedID", val);
    }
  },
  components: {
    Notes,
    Editor,
    Preview
  }
};
</script>
