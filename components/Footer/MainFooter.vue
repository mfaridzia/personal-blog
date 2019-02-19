<template>
  <footer class="footer">
    Copyright © 2019 - 
    Made with <span style="color: #e25555;">&#9829;</span> in Bandung, Indonesia by
    <a
      href="https://github.com/mfaridzia"
      target="_blank"
      rel="noopener">Muhammad Farid Zia</a>
  </footer>
</template>

<script>
/* eslint-disable */ 
export default {
  name: 'BaseFooter'
}
</script>

<style scoped>
.footer {
  width: 100%;
  margin: 40px auto 0px auto;
  text-align: left;
}
a {
  color: #000;
}
@media screen and (min-width: 501px) and (max-width:1000px) {
  .footer {
    margin: 30px 0px 0px 0px;
    text-align: center;
    font-weight: bold;
  }
} 
@media screen and (min-width: 200px) and (max-width:500px) {
  .footer {
    margin: 30px 0px 0px 0px;
    text-align: center;
    font-weight: bold;
  }
} 
</style>
