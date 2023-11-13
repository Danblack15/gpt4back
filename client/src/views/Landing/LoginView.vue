<template>
    <div class="login">
        <h1>Авторизация</h1>
        <form class="login__form" @submit.prevent="submitForm">
            <div class="form__input-wrapper">
                <input type="text" placeholder="username" class="form__input" required v-model="formData.username" />
            </div>
            <div class="form__input-wrapper">
                <input type="password" placeholder="password" class="form__input" required v-model="formData.password" />
            </div>
        
            <ButtonUI orange>Войти</ButtonUI>
        </form>
    </div>
</template>
  
<script>
import { mapActions } from 'vuex';
import ButtonUI from '@/components/ui/ButtonUI';

export default {
    name: 'LoginView',

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
            login: 'auth/login'
        }),

        submitForm() {
            if (this.formData.username && this.formData.password)
                this.login(this.formData);
        }
    },
}
</script>

<style scoped lang="sass">
.login 
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
  