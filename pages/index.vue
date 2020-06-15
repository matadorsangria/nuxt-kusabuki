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

<script>
import bgStories from '~/assets/images/bg_stories.png';
import TopMainVisual from '@/components/organisms/TopMainVisual.vue';
import TopAbout from '@/components/organisms/TopAbout.vue';
import TopStories from '@/components/organisms/TopStories.vue';
import NewsArea from '@/components/organisms/NewsArea.vue';
import Footer from '@/components/organisms/Footer.vue';

export default {
  layout: 'index',
  components: {
    TopMainVisual,
    TopAbout,
    TopStories,
    NewsArea,
    Footer,
  },
  data() {
    return {
      bgStories,
    };
  },
};
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
  background-image: url(~assets/images/bg_stories.png);
}
</style>
