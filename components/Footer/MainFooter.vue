<template>
  <footer class="footer">
    Copyright © 2019 - Made with 
    <span style="color: #e25555;">
      &#9829;
    </span> 
    in Bandung, Indonesia by
    <a href="https://github.com/mfaridzia" target="_blank" rel="noopener">
      Muhammad Farid Zia
    </a>
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
  margin: 40px auto 30px 40px;
  text-align: left;
}
a {
  color: #000;
}
@media screen and (min-width: 501px) and (max-width: 1000px) {
  .footer {
    width: 80%;
    font-size: 12px;
  }
} 
@media screen and (min-width: 200px) and (max-width: 500px) {
  .footer {
    width: 80%;
    font-size: 12px;
  }
} 
@media screen and (max-width: 380px) {
  .footer {
    width: 80%;
    font-size: 12px;
  }
}
</style>
