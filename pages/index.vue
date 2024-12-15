<template>
  <div id="content">
    <TopMainVisual />
    <div id="wrapper">
      <main>
        <TopAbout />
        <TopStories :class="$style.stories" />
        <NewsArea :limit="4" />
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import TopMainVisual from '@/components/organisms/TopMainVisual.vue';
import TopAbout from '@/components/organisms/TopAbout.vue';
import TopStories from '@/components/organisms/TopStories.vue';
import NewsArea from '@/components/organisms/NewsArea.vue';
import Footer from '@/components/organisms/Footer.vue';

// eslint-disable-next-line no-undef
definePageMeta({
  layout: 'top',
})
</script>

<style>
#container,
#__nuxt,
#__layout {
  height: 100%;
}
#content {
  height: 100%;
  padding-top: 0;
}
</style>

<style module lang="scss">
.stories {
  background-color: #ddd;
  background-image: url('~/assets/images/bg_stories.png');
}
</style>
