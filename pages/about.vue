<template>
  <div class="container">
    <div class="about">
      <div class="about__photo">
        <img src="/avatar/photo.jpg" alt="photo">
      </div>
      <h2> Hello, I'm Muhammad Farid Zia </h2>
      <p>
        <!-- An ordinary young man who has many dreams, a person who is very passionate about
        software development, especially in the field of web technology such as JavaScript, 
        Vue.js, React.js, Node.js and many more. -->

        Very passionate about software development especially in the field of web technologies
        such as JavaScript, Vue.js, React.js, Node.js and many more.
      </p>
      <br/>

      <p>
        I am from Lombok, a beautiful little island, on this small island I spent my childhood,
        before I moved to the kota kembang Bandung to continue studying there and now I study at
        Telkom University, and major in Informatics Engineering.
      </p>
      <br/>

      <p>  
        I hope that through this blog, I can share experiences and things that I know and also
        hope that what I write here can be useful for others.
      </p>
      <br/>

      <p>
        Oh yeah btw, if you want to know what I'm doing now, 
        you can visit this <nuxt-link to="/now"> page </nuxt-link> 
        and you can contact me on the telegram <a href="https://telegram.me/muhfaridzia"> @muhfaridzia </a>
      </p>
      <br/><br/><br/>

      <p class="backto-btn"> <nuxt-link to="/" class="backto"> -> Back to Homepage </nuxt-link> </p>
   </div>
   <MainFooter />
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  head () {
    const title = "Muhammad Farid Zia | About"
    const description = "About me, muhammad farid zia"
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
  components: {
    MainFooter: () => import("@/components/Footer/MainFooter.vue")
  }
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  font-family: 'Source Sans Pro', sans-serif;
}
.container {
  width: 50vw;
  background: transparent;
  margin: 80px auto;
  min-height: 55vh;
  display: flex;
  flex-direction: column;
}
.about {
  box-sizing: border-box;
  margin-bottom: 30px;
}
.about__photo {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.about__photo img{
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
.about h2 {
  color: rgb(102, 102, 102);
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 15px;
  font-size: 28px;
}
.about p {
  margin-left: 40px;
  margin-right: 40px;
  font-size: 19px;
  color: #777;
  letter-spacing: 1px;
  line-height: 30px;
  text-align: justify;
}
/* .backto-btn {
  display: flex;
  justify-content: flex-start;
}
.backto {
  background: #ddd;
  color: black;
  padding: 10px;
  text-decoration: none;
  font-size: 16px;
}
.backto:hover {
  background: #777;
  color: #fff;
} */

.footer {
  margin-bottom: -40px !important;
}

@media screen and (max-width: 800px) {
  .container {
    width: 90vw;
    background: transparent;
  }
  .about h2 {
    font-size: 18px;
  }
  .about p {
    font-size: 14px;
    text-align: left;
  }
}
</style>
