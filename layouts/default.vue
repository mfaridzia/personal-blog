<template>
  <div class="container default">
    <MainHeader />
    <nuxt />
    <MainFooter />
  </div>
</template>

<script>
/* eslint-disable */ 
import MainHeader from '../components/Header/MainHeader.vue'
import MainFooter from '../components/Footer/MainFooter.vue'
export default {
  components: {
    MainHeader,
    MainFooter
  }
}
</script>


<style scoped>
</style>
