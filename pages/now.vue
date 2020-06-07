<template>
  <div class="container">
    <div class="now">
      <p class="now__desc">
        This page describes what I'm doing now, so you can know what I'm doing
        without having to ask directly.
      </p>
      <p>
        <br>
      </p>
      <h2>Living</h2>
      <p>Bandung, West Java. Indonesia.</p>
      <br>

      <h2>Careers</h2>
      <p>Freelancer as a Frontend Developer (most work with JavaScript, Vue.js, etc)</p>
      <br>

      <h2>What are you doing now?</h2>
      <p>Still learning about Svelte and things related to Frontend and JavaScript</p>
      <br>

      <h2>Anything else</h2>
      <p>Hmm, for now maybe that's it</p>
      <br>
      <br>
      <br>

      <p class="backto-btn">
        <nuxt-link to="/" class="backto">
          Back to Home
        </nuxt-link>
      </p>
    </div>
    <MainFooter />
  </div>
</template>

<script>
/* eslint-disable */

export default {
  head() {
    const title = 'Muhammad Farid Zia | Now'
    const description = 'Now, muhammad farid zia'
    const url = 'https://muhfaridzia.netlify.com/'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: title
        },
        { hid: 'og:title', property: 'og:title', content: title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description
        },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'article:section',
          property: 'article:section',
          content: 'Life, Technology, Frontend'
        },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: description
        },
        { hid: 'twitter:url', name: 'twitter:url', content: url }
      ]
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
  width: 50vw;
  background: transparent;
  margin: 80px auto;
  min-height: 55vh;
  display: flex;
  flex-direction: column;
}
.now {
  box-sizing: border-box;
  margin-bottom: 30px;
}
.now__desc {
  font-size: 25px !important;
}
.now h2 {
  color: rgb(102, 102, 102);
  margin-left: 40px;
  margin-right: 40px;
  margin-bottom: 15px;
  font-size: 28px;
}
.now p {
  margin-left: 40px;
  margin-right: 40px;
  font-size: 19px;
  color: #777;
  letter-spacing: 0px;
  line-height: 30px;
  text-align: justify;
}

.footer {
  margin-bottom: -40px !important;
}

@media screen and (max-width: 800px) {
  .container {
    width: 90vw;
    background: transparent;
  }
  .now__desc {
    font-size: 19px !important;
  }
  .now h2 {
    font-size: 18px;
  }
  .now p {
    font-size: 14px;
    text-align: left;
  }
}
</style>
