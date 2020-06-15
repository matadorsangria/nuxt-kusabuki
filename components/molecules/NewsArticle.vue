<template>
  <article class="card has-button third bottom order-1">
    <a href="#" :class="$style.news__link" @click.prevent>
      <div :class="$style.news__figure">
        <img
          :src="require(`~/assets/images/${data.image}`)"
          alt=""
          :class="$style.news__image"
        />
        <p :class="[$style.news__label, $style[`is-${data.label}`]]">
          {{ data.label.toUpperCase() }}
        </p>
      </div>
      <div :class="$style.news__caption">
        <p :class="$style.news__title">{{ data.title }}</p>
        <p :class="$style.news__date">{{ data.date }}</p>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style module>
.news__link {
  color: #222;
}
.news__figure {
  position: relative;
}
.news__image {
  width: 100%;
  transition: filter 0.5s;
}
.news__link:hover .news__image {
  filter: brightness(120%);
}
.news__label {
  position: absolute;
  left: 0;
  top: 0;
  padding: 5px;
  font-size: 12px;
  color: #fff;
}
.news__label.is-shop {
  background-color: sandybrown;
}
.news__label.is-event {
  background-color: yellowgreen;
}
.news__label.is-report {
  background-color: cornflowerblue;
}
.news__caption {
  width: 100%;
  padding: 8px 0;
  line-height: 1.4;
}
.news__title {
  margin-bottom: 4px;
  /* font-family: 'Noto Serif JP', YuMincho, 'Yu Mincho',	serif;
  font-weight: bold; */
}
.news__date {
  font-size: 10px;
}
</style>
