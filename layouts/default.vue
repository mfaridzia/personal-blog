<template>
  <div>
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

    <div class="container default">
      <nuxt />
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  data() {
    return {
      isShow: true
    }
  }
}
</script>

<style>
.navigation {
  width: 100%;
  background: #fff;
  display: flex;
  flex-flow: row wrap;
  position: fixed;
  top: 0px;
  left: 0px;
}
.navigation ul {
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.navigation ul li {
  margin: 10px 10px;
}
.navigation ul li a {
  color: #000;
  text-decoration: none;
  font-size: 14px;
  text-transform: capitalize;
  font-family: Montserrat;
}
.navigation ul li a:hover {
  color: #189ad3;
}

/* .navigation__condition {
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
} */
.navigation__condition .nav__show,
.navigation__condition .nav__hide { 
  border: none;
  background-color: #189ad3;
  color: #fff;
  padding: 12px 20px;
  border-radius: 0px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}
.navigation__condition .nav__show:hover,
.navigation__condition .nav__hide:hover { 
  background-color: #1ca8e4;
  color: #fff; 
}
</style>


