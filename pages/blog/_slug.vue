<template>
  <div class="slug">
    <div class="content">
      <span class="content__date" style="color: #777;">Written by Muhammad Farid Zia on {{ date }}</span>
      <h1 class="content__title">
        {{ title }}
      </h1>
      <DynamicMarkdown :render-func="renderFunc" :static-render-funcs="staticRenderFuncs" />
      <!-- <nuxt-link to="/blog" class="blog-post">Back to Home</nuxt-link> -->
    </div>

    <MainFooter />
  </div>
</template>

<script>
/* eslint-disable */

import DynamicMarkdown from '~/components/Markdown/DynamicMarkdown.vue'

export default {
  name: 'DetailPage',
  async asyncData({ params }) {
    const fileContent = await import(`~/posts/article/${params.slug}.md`)
    const data = fileContent.attributes
    return {
      name: params.slug,
      title: data.title,
      slug: data.slug,
      date: data.date,
      description: data.short_description,
      renderFunc: fileContent.vue.render,
      staticRenderFuncs: fileContent.vue.staticRenderFns
    }
  },
  head () {
    return {
      title: this.pageTitle,
      meta: [
        { name: "author", content: "Muhammad Farid Zia" },
        { name: "description", property: "og:description", content: this.description, hid: "description" },
        { property: "og:title", content: this.pageTitle },
        { property: "og:image", content: this.ogImage },
        { name: "twitter:description", content: this.description },
        { name: "twitter:image", content: this.ogImage }
      ]
    };
  },
  data() {
    return {}
  },
  computed: {
    ogImage() {
      return
    },
    pageTitle () {
      return this.title + ' – Muhammad Farid Zia';
    },
  },
  components: {
    DynamicMarkdown,
    MainFooter: () => import('@/components/Footer/MainFooter.vue')
  }
}
</script>

<style scoped>
.slug {
  width: 50vw;
  margin: 50px auto;
  background: transparent;
}
div {
  margin-top: 35px;
  margin-left: 12px;
  min-height: 60vh;
}
.blog-post {
  font-size: 15px;
  text-decoration: none;
}
.content__title {
  margin: 10px 0px -20px -12px;
}
.content__date {
  margin-left: -10px;
  text-align: left;
  font-size: 12px;
}
.footer {
  margin-left: 0px !important;
  margin-bottom: -50px !important;
}

@media screen and (min-width: 501px) and (max-width: 1000px) {
  .slug {
    width: 80vw;
    margin: 60px auto;
  }
  p {
    font-size: 16px;
  }
  .content__title {
    font-size: 25px;
  }
  .footer {
    margin-bottom: -20px !important;
  }
}
@media screen and (min-width: 200px) and (max-width: 500px) {
  .slug {
    width: 80vw;
    margin: 60px auto;
  }
  p {
    font-size: 16px;
  }
  .content__title {
    font-size: 25px;
  }
  .footer {
    margin-bottom: -20px !important;
  }
}
</style>