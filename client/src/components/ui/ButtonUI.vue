<template>
    <router-link 
        v-if="link" 
        :to="link" 
        :class="['btn', {
            'btn--orange': orange
        }]"
    >
        <span class="btn__text">
            <slot></slot>
        </span>
    </router-link>

    <button 
        v-else 
        :class="['btn', {
            'btn--orange': orange
        }]"
    >
        <span class="btn__text">
            <slot></slot>
        </span>
    </button>
</template>
  
<script>
export default {
    name: 'ButtonUI',

    props: {
        link: {
            type: String,
        },
        orange: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped lang="sass">
.btn
    color: $white

    &--orange
</style>
  