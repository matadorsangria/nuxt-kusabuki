<template>
  <VSection>
    <template #labelSub>
      お知らせ
    </template>
    <template #labelMain>
      News
    </template>
    <template #content>
      <NewsList :limit="limit" />
      <VButton v-if="limit" link="/news" text="Read More" />
      <Pager v-else />
    </template>
  </VSection>
</template>

<script setup lang="ts">
import VSection from '@/components/molecules/VSection.vue';
import NewsList from '@/components/molecules/NewsList.vue';
import VButton from '@/components/atoms/VButton.vue';
import Pager from '@/components/atoms/Pager.vue';

withDefaults(defineProps<{
  limit?: number
}>(), {
  limit: 0
});
</script>
