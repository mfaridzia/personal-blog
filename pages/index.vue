<template>
  <div class="container__home">
    <p class="home__hello"> Hello World. </p>
    <h1 class="home__name"> I'm Muhammad Farid Zia  </h1>
    <h2 class="home__descjob"> 
       Frontend Developer who like to write about personal opinions
    </h2>

    <p class="home__description">
      Every day most spend time with things related to frontend. You can find me on 
      <a href="https://github.com/mfaridzia" target="_blank"> Github, </a>
      <a href="https://twitter.com/Muhfaridzia" target="_blank"> Twitter, </a>
      <a href="https://www.facebook.com/MuhFaridZia" target="_blank"> Facebook </a> and
      <a href="https://www.linkedin.com/in/muhfaridzia/" target="_blank"> LinkedIn </a>
    </p>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  head () {
    const title = "Muhammad Farid Zia"
    const description = "Homepage, muhammad farid zia"
    const url = "https://muhfaridzia.netlify.com/"
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: title },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'article:section', property: 'article:section', content: 'Life, Technology, Frontend' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description },
        { hid: 'twitter:url', name: 'twitter:url', content: url }
      ]
    }
  },
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  font-family: 'Source Sans Pro', sans-serif;
}
.container__home {
  width: 50vw;
  height: auto;
  background: transparent;
  box-sizing: border-box;
  padding: 20px;
  margin: 140px auto;
}
.home__hello {
  font-size: 40px;
  margin-bottom: 10px;
}
.home__name {
  font-size: 50px;
  letter-spacing: 0px;
}
.home__descjob {
  font-size: 30px;
  font-weight: normal;
  margin-bottom: 30px;
}
.home__description {
  line-height: 23px;
  letter-spacing: 1px;
  font-size: 18px;
}
.home__description a {
  color: #000;
}
.home__description a:hover {
  color: rgb(92, 92, 92);
}

@media screen and (max-width: 500px) {
  .container__home {
    width: 80vw;
    background: transparent;
    margin: 100px 10px 0px 30px;
  }
  .home__hello, .home__name, .home__descjob, .home__description {
    margin-left: 0px;
    margin-right: 0px;
  }
  .home__hello {
    font-size: 23px;
  }
  .home__name {
    font-size: 30px;
  }
  .home__descjob {
    font-size: 20px;
  }
  .home__description {
    font-size: 15px;
  }
}
</style>
