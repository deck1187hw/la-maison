<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        lamaison
      </h1>
     
    <nuxt-link to="/">Home page</nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
</style>
