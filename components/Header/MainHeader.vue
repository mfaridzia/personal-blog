<template>
  <header class="header">
    <div class="header__avatar">
      <img src="/avatar/avatar.png" alt="photo" class="header__photo">
    </div>
    <div class="header__profile">
      <div class="header__profile--text">
        <nuxt-link to="/" class="header__profile--link"> <h1> Muhammad Farid Zia </h1> </nuxt-link>
      </div>
      <div class="header__profile--desc">
        <p> 
          Frontend Developer who like to write about personal opinions.
        </p>
      </div> 
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: row;
}
.header__profile {
  margin-top: 20px;
}
.header__avatar {
  margin-right: 20px;
}
.header__photo {
  border-radius: 50%;
  width: 83px;
  height: 80px;
  margin-top: 20px;
}
.header__profile--link {
  color: #000;
  text-decoration: none;
}
.header__profile--desc p {
  font-size: 16px;
}
</style>
