<template>
  <div :class="$style.wrapper">
    <NewsArticle v-for="data in filteredNewsData" :key="data.id" :data="data" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import NewsArticle from '@/components/molecules/NewsArticle.vue';

export default defineComponent({
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
  setup(props) {
    const newsData = [
      {
        id: 1,
        label: 'shop',
        title: '渚カフェのおもてなし',
        date: '2022.12.27',
        image: 'pic_news_01.jpg',
      },
      {
        id: 2,
        label: 'event',
        title: 'キャンドルナイト in 草吹 2022',
        date: '2022.12.24',
        image: 'pic_news_02.jpg',
      },
      {
        id: 3,
        label: 'shop',
        title: 'COSTA DEL LIBERTAD プレオープン',
        date: '2022.11.1',
        image: 'pic_news_03.jpg',
      },
      {
        id: 4,
        label: 'report',
        title: '黒姫キャンプ場体験記 Vol.2',
        date: '2022.8.14',
        image: 'pic_news_04.jpg',
      },
      {
        id: 5,
        label: 'event',
        title: 'マダム・ミモザ at Blow Cafe',
        date: '2022.8.7',
        image: 'pic_news_08.jpg',
      },
      {
        id: 6,
        label: 'report',
        title: '黒姫キャンプ場体験記 Vol.1',
        date: '2022.8.3',
        image: 'pic_news_07.jpg',
      },
      {
        id: 7,
        label: 'event',
        title: '拓園寺 十夜法要',
        date: '2021.10.8',
        image: 'pic_news_06.jpg',
      },
      {
        id: 8,
        label: 'event',
        title: '親子のための稲作体験',
        date: '2021.3.9',
        image: 'pic_news_05.jpg',
      },
    ];
    const filteredNewsData = props.limit
      ? newsData.slice(0, props.limit)
      : newsData;

    return { filteredNewsData };
  },
});
</script>

<style module>
.wrapper {
  display: grid;
  margin-bottom: 40px;
  gap: 30px;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
}
</style>
