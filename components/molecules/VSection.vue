<template>
  <section :class="$style.wrapper">
    <div :class="$style.title">
      <p :class="$style.labelSub">
        <slot name="labelSub" />
      </p>
      <h1 v-if="isTitleh1" :class="$style.labelMain">
        <slot name="labelMain" />
      </h1>
      <h2 v-if="isTitleh2" :class="$style.labelMain">
        <slot name="labelMain" />
      </h2>
    </div>
    <div :class="$style.content">
      <slot name="content" />
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: {
    titleTag: {
      required: false,
      type: String,
      default: 'h2',
    },
  },
  setup(props) {
    const isTitleh1 = props.titleTag === 'h1';
    const isTitleh2 = props.titleTag === 'h2';

    return { isTitleh1, isTitleh2 };
  },
});
</script>

<style module>
.wrapper {
  padding: 40px 60px;
}
@media (max-width: 677px) {
  .wrapper {
    padding: 30px;
  }
}
.title {
  margin: 0 0 20px 0;
}
.labelSub {
  margin-bottom: 10px;
  font-size: 11px;
}
.labelMain {
  font-size: 21px;
}
.content {
  margin: 0;
}
</style>
