<template>
  <div class="container">
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
  name: 'DefaultLayout',
  components: {
    MainHeader,
    MainFooter
  }
}
</script>


<style scoped>

</style>
