<template>
  <div class="container default">
    <!-- Test menu navigasi, masih belum fix -->
    <div class="navigation"> 
      <div class="navigation__condition">
        <button class="nav__show" v-if="isShow == false" @click="isShow = true"> Show Menu </button>
        <button class="nav__hide" v-else  @click="isShow = false"> Hide Menu </button>
      </div>
      <ul class="navigation__menu" v-if="isShow == true">
        <li> <nuxt-link to="/"> Home </nuxt-link> </li>
        <li> <nuxt-link to="/blog"> Blog </nuxt-link> </li>
        <li> <nuxt-link to="/about"> About </nuxt-link> </li>
      </ul>
    </div>
    <nuxt />
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  data() {
    return {
      isShow: false
    }
  }
}
</script>

<style>
.navigation {
  width: 100%;
  background: transparent;
}
.navigation ul {
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.navigation ul li {
  margin: 10px 10px;
}
.navigation ul li a {
  color: #000;
  text-decoration: none;
  font-size: 20px;
  text-transform: capitalize;
}
.navigation ul li a:hover {
  color: #189ad3;
}

.navigation__condition {
  margin-left: 35px;
}
.navigation__condition .nav__show,
.navigation__condition .nav__hide { 
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}
.navigation__condition .nav__show:hover,
.navigation__condition .nav__hide:hover { 
  background-color: #189ad3;
  color: #fff; 
}
</style>


