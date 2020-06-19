<template>
  <div id="container">
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api';
import Header from '@/components/organisms/Header.vue';
import Footer from '@/components/organisms/Footer.vue';

export default defineComponent({
  components: {
    Header,
    Footer,
  },
  setup(_props, ctx) {
    onMounted(() => {
      const hash = ctx.root._route.hash;
      if (hash && hash.match(/^#.+$/)) {
        ctx.root.$scrollTo(hash);
      }
    });
  },
});
</script>
