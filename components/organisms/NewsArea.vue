<template>
  <VSection>
    <template v-slot:labelSub>
      お知らせ
    </template>
    <template v-slot:labelMain>
      News
    </template>
    <template v-slot:content>
      <NewsList :limit="limit" />
      <VButton v-if="limit" link="/news" text="Read More" />
      <Pager v-else />
    </template>
  </VSection>
</template>

<script>
import VSection from '@/components/molecules/VSection.vue';
import NewsList from '@/components/molecules/NewsList.vue';
import VButton from '@/components/atoms/VButton.vue';
import Pager from '@/components/atoms/Pager.vue';

export default {
  components: {
    VSection,
    NewsList,
    VButton,
    Pager
  },
  props: {
    limit: {
      required: false,
      type: Number,
      default: 0
    }
  }
};
</script>
