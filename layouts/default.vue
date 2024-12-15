<template>
  <div id="container">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/organisms/Header.vue';
import Footer from '@/components/organisms/Footer.vue';

onMounted(() => {
  // const hash = ctx.root._route.hash;
  // if (hash && hash.match(/^#.+$/)) {
  //   ctx.root.$scrollTo(hash);
  // }
});
</script>
