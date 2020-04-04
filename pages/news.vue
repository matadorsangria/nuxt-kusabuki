<template>
  <div id="content">
    <Mainvisual image="pic_second_02.jpg" />
    <div id="wrapper">
      <NewsArea />
    </div>
  </div>
</template>

<script>
import Mainvisual from '@/components/molecules/Mainvisual.vue';
import NewsArea from '@/components/organisms/NewsArea.vue';

export default {
  components: {
    Mainvisual,
    NewsArea
  }
};
</script>
