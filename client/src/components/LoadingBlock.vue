<template>
    <div class="loading">
        <div class="lds-facebook">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>
  
<script>
import store from '@/store';

export default {
    name: 'LoadingBlock',
}
</script>

<style scoped lang="sass">
.loading
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    background: rgba(black, .6)
    backdrop-filter: blur(5px)
    z-index: 10

.lds-facebook
  display: inline-block
  position: relative
  width: 80px
  height: 80px

.lds-facebook div 
  display: inline-block
  position: absolute
  left: 8px
  width: 16px
  background: white
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite

.lds-facebook div:nth-child(1) 
  left: 8px
  animation-delay: -0.24s

.lds-facebook div:nth-child(2) 
  left: 32px
  animation-delay: -0.12s

.lds-facebook div:nth-child(3) 
  left: 56px
  animation-delay: 0

@keyframes lds-facebook 
  0% 
    top: 8px
    height: 64px
  
  50%, 100% 
    top: 24px
    height: 32px
  

</style>
  