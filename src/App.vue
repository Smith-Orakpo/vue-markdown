<template>
  <div id="app">
    <Notebook/>
  </div>
</template>

<script>
import Notebook from './components/Notebook'

export default {
  name: 'app',
  components: {
    Notebook
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
