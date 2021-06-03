<template>
  <div class="container">
    <div class="now">
      <p class="now__desc">
        This page describes what I'm doing now, so you can know what I'm doing
        without having to ask directly.
      </p>
      <p> <br> </p>
      <h2>Living</h2>
      <p>Lombok, West Nusa Tenggara. Indonesia.</p>
      <br>

      <h2>Careers</h2>
      <p>Frontend Software Engineer (most work with JavaScript, Vue, React, etc)</p>
      <br>

      <h2>What I currently learn</h2>
      <p> 1. Svelte/SvelteKit </p>
      <p> 2. Testing </p>
      <p> 3. Xstate </p>
      <p> 4. Serverless </p>
      <br>

      <h2>Anything else</h2>
      <p>Will be announced later.</p>

      <!-- <p class="backto-btn">
        <nuxt-link to="/" class="backto">
          Back to Home
        </nuxt-link>
      </p> -->
    </div>
    <MainFooter />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  head () {
    const title = 'Now - Muhammad Farid Zia'
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
  width: 51vw;
  background: transparent;
  margin: 100px auto 20px;
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
.backto {
  color: #000;
}

.footer {
  margin-bottom: -40px !important;
}

@media screen and (max-width: 800px) {
  .container {
    width: 91%;
  }
  .now__desc {
    font-size: 19px !important;
  }
  .now h2 {
    font-size: 18px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .now p {
    font-size: 14px;
    text-align: left;
    margin-left: 8px;
    margin-right: 8px;
  }
}
</style>
