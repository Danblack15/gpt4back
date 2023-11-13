<template>
    <div 
        :class="['modal-menu', {
            'modal-menu--open': isOpen
        }]"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
    >
        <button class="modal-menu__overlay" @click="$emit('closeModal')"></button>
        <div class="modal-menu__inner container">
            <div class="modal-menu__close" @click="$emit('closeModal')">
                <img src="@/assets/svg/cross.svg" alt="cross" />
            </div>
            <div class="modal-menu__logo">
                <p>GPT-4</p>
            </div>
            <nav>
                <ul>
                    <li @click="$emit('closeModal')" class="modal-menu__select">
                        <router-link to="/Account">Личный кабинет</router-link>
                        <span>/</span>
                        <button @click="$emit('logoutFun')">Выход</button>
                    </li>
                    <li @click="$emit('closeModal')">
                        <router-link to="/explore">Главная</router-link>
                    </li>
                    <li @click="$emit('closeModal')">
                        <a href="#">Что такое GPT?</a>
                    </li>
                    <li @click="$emit('closeModal')">
                        <a href="#">Open AI</a>
                    </li>
                    <li @click="$emit('closeModal')">
                        <a href="#">Кейсы</a>
                    </li>
                    <li @click="$emit('closeModal')">
                        <a href="#">Библиотека</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'ModalMenu',

    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    }
}
</script>
  
<style scoped lang="sass">
.modal-menu
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 5
    display: flex
    justify-content: flex-end
    opacity: 0
    pointer-events: none
    backdrop-filter: blur(5px)
    transition: $trs opacity
    transition-delay: .4s

    &--open
        opacity: 1
        pointer-events: all
        transition-delay: 0s

        .modal-menu__inner
            transition-delay: .2s
            transform: translateX(0)

    &__inner
        position: relative
        width: 100%
        max-width: 500px
        height: 100%
        background: $primary
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        margin: 0 0 0 auto
        transform: translateX(101%)
        transition: $trs-4 transform

    &__close
        position: absolute
        top: 50px
        right: 50px
        cursor: pointer
        transition: $trs transform

        @media (max-width: $mob)
            top: 30px
            right: 25px

        &:hover
            transform: rotate(90deg)

        & img
            width: 30px
            height: 30px

            @media (max-width: $mob)
                width: 24px
                height: 24px

    &__logo
        position: absolute
        top: 50px
        left: 50px
        font-weight: 800
        font-size: 22px

        @media (max-width: $mob)
            top: 25px
            left: 25px

    & nav
        width: 100%
        
        & ul
            display: flex
            flex-direction: column
            grid-gap: 25px
            max-width: 500px
            width: 100%

            & li
                font-size: clamp(32px, 4.5vw, 34px)
                border-left: 0 solid $white
                transition: $trs border-left, $trs padding-left

                &:hover
                    border-left: 20px solid $white
                    padding-left: 5px

    &__overlay
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: rgba($primary, .6)

    &__select
        display: flex
        justify-content: center
        grid-gap: 15px
        font-size: 20px !important
        margin-bottom: 30px

        @media (min-width: $mob + 1)
            display: none

        &:hover
            border: none !important
            padding-left: 0 !important

        & button
            font-size: inherit
            color: $white
            cursor: pointer
</style>