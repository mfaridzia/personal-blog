<template>
  <div class="slug">
    <div class="content">
      <span class="content__date" style="color: #777;">Written by Muhammad Farid Zia on {{ date }}</span>
      <h1 class="content__title">{{ title }}</h1>
      <DynamicMarkdown :render-func="renderFunc" :static-render-funcs="staticRenderFuncs" />

      <!-- <nuxt-link to="/blog" class="blog-post">Back to Home</nuxt-link>
      <br />
      <br />-->
    </div>

    <MainFooter />
  </div>
</template>

<script>
/* eslint-disable */

import DynamicMarkdown from '~/components/Markdown/DynamicMarkdown.vue'

export default {
  name: 'DetailPage',
  head() {
    const title = `${this.title}`
    const description = `${this.description}`
    const url = `${this.blogUrl}/${this.slug}/`
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
  data() {
    return {
      blogUrl: 'https://muhfaridzia.netlify.com'
    }
  },
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
  components: {
    DynamicMarkdown,
    MainFooter: () => import('@/components/Footer/MainFooter.vue')
  }
}
</script>

<style scoped>
.slug {
  width: 50vw;
  margin: 40px auto;
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
    margin: 0 auto;
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
    margin: 0 auto;
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