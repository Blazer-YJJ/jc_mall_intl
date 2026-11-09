<template>
  <SitePage
    :page-key="pageKey"
    :mode="route.name"
    :stub="route.stub || ''"
    :product-id="route.id || ''"
    :preview="isPreview"
    edition="intl"
  />
</template>

<script setup>
import { computed } from 'vue';
import SitePage from '@shared/views/SitePage.vue';
import { route } from '@shared/router';

const pageKey = computed(() => (route.value.name === 'page' ? route.value.pageKey : 'home'));
const isPreview = computed(() => (route.value.query.get('preview') || '') === '1');
</script>
