<template>
    <header class="header">
        <div class="header__inner container">
            <div class="header__main">
                <div class="header__logo">
                    <p>GPT-4</p>
                </div>
                <nav>
                    <ul>
                        <li>
                            <router-link to="/explore">Главная</router-link>
                        </li>
                        <li>
                            <a href="#">Что такое GPT?</a>
                        </li>
                        <li>
                            <a href="#">Open AI</a>
                        </li>
                        <li>
                            <a href="#">Кейсы</a>
                        </li>
                        <li>
                            <a href="#">Библиотека</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header__buttons header__buttons--acc" v-if="account && token">
                <ButtonUI link="Account" orange>{{ account.username }}</ButtonUI>
                <ButtonUI @click="logout">Выйти</ButtonUI>
                <div class="header__menu" @click="toggleModalState(true)">
                    <img src="@/assets/svg/menu.svg" alt="menu" />
                </div>
            </div>
            <div class="header__buttons" v-else>
                <ButtonUI>Войти</ButtonUI>
                <ButtonUI orange>Регистрация</ButtonUI>
                <div class="header__menu" @click="toggleModalState(true)">
                    <img src="@/assets/svg/menu.svg" alt="menu" />
                </div>
            </div>
        </div>
        <ModalMenu 
            :isOpen="getModalState"
            @logoutFun="logout"
            @closeModal="toggleModalState(false)"
        />
    </header>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex';
import ButtonUI from '@/components/ui/ButtonUI';
import ModalMenu from '@/components/ModalMenu';

export default {
    name: 'HeaderBlock',

    data() {
        return {
            modalOpen: false
        }
    },

    components: {
        ButtonUI,
        ModalMenu
    },

    methods: {
        ...mapActions({
            logout: 'auth/logout'
        }),

        toggleModalState(value) {
            this.modalOpen = value;
        },
    },

    computed: {
        ...mapGetters({
            token: 'auth/getToken',
            account: 'auth/getAccount'
        }),

        getModalState() {
            return this.modalOpen;
        }
    },
}
</script>
  
<style scoped lang="sass">
.header
    padding: 70px 0
    width: 100%

    @media (max-width: $desktop-sm)
        padding: 40px 0
        position: fixed
        top: 0
        width: 100%
        z-index: 2
        background: rgba($primary, .8)
        transition: $trs background, $trs backdrop-filter

    @media (max-width: $tab-sm)
        padding: 20px 0

    &--background
        background: rgba($primary, .8)
        backdrop-filter: blur(5px)

    &__inner
        display: flex
        align-items: center
        justify-content: space-between
        grid-gap: 20px

    &__logo
        font-weight: 800
        font-size: 22px

    &__main
        display: flex
        align-items: center
        grid-gap: 68px

    nav
        @media (max-width: $desktop-sm)
            display: none

        & ul
            display: flex
            grid-gap: 46px

            & a
                font-size: 18px

    &__buttons
        display: flex
        align-items: center
        grid-gap: 30px

        & .btn
            @media (max-width: $mob)
                display: none

        &--acc
            & .btn
                text-transform: uppercase
                font-size: 16px

    &__menu
        cursor: pointer
        display: flex
        align-items: center

        @media (min-width: $desktop-sm + 1)
            display: none

        @media (max-width: $mob)
            display: block

        & img
            width: 30px
            height: 30px
    
</style>