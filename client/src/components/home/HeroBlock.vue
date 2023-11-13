<template>
    <div class="hero container">
        <div class="hero__light">
            <img src="@/assets/hero/light.png" alt="light" />
        </div>

        <div class="hero__body">
            <h1 class="text-gradient">Построим Что-нибудь<br> Невероятное с<br >GPT-4 OpenAI</h1>
            <div class="hero__body-text">
                <p>Однако кровать для помощи в путешествии неприятна. Не мысли все осуществляют благословение. Снисхождение ко всему, радость, изменение бурной привязанности. Вечеринку мы лет на заказ разрешили.</p>
                <form>
                    <div class="form__input-wrapper">
                        <input type="email" placeholder="Введите Email" class="form__input" />
                        <button class="btn btn--orange">Начать</button>
                    </div>
                </form>
                <div class="hero__people-wrapper">
                    <div class="hero__people-list">
                        <div class="hero__people-item">

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero__image">
            <div class="hero__image-mask">
                <img src="@/assets/hero/mask.png" alt="mask" />
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'HeroBlock',
}
</script>

<style scoped lang="sass">
.hero
    width: 100%
    overflow: hidden

    @media (max-width: $desktop-sm)
        padding-top: 150px

    @media (max-width: $tab-sm)
        padding-top: 100px

    @media (max-width: $mob)
        padding-top: 20px

    &__light 
        position: absolute
        top: 0
        left: 0
        z-index: -1

        @media (max-width: $mob)
            display: none

        & img
            width: 100%
            height: 100%
            

    &__body 
        & h1
            display: inline-flex
            margin-bottom: 33px
            line-height: 1.2
            transition: .2s transform
            transition-timing-function: ease-out

            @media (max-width: $tab)
                & br
                    display: none

            @media (max-width: $tab-sm)
                margin-bottom: 20px

        & form
            margin-bottom: 37px
            max-width: 630px
            transition: $trs max-width

            @media (max-width: $tab)
                max-width: 100%

            & .form__input-wrapper
                display: flex
                width: 100%

            & .form__input
                border-top-right-radius: 0
                border-bottom-right-radius: 0

            & .btn
                min-width: 174px
                border-top-left-radius: 0
                border-bottom-left-radius: 0

                @media (max-width: $mob)
                    min-width: 110px

    &__body-text
        & p
            margin-bottom: 44px
            max-width: 554px
            color: $blue
            font-size: clamp(16px, 1.5vw, 20px)
            transition: .2s transform, $trs max-width
            transition-timing-function: ease-out

            @media (max-width: $tab)
                max-width: 100%

            @media (max-width: $tab-sm)
                margin-bottom: 20px

    &__people-wrapper
        display: flex
        align-items: center
        grid-gap: 14px

        & p

    &__people-list
        display: flex
        max-width: 190px

    &__people-item
        @for $i from 2 through 7
            &:nth-child(#{$i})
                transform: translateX(calc(-30% * #{$i - 1}))
            
        &--last
            &::after
                content: attr(data-content)
                display: block
                position: absolute
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)
                color: $black
                font-size: 8px

    &__image
        position: absolute
        top: 113px
        right: 24px
        z-index: -1
        transition: $trs top, $trs right, $trs transform, $trs filter

        @media (max-width: $desktop-sm)
            top: 130px
            right: 60px

        @media (max-width: $tab)
            right: 0
            transform: translateX(50%)
            filter: brightness(30%)

        @media (max-width: $tab-sm)
            display: none

    &__image-mask
        width: 667px
        height: 700px
        user-select: none

        @media (max-width: $desktop-sm)
            width: 467px
            height: 500px

        & img
            width: 100%
            height: 100%

    &__image-light
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        z-index: -1

    &__right
        position: absolute
        right: 0
        top: 10%
        z-index: -1

        @media (max-width: $tab)
            display: none
</style>
  