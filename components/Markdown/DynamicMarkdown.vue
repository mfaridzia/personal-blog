<script>
/* eslint-disable */ 
export default {
  props: ['renderFunc', 'staticRenderFuncs'],
  created() {
    this.templateRender = new Function(this.renderFunc)()
    this.$options.staticRenderFns = new Function(this.staticRenderFuncs)() 
  },
  render(createElement) {
    return this.templateRender ? this.templateRender() : createElement('div', 'Rendering')
  },
}
</script>

<style scoped>
p {
  line-height: 33px;
   font-size: 1.1rem;
   font-weight: 100;
}

@media screen and (min-width: 501px) and (max-width:1000px) {
  p {
    font-size: 16px;
  }
} 
@media screen and (min-width: 200px) and (max-width:500px) {
  p {
    font-size: 16px;
  }
} 
</style>