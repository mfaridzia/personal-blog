<template>
  <footer class="footer">
    © {{ new Date().getFullYear() }} - Made with 
    <span class="footer-love-icon"> &#9829; </span> 
    in [Bandung, Lombok], Indonesia by
    <a href="https://github.com/mfaridzia" target="_blank" rel="noopener">
      muhfaridzia
    </a>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  margin: 40px auto -20px 40px;
  text-align: left;
  color: rgb(102, 102, 102);
}
.footer-love-icon {
  color: #e25555;
}
a {
  color: rgb(102, 102, 102);
}
@media screen and (min-width: 501px) and (max-width: 1000px) {
  .footer {
    width: 100%;
    margin: 40px auto -20px 10px;
    font-size: 12px;
  }
}
@media screen and (max-width: 500px) {
  .footer {
    width: 100%;
    margin: 40px 0px -20px -5px;
    font-size: 12px;
    text-align: center;
  }
}
</style>
