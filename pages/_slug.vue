<script>
/* eslint-disable */ 
// Generate dynamic content
// <template>
//   <div class="slug">
//     <div class="content">
//       <span> {{ date }}  </span>
//       <h1> {{ title }} </h1> 
//     </div>
//   </div>
// </template>
export default {
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
      staticRenderFuncs: fileContent.vue.staticRenderFns,
      fileContent
    }
  },
  created() {
    this.templateRender = new Function(this.renderFunc)()
    this.$options.staticRenderFns = new Function(this.staticRenderFuncs)() 
  },
  render(createElement) {
    return this.templateRender ? this.templateRender() : createElement('div', 'element')
  }
}
</script>

<style scoped>
div {
  margin-top: 50px;
  min-height: 80vh;
}
h1 {
  margin-bottom: 20px;
}
p {
  line-height: 30px;
  font-size: 1.1rem;
}

@media screen and (min-width: 501px) and (max-width:1000px) {
  p {
    font-size: 16px;
  }
  h1 {
    font-size: 30px;
  }
} 
@media screen and (min-width: 200px) and (max-width:500px) {
  p {
    font-size: 16px;
  }
  h1 {
    font-size: 30px;
  }
} 
</style>