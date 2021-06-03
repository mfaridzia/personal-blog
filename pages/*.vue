<template>
  <div class="not-found-box">
    <h1 class="not-found"> 
      Not Found 
    </h1>
    <nuxt-link to="/" class="not-found-link">
      back to home
    </nuxt-link>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
}
</script>

<style scoped>
.not-found-box {
  display: flex;
  flex-direction: column;
}
.not-found {
  margin-top: 250px;
  text-align: center;
  font-size: 3rem;
}
.not-found-link {
  text-align: center;
}
</style>