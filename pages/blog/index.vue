<template>
  <div>
    <MainHeader />
    
    <div class="container">
      <div v-for="post in posts" :key="post.slug" class="post">
        <div class="post__article">
          <span class="post__date"> {{ post.date }} </span>
          <nuxt-link :to="`/blog/${post.slug}`" class="post__title"> <h1> {{ post.title }} </h1> </nuxt-link>
          <div class="post__desc">
            <p> {{ post.short_description }} </p>
          </div>
        </div>
      </div>
    </div>

    <MainFooter />
  </div>
</template>

<script>
/* eslint-disable */ 
import MainHeader from '@/components/Header/MainHeader.vue'
import posts from '@/posts/index.js'

export default {
  async asyncData ({ store }) {
    async function asyncImport (slug) {
      const articles = await import(`~/posts/article/${slug}.md`)
      return articles.attributes
    }
    return Promise.all(posts.map(post => asyncImport(post))).then((response) => {
      return { posts: response }
    })
  },
  components: {
    MainHeader,
    MainFooter: () => import("@/components/Footer/MainFooter.vue")
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  font-family: 'Source Sans Pro', sans-serif;
}
.container {
  width: 50vw;
  background: transparent;
  margin: 20px auto;
  min-height: 55vh;
  display: flex;
  flex-direction: column;
}
.post {
  margin-left: 40px;
}
.post__article {
  margin: 20px 0px;
}
.post__article h1 {
  margin-top: 5px;
}
.post__title {
  text-decoration: none;
  color: #189ad3;
}
.post__title h1 {
  margin: 10px 0px 10px 0px;
  font-size: 1.7rem;
  font-weight: bolder;
}
.post__desc p {
  font-size: 18px;
  font-weight: normal;
}

@media screen and (min-width: 501px) and (max-width:1000px) {
  .container {
    background: transparent;
    width: 90vw;
  }  
  .post__title h1 {
    font-size: 1.5rem;
  }
} 

@media screen and (min-width: 200px) and (max-width: 500px) {
  .container {
    background: transparent;
    width: 90vw;
  }  
  .post__title h1 {
    font-size: 1.5rem;
  }
  .post {
    margin-right: 40px;
  }
} 
</style>
