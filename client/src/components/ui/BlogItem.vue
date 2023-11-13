<template>
    <div :class="['blog-item', {
        'blog-item--big': big
    }]">
        <div class="blog-item__image">
            <img 
                :src="data.image ? data.image : 'https://media.moddb.com/images/articles/1/73/72743/image_error_full.png'" 
                @error="data.image='https://media.moddb.com/images/articles/1/73/72743/image_error_full.png'"
            />
        </div>
        <div class="blog-item__body">
            <div class="blog-item__body-main">
                <span>{{ parseDate }}</span>
                <p>{{ data.title }}</p>
            </div>
            <router-link :to="`/${data._id}`" class="link-opacity">Читать полную статью</router-link>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'BlogItem',
    props: {
        data: {
            type: Object,
            required: true
        },
        big: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        parseDate() {
            return new Date(this.data?.createdAt).toISOString().split('T')[0].replaceAll('-', '.');
        }
    }
}
</script>

<style scoped lang="sass">
.blog-item
    display: flex
    flex-direction: column

    &--big
        @media (min-width: $tab + 1)
            .blog-item__image
                aspect-ratio: 1/0.68

            .blog-item__body
                padding: 32px 34px 27px 25px

                & p
                    font-size: clamp(18px, 1.5vw, 25px)
    
    &__image
        position: relative
        width: 100%
        aspect-ratio: 1/0.4

        & img
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: 100%
            object-fit: cover

    &__body
        padding: 6px 17px 13px 25px
        background: #042C54
        display: flex
        flex-direction: column
        grid-gap: 11px
        flex: 1

        & span
            font-size: clamp(9px, 1vw, 11px)
            line-height: 3
            font-weight: 300

        & p
            font-size: clamp(16px, 1.5vw, 19px)
            line-height: 1.6
            font-weight: 800
            display: -webkit-box
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
            overflow: hidden

        & a
            font-size: clamp(10px, 1vw, 12px)
            line-height: 2.9
            font-weight: 300

    &__body-main
        flex: 1
</style>
  