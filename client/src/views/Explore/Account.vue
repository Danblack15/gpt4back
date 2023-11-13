<template>
    <div class="account container">
        <h1>Автор: {{ account.username }}</h1>
        <h2 v-if="usersBlog?.length > 0">Мои статьи</h2>
        <div class="account__blog-list" v-if="usersBlog?.length > 0">   
            <div 
                class="account__blog-item" 
                v-for="blog in usersBlog" 
                :key="blog._id"
            >
                <BlogItem :data="blog" />
            </div>
        </div>

        <h2>Новая статья</h2>
        <div class="account__write">
            <form @submit.prevent="postBlog" class="account__form">
                <input 
                    type="text" 
                    name="title" 
                    id="title"
                    placeholder="Название статьи" 
                    required 
                    v-model="dataBlog.title"
                />
                <input 
                    type="text" 
                    name="description" 
                    id="description"
                    placeholder="Описание статьи" 
                    required 
                    v-model="dataBlog.description"
                />
                <input 
                    type="text" 
                    name="image" 
                    id="image"
                    placeholder="Ссылка на изображение" 
                    v-model="dataBlog.image"
                />
                <textarea 
                    name="text" 
                    id="text" 
                    placeholder="Текст статьи" 
                    required
                    v-model="dataBlog.text"
                ></textarea>
                <ButtonUI orange>Отправить</ButtonUI>
            </form>
        </div>
    </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex';
import BlogItem from '@/components/ui/BlogItem';
import ButtonUI from '@/components/ui/ButtonUI';

export default {
    name: 'Account',

    data() {
        return {
            dataBlog: {
                title: '',
                description: '',
                image: '',
                text: '',
                user: null
            }
        }
    },

    components: {
        BlogItem,
        ButtonUI
    },

    mounted() {
        this.fetchUsersBlog();
    },

    methods: {
        postBlog() {
            if (!this.account) {
                alert('Произошла ошибка');
                return;
            }

            this.dataBlog.user = this.account;

            this.postNewBlog(this.dataBlog);

            this.dataBlog = {
                title: '',
                description: '',
                image: '',
                text: '',
                user: null
            };
        },
        ...mapActions({
            postNewBlog: 'blog/newBlogItem',
            fetchUsersBlog: 'blog/fetchUsersBlog'
        })
    },

    computed: {
        ...mapGetters({
            account: 'auth/getAccount',
            usersBlog: 'blog/getUsersBlog'
        })
    }
}
</script>
  
<style scoped lang="sass">
.account
    padding-bottom: 100px

    & h2
        margin-top: 40px

    &__blog-list
        display: flex
        flex-wrap: wrap
        grid-gap: 20px
        margin-top: 20px

        @media (max-width: $mob)
            grid-gap: 30px

    &__blog-item
        width: calc(100% / 3 - 14px)

        @media (max-width: $tab)
            width: calc(100% / 2 - 10px)

        @media (max-width: $mob)
            width: 100%

        & .blog-item
            height: 100%

    &__form
        margin-top: 20px
        background: #042C54
        display: flex
        flex-direction: column
        grid-gap: 30px
        padding: 25px

        @media (max-width: $mob)
            padding: 10px
            grid-gap: 20px

        & input
            color: $white
            font-size: clamp(16px, 1.5vw, 20px)
            border-bottom: 1px solid rgba($white, .2)
            padding-left: 15px
            padding-bottom: 10px

            @media (max-width: $mob)
                padding-bottom: 5px

            &[id=title]
                font-size: clamp(22px, 4.5vw, 62px)

            &[id=description]
                font-size: clamp(16px, 4.5vw, 32px)

            &[id=text]
                font-size: clamp(16px, 1.5vw, 18px)

        & textarea
            color: $white
            resize: none
            height: 500px
            border: 1px solid rgba($white, .2)
            padding: 15px
            line-height: 1.5

            @media (max-width: $mob)
                height: 330px
</style>