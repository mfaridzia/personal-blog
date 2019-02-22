<template>
  <div class="slug">
    <div class="content">
      <span class="content__date"> {{ date }}  </span>
      <h1 class="content__title"> {{ title }} </h1> 
      <DynamicMarkdown 
        :render-func="renderFunc"
        :static-render-funcs="staticRenderFuncs"
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import DynamicMarkdown from '~/components/Markdown/DynamicMarkdown.vue'

export default {
  name: 'DetailPage',
   head () {
    const title = `${this.title}`
    const description = `${this.description}`
    const url = `${this.blogUrl}/${this.slug}/`
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
  data () {
    return {
      blogUrl: 'https://muhfaridzia.netlify.com'
    }
  },
  async asyncData ({ params }) {
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
    DynamicMarkdown
  }
}
</script>

<style scoped>
div {
  margin-top: 35px;
  min-height: 60vh;
}
.content__title {
  margin: 10px 0px -20px 0px;
}

@media screen and (min-width: 501px) and (max-width:1000px) {
  p {
    font-size: 16px;
  }
  .content__title {
    font-size: 25px;
  }
} 
@media screen and (min-width: 200px) and (max-width:500px) {
  p {
    font-size: 16px;
  }
  .content__title {
    font-size: 25px;
  }
} 
</style>