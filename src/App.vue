<template>
  <div id="app" class="container">
       <first-section></first-section>
  </div>
</template>

<script>
import FirstSection from './components/FirstSection.vue'

export default {
  name: 'app',
  components: {
    FirstSection
  }
}
</script>

<style>
body {
  font-family: Intro,"Trebuchet MS",Helvetica,Arial,sans-serif; 
}
</style>
