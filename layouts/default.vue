<template>
  <div class="navigation-wrapper">
    <!-- Test navigation menu -->
    <div class="navigation">
      <!-- <div class="navigation__condition">
        <button v-if="isShow == false" class="nav__show" @click="isShow = true">
          ☰
        </button>
        <button v-else class="nav__hide" @click="isShow = false">
          &#10005;
        </button>
      </div> -->
      <!-- <ul v-if="isShow == true" class="navigation__menu"> -->
      <ul class="navigation__menu">
        <li>
          <nuxt-link to="/">
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">
            Blog
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">
            About
          </nuxt-link>   
        </li>
        <li>
          <nuxt-link to="/now">
            Now   
          </nuxt-link>
        </li>
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
      // isShow: false
    }
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #1f2225;
  color: #d3d5d6;
}
.navigation {
  width: 100%;
  background: #1f2225;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  position: fixed;
  top: 0px;
  left: 176px;
  z-index: 2;
}
.navigation ul {
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.navigation ul li {
  margin: 25px 15px;
}
.navigation ul li a {
  color: #d3d5d6;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
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
  background-color: #000;
  color: #fff;
  padding: 12px 20px;
  border-radius: 0px;
  font-weight: normal;
  cursor: pointer;
  outline: none;
}
.navigation__condition .nav__show:hover,
.navigation__condition .nav__hide:hover {
  background-color: #202020;
  color: #fff;
}

@media screen and (max-width: 760px) {
  .navigation {
    left: 0px;
  }
  .navigation ul li {
    margin: 25px 20px;
  }
}
@media screen and (max-width: 311px) {
  .navigation {
    left: 0px;
  }
  .navigation ul li {
    margin: 25px 10px;
  }
}
</style>


