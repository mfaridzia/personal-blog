<template>
  <div class="container">
    <div class="about">
      <div class="about__photo">
        <img src="/avatar/new-avatar.jpg" alt="photo">
      </div>
      <p>
        Hello, I am Muhammad Farid Zia, very passionate about software development especially in the field of web technologies
        such as JavaScript, Vue.js, React.js, Node.js and many more.
      </p>
      <br>

      <p>
        I am from Lombok, a beautiful little island, on this small island I spent my childhood,
        before I moved to kota kembang a.k.a Bandung to continue studying there and now I study at
        Telkom University, and majored in Informatics Engineering.
      </p>
      <br>

      <p>
        I hope that through this blog, I can share experiences and things that I know and also
        hope that what I write here can be useful for others.
      </p>
      <br>

      <p>
        Oh yeah btw, if you want to know what I'm doing now,
        you can visit this
        <nuxt-link to="/now" class="about-page">
          page
        </nuxt-link>and you can contact me on the telegram
        <a class="about-telegram" href="https://telegram.me/muhfaridzia">
          @muhfaridzia
        </a>
      </p>
    </div>
    <MainFooter />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  head () {
    const title = 'About - Muhammad Farid Zia'
    const description = 'About - I’m a Frontend Developer and Storyteller based in Indonesia'
    return {
      title: title,
      meta: [
        { name: "author", content: "Muhammad Farid Zi" },
        { name: "description", property: "og:description", content: description, hid: "description" },
        { property: "og:title", content: title },
        { property: "og:image", content: this.ogImage },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: this.ogImage }
      ]
    }
  },
  computed: {
    ogImage() {
      return "https://muhfaridzia.netlify.app/avatar/new-avatar.jpg"
    }
  },
  components: {
    MainFooter: () => import('@/components/Footer/MainFooter.vue')
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
  width: 51vw;
  background: transparent;
  margin: 100px auto 20px;
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
.about__photo img {
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
  letter-spacing: 0px;
  line-height: 30px;
  text-align: justify;
}
.about-page, .about-telegram, .backto {
  color: #000;
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
    width: 91%;
  }
  .about h2 {
    font-size: 18px;
  }
  .about p {
    font-size: 14px;
    text-align: justify;
    margin-left: 8px;
    margin-right: 8px;
  }
}
</style>
