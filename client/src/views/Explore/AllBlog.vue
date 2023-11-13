<template>
    <div class="blog container">
        <h1>Все статьи</h1>
        <div 
            class="blog__list" 
            v-if="blogList"
        >
            <div 
                v-for="blog in blogList"
                :key="blog._id"
                class="blog__item"
            >
                <BlogItem :data="blog" />
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';
import BlogItem from '@/components/ui/BlogItem';

export default {
    name: 'AllBlog',

    components: { BlogItem },

    mounted() {
        this.fetchBlogList();
    },

    methods: {
        ...mapActions({
            fetchBlogList: 'blog/fetchBlogList'
        })
    },
    
    computed: {
        ...mapGetters({
            blogList: 'blog/getBlogList'
        })
    }
}
</script>
  
<style scoped lang="sass">
.blog
    padding-bottom: 100px

    &__list
        display: flex
        flex-wrap: wrap
        grid-gap: 20px
        margin-top: 20px

    &__item
        width: calc(100% / 3 - 14px)

        @media (max-width: $tab)
            width: calc(100% / 2 - 10px)

        @media (max-width: $mob)
            width: 100%
            
        .blog-item
            height: 100%
</style>