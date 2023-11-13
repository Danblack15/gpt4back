<template>
    <div class="landing-layout container">
        <nav>
            <router-link to="/register">Регистрация</router-link>
            <router-link to="/login">Войти</router-link>
        </nav>
        <router-view />
    </div>
</template>
  
<script>
export default {
    name: 'LandingLayout',
}
</script>

<style scoped lang="sass">
.landing-layout
    display: flex
    flex-direction: column
    align-items: center
    min-height: 100vh

    & nav
        padding: 40px
        display: flex
        grid-gap: 20px  

        & a
            font-size: clamp(16px, 1.5vw, 20px)
</style>
  