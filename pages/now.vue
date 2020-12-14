<template>
  <div class="container">
    <div class="now">
      <p class="now__desc">
        This page describes what I'm doing now, so you can know what I'm doing
        without having to ask directly.
      </p>
      <p> <br> </p>
      <h2>Living</h2>
      <p>Bandung, West Java. Indonesia.</p>
      <br>

      <h2>Careers</h2>
      <p>Frontend Engineer (most work with JavaScript, Vue, React, etc)</p>
      <br>

      <h2>What are you doing now?</h2>
      <p>
        Still working on my thesis/final project (yeah I hope at the end of this December, my thesis can be completed)
      </p>
      <br>

      <h2>Anything else</h2>
      <p>Hmm, To be announced (tba)...</p>
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
  head () {
    const title = 'Muhammad Farid Zia - Now'
    const description = 'Now - I’m a Frontend Developer and Storyteller based in Indonesia'
    return {
      title: title,
      meta: [
        { name: "author", content: "Muhammad Farid Zia" },
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
      return
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
