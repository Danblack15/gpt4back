<template>
    <div class="blog container" v-if="blogList?.length > 0">
        <div class="blog__list">
            <article 
                v-for="(blog, index) in blogList"
                :key="blog._id"
                :class="['blog__item', {
                    'blog__item--big':  index === 0
                }]"
            >
                <BlogItem 
                    :big="index === 0" 
                    :data="blog"
                />
            </article>
        </div>
        <ButtonUI link="/allBlog" orange>Все статьи</ButtonUI>
    </div>
    <div class="blog container" v-else>
        <p class="blog__not-found">Статей пока нет</p>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';
import BlogItem from '@/components/ui/BlogItem';
import ButtonUI from '@/components/ui/ButtonUI'

export default {
    name: "BlogBlock",
    components: { BlogItem, ButtonUI },

    mounted() {
        this.fetchBlogList(5);
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
    margin-top: 154px
    display: flex
    flex-direction: column
    grid-gap: 45px

    @media (max-width: $mob)
        margin-top: 54px

    &__list
        display: grid
        grid-template-columns: repeat(3, 1fr)
        grid-template-rows: 1fr 1fr
        grid-gap: 45px

        @media (max-width: $tab)
            display: flex
            flex-wrap: wrap
            grid-gap: 20px

        @media (max-width: $mob)
            grid-gap: 40px

    &__item
        @media (max-width: $tab)
            width: calc(100% / 2 - 10px)

        @media (max-width: $mob)
            width: 100%

        &--big
            grid-column-start: 1
            grid-column-end: 1
            grid-row-start: 1
            grid-row-end: 3

        .blog-item
            height: 100%

    &__not-found
        text-align: center
        font-size: clamp(20px, 4.5vw, 42px)
        font-weight: 700
</style>
  