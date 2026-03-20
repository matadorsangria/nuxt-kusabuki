<template>
  <div id="content">
    <Mainvisual image="pic_second_02.jpg" />
    <div id="wrapper">
      <NewsArea />
    </div>
  </div>
</template>

<script setup lang="ts">
import Mainvisual from '@/components/molecules/Mainvisual.vue';
import NewsArea from '@/components/organisms/NewsArea.vue';

useHead({
  title: 'News',
});
</script>
