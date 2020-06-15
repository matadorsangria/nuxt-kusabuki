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
export default {
  props: {
    titleTag: {
      required: false,
      type: String,
      default: 'h2',
    },
  },
  computed: {
    isTitleh1() {
      return this.titleTag === 'h1';
    },
    isTitleh2() {
      return this.titleTag === 'h2';
    },
  },
};
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
