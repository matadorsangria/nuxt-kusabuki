<template>
  <div :class="$style.mainvisual"><nuxt-img :src="`/images/${image}`" /></div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
}>();
</script>

<style module lang="scss">
.mainvisual {
  width: 100%;
  height: 80px;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media (min-width: 678px) {
    height: 120px;
  }
}
</style>
