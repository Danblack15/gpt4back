<template>
  <div>
    <HintUI v-if="hint" :data="hint"/>
    <LoadingBlock v-show="loading" />
    <router-view />
  </div>
</template>

<script setup>
import LoadingBlock from '@/components/LoadingBlock';
import HintUI from '@/components/ui/HintUI';

import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();

const loading = computed(() => {
  return store.state.loading;
});

const hint = computed(() => {
  return store.state.hint;
});
</script>

<style lang="scss"></style>
