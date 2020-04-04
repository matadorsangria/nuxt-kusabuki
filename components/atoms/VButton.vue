<template>
  <div :class="$style.button">
    <a :href="link" :class="$style.button__link">{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      required: false,
      type: String,
      default: ''
    },
    text: {
      required: true,
      type: String
    }
  }
};
</script>

<style module lang="scss">
.button {
  display: flex;
  justify-content: center;
}
.button__link {
  display: block;
  width: 160px;
  padding: 15px;
  border: 1px solid #888;
  background-color: #fff;
  text-align: center;
  color: #333;
  transition: all 0.4s;

  &:hover {
    background-color: #222;
    color: #fff;
  }
}
</style>
