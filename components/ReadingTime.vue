<template>
  <span> {{ readingTime }} min read </span>
</template>

<script>
/* eslint-disable */
export default {
  name: 'readingTime',
  props: ['content'],
  computed: {
    readingTime () {
      let minutes = 0
      const contentString = this.content
      const words = contentString.split(" ").length
      const wordsPerMinute = 200
      minutes = Math.ceil(words / wordsPerMinute)
      return minutes
    }
  }
}
</script>