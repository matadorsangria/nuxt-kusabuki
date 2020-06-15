<template>
  <div :class="$style.wrapper">
    <NewsArticle v-for="data in filteredNewsData" :key="data.id" :data="data" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NewsArticle from '@/components/molecules/NewsArticle.vue';

export default {
  components: {
    NewsArticle,
  },
  props: {
    limit: {
      required: false,
      type: Number,
      default: 0,
    },
  },
  computed: {
    ...mapState(['newsData']),
    filteredNewsData() {
      return this.limit ? this.newsData.slice(0, this.limit) : this.newsData;
    },
  },
};
</script>

<style module>
.wrapper {
  display: grid;
  margin-bottom: 40px;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
}
</style>
