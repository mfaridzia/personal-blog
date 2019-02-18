<template>
  <section class="container">
    <div
      v-for="blog in blogs"
      :key="blog.title">
      <nuxt-link
        :to="`/${blog.slug}`">
        <h2>{{ blog.title }}</h2>
      </nuxt-link>
      <small>{{ blog.date }}</small>
      <div>
        <p>
          {{ blog.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */ 
import Contents from '../contents/index.js'
export default {
  name: 'Homepage',
  async asyncData ({ store }) {
    async function asyncImport (blogName) {
      const allMarkdown = await import(`~/contents/posts/${blogName}.md`)
      return allMarkdown.attributes
    }
    return Promise.all(Contents.map(blog => asyncImport(blog)))
      .then((res) => {
        return {
          blogs: res
        }
      })
  }
}
</script>

<style>
.container {
  width: 50vw;
  margin: 50px auto;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
}
</style>
