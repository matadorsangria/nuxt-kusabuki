<template>
  <section :class="$style.section">
    <h2 :class="$style.section__title">
      <slot name="title" />
    </h2>
    <div :class="$style.section__content">
      <slot name="content" />
    </div>
  </section>
</template>

<style module lang="scss">
.section {
  padding: 30px;
  line-height: 1.6;
  text-align: center;
}
.section__title {
  margin-bottom: 0.8em;
  font-size: 20px;
  font-family: YuMincho, 'Yu Mincho', serif;
}
.section__content {
  font-family: YuGothic, 'Yu Gothic', sans-serif;

  @media (max-width: 510px) {
    text-align: left;
  }
}
</style>
