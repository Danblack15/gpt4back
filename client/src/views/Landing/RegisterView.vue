<template>
    <div class="register">
        <h1>Регистрация</h1>
        <form class="register__form" @submit.prevent="submitForm">
            <div class="form__input-wrapper">
                <input type="text" placeholder="username" class="form__input" required v-model="formData.username" />
            </div>
            <div class="form__input-wrapper">
                <input type="password" placeholder="password" class="form__input" required v-model="formData.password" />
            </div>
        
            <ButtonUI orange>Регистрация</ButtonUI>
        </form>
    </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex';
import ButtonUI from '@/components/ui/ButtonUI';

export default {
    name: 'RegisterView',

    data() {
        return {
            formData: {
                username: '',
                password: '',
            }
        }
    },

    components: {
        ButtonUI
    },  

    methods: {
        ...mapActions({
            register: 'auth/register'
        }),

        submitForm() {
            if (this.formData.username && this.formData.password)
                this.register(this.formData);
        }
    },

    computed: {
        ...mapGetters({

        })
    }
}
</script>

<style scoped lang="sass">
.register 
    display: flex
    flex-direction: column
    justify-content: center
    grid-gap: 20px
    max-width: 500px
    width: 100%
    margin: 0 auto
    flex: 1

    &__form
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        width: 100%
        max-width: 500px
        margin-bottom: 100px

        .form__input-wrapper
            width: 100%

        button 
            width: 100%
            margin-top: 20px
</style>
  