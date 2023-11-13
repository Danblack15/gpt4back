<template>
    <div class="blog-item container" v-if="blogData">
        <img 
            src="@/assets/hero/light.png" 
            alt="light" 
            class="blog-item__light blog-item__light--left-top" 
        />
        <div class="blog-item__title">
            <h1 class="anim">{{ blogData.title }}</h1>
            <p class="anim blog-item__auth">Автор: <span>{{ blogData.user.username }}</span></p>
            <p class="blog-item__date">{{ parseDate }}</p>
        </div>
        <h3 class="anim">{{ blogData.description }}</h3>
        <div class="blog-item__main">
            <div class="blog-item__image anim">
                <img 
                    :src="blogData.image ? blogData.image : 'https://media.moddb.com/images/articles/1/73/72743/image_error_full.png'" :alt="blogData.title"
                    @error="blogData.image='https://media.moddb.com/images/articles/1/73/72743/image_error_full.png'"
                >
            </div>
            <div class="blog-item__info anim">
                <p>{{ blogData.text }}</p>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'BlogItem',

    mounted() {
        this.fetchBlogData(this.$route.params?.id);
    },

    methods: {
        ...mapActions({
            fetchBlogData: 'blog/fetchBlogItem'
        })
    },

    computed: {
        ...mapGetters({
            blogData: 'blog/getBlogData'
        }),

        parseDate() {
            return new Date(this.blogData?.createdAt).toISOString().split('T')[0].replaceAll('-', '.');
        }
    }
}
</script>
  
<style scoped lang="sass">
.blog-item
    padding-bottom: 100px
    
    @media (max-width: $tab-sm)
        padding-top: 50px
    
    &__title
        display: flex
        justify-content: space-between
        align-items: center
        font-size: clamp(14px, 1.5vw, 16px)
        margin-bottom: 15px

        @media (max-width: $tab-sm)
            flex-direction: column-reverse
            align-items: flex-start

        & h1
            max-width: 50%
            animation-delay: .2s
            transform: translateX(-100px)
            opacity: 0

            @media (max-width: $tab-sm)
                max-width: 100%

        & span
            font-weight: 700
            font-size: clamp(16px, 1.5vw, 24px)

    & h3
        max-width: 50%
        animation-delay: .3s
        transform: translateX(-100px)
        color: rgba($white, .7)
        opacity: 0

        @media (max-width: $tab-sm)
            max-width: 100%

    &__main
        margin-top: 40px
        width: 100%
        display: flex
        align-items: center
        grid-gap: 40px

        @media (max-width: $tab-sm)
            flex-direction: column

        @media (max-width: $mob)
            grid-gap: 20px

    &__image
        width: 50%
        animation-delay: .4s
        transform: translateX(-100px)
        opacity: 0

        @media (max-width: $tab-sm)
            width: 100%

        & img
            max-width: 100%
            width: 100%

    &__auth
        animation-delay: .5s
        transform: translateX(100px)
        opacity: 0

    &__info
        width: 50%
        font-size: clamp(16px, 1.5vw, 18px)
        line-height: 2
        opacity: .7
        animation-delay: .2s
        transform: translateX(100px)
        opacity: 0

        @media (max-width: $tab-sm)
            width: 100%

        & p
            display: -webkit-box
            -webkit-line-clamp: 9
            -webkit-box-orient: vertical
            overflow: hidden
            white-space: pre-line

    &__date
        position: absolute
        top: 0px
        left: 50%
        transform: translateX(-50%)
        font-size: clamp(24px, 8vw, 120px)
        font-weight: 700
        opacity: .2
        z-index: -1
        user-select: none

        @media (max-width: $tab-sm)
            left: unset
            top: 50%
            right: 0
            transform: translateX(0) rotate(180deg)
            writing-mode: vertical-rl
            opacity: .5
            z-index: 1

    &__light
        position: absolute
        user-select: none

        @media (max-width: $mob)
            display: none

        &--left-top
            top: 0
            left: 0
            max-width: 100%
            height: 100%
            z-index: -1

    @keyframes slide
        100%
            transform: translate(0)
            opacity: 1
.anim
    animation-name: slide
    animation-duration: .4s
    animation-fill-mode: forwards
</style>
  