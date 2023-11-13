<template>
  <div class="home">
    <HeroBlock />
    <BlogBlock />
  </div>
</template>

<script>
import BlogBlock from '@/components/home/BlogBlock';
import HeroBlock from '@/components/home/HeroBlock';
export default {
  name: 'HomeView',

  components: {
    HeroBlock,
    BlogBlock
  }
}
</script>

<style scoped lang="sass">
.home
  padding-bottom: 100px
</style>
