<template>
  <div class="slug">
    <div class="content">
      <h1 class="content__title">
        {{ title }}
      </h1>
      <span class="content__date" style="color: #777;"> 
        Published on {{ date }} in {{ category }} • <ReadingTime :content="staticRenderFuncs" />
      </span>
      <DynamicMarkdown :render-func="renderFunc" :static-render-funcs="staticRenderFuncs" />
    </div>
    <!-- <MainFooter /> -->
  </div>
</template>

<script>
/* eslint-disable */
import Prism from '~/plugins/prism'
import DynamicMarkdown from '~/components/Markdown/DynamicMarkdown.vue'
import ReadingTime from '~/components/ReadingTime.vue'
export default {
  name: 'DetailPage',
  async asyncData({ params, redirect}) {
    try {
      const fileContent = await import(`~/posts/article/${params.slug}.md`)
      const data = fileContent.attributes
      return {
        name: params.slug,
        title: data.title,
        slug: data.slug,
        date: data.date,
        category: data.category,
        description: data.short_description,
        renderFunc: fileContent.vue.render,
        staticRenderFuncs: fileContent.vue.staticRenderFns
      }
    } catch (e) {
      redirect("/notfound")
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
  mounted() {
    Prism.highlightAll()
  },
  computed: {
    ogImage() {
      return "https://muhfaridzia.netlify.app/avatar/new-avatar.jpg"
    },
    pageTitle () {
      return this.title + ' – Muhammad Farid Zia';
    },
  },
  components: {
    DynamicMarkdown,
    ReadingTime,
    MainFooter: () => import('@/components/Footer/MainFooter.vue')
  }
}
</script>

<style scoped>
.slug {
  width: 49vw;
  margin: 50px auto -30px;
  background: transparent;
}
div {
  margin-top: 35px;
  margin-left: 12px;
  min-height: 60vh;
}
.content {
  margin-bottom: 10px;
}
.blog-post {
  font-size: 15px;
  text-decoration: none;
}
.content__title {
  margin: 10px 0px 5px -12px;
  font-size: 36px;
}
.content__date {
  margin-left: -10px;
  text-align: left;
  font-size: 14px;
  font-weight: normal;
}
.footer {
  margin-left: 0px !important;
  margin-bottom: -50px !important;
}
@media screen and (min-width: 501px) and (max-width: 1000px) {
  .slug {
    width: 80vw;
    margin: 50px auto -25px;
  }
  p {
    font-size: 16px;
  }
  .content__title {
    font-size: 30px;
  }
  .content__date {
    font-size: 12px;
  }
  .footer {
    margin-bottom: -20px !important;
  }
}
@media screen and (min-width: 200px) and (max-width: 500px) {
  .slug {
    width: 91%;
    /* margin: 50px auto 5px; */
    margin: 80px auto -25px;
  }
  p {
    font-size: 16px;
  }
  .content__title {
    font-size: 30px;
  }
  .content__date {
    font-size: 12px;
  }
  .footer {
    margin-bottom: -20px !important;
  }
}
</style>