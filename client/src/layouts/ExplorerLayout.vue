<template>
    <div class="explorer-layout">
        <HeaderBlock />
        <router-view />
    </div>
</template>
  
<script>
import HeaderBlock from '@/components/HeaderBlock';

export default {
    name: 'ExplorerLayout',

    components: {
        HeaderBlock
    }
}
</script>

<style scoped lang="sass">
.explorer-layout
    @media (max-width: $desktop-sm)
        padding-top: 126px

    @media (max-width: $tab-sm)
        padding-top: 86px

    @media (max-width: $mob)
        padding-top: 74px
</style>
  