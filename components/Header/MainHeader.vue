<template>
  <header class="header">
    <div class="header__avatar">
      <img src="/avatar/new-avatar.jpg" alt="photo" class="header__photo">
    </div>
    <div class="header__profile">
      <div class="header__profile--text">
        <nuxt-link to="/" class="header__profile--link">
          <h1>Muhammad Farid Zia</h1>
        </nuxt-link>
      </div>   
      <div class="header__profile--desc">
        <p>🇮🇩 • /Frən(t) ˈend Software Developer. Blog Writer. Likes to write about personal opinions.</p>
      </div>
    </div>
  </header>
</template>

<script>
/* eslint-disable */
export default {
  name: 'MainHeader'
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
  margin-left: 40px;
  margin-top: 50px;
}
.header__profile {
  margin-top: 20px;
}
.header__avatar {
  margin-right: 20px;
}
.header__photo {
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-top: 20px;
}
.header__profile--link {
  color: #d3d5d6;
  text-decoration: none;
}
.header__profile--desc p {
  font-size: 16px;
   color: #d3d5d6;
}

@media screen and (max-width: 380px) {
  .header__profile--link h1 {
    font-size: 18px;
    margin-right: 40px;
  }
  .header__profile--desc p {
    font-size: 14px;
    margin-right: 40px;
  }
}
/* @media screen and (min-width: 501px) and (max-width:1000px) {
  .header__photo {
    display: none; 
  }
} 

@media screen and (min-width: 200px) and (max-width:500px) {
  .header__photo {
    display: none; 
  }
}  */
</style>
