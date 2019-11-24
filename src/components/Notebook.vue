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
          <Notes />
        </div>
        <div class="col s4">
          <Editor />
        </div>
        <div class="col s4">
          <Preview />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notes from "./Notes";
import Editor from "./Editor";
import Preview from "./Preview";

export default {
  name: "notebook",
  components: {
    Notes,
    Editor,
    Preview
  }
};
</script>
