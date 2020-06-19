<template>
  <div
    :class="$style.mainvisual"
    :style="{
      backgroundImage: `url(${require(`~/assets/images/${image}`)})`,
    }"
  />
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    image: {
      required: true,
      type: String,
    },
  },
});
</script>

<style module>
.mainvisual {
  width: 100%;
  height: 80px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
@media (min-width: 678px) {
  .mainvisual {
    height: 120px;
  }
}
</style>
