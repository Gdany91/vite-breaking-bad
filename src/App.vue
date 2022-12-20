74 lines (63 sloc) 1.24 KB
<script >
import axios from "axios"
import { store } from "./store.js"
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
   
  },
  data() {
    return {
      store,
      
    }
  },
}
</script>

<template>
  
  <header>
    <AppHeader />
  </header>

  <main>

  </main>
</template>

<style lang="scss">

@use "./styles/general.scss" as *;


</style>