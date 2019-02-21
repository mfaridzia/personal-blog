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
  async asyncData ({ params, store }) {
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