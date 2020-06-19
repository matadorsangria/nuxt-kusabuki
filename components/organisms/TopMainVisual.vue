<template>
  <div :class="$style.mainvisual">
    <div :class="$style.slide" class="js-slide">
      <ul>
        <li
          :class="$style.slide__list"
          :style="{ backgroundImage: `url(${image04})` }"
        />
        <li
          :class="$style.slide__list"
          :style="{ backgroundImage: `url(${image03})` }"
        />
        <li
          :class="$style.slide__list"
          :style="{ backgroundImage: `url(${image02})` }"
        />
        <li
          :class="$style.slide__list"
          :style="{ backgroundImage: `url(${image01})` }"
        />
      </ul>
    </div>
    <div :class="$style.mainvisualText">
      <div :class="$style.mainvisualText__inner">
        <h1 :class="$style.mainvisualText__title">
          Ancient Town Kusabuki
        </h1>
        <div :class="$style.mainvisualText__produce">
          produced by matadorsangria
        </div>
      </div>
    </div>
    <p :class="$style.mainvisualScroll">
      SCROLL
    </p>
  </div>
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api';
import image01 from '~/assets/images/mv_01.jpg';
import image02 from '~/assets/images/mv_02.jpg';
import image03 from '~/assets/images/mv_03.jpg';
import image04 from '~/assets/images/mv_04.jpg';

export default defineComponent({
  data() {
    return {
      image01,
      image02,
      image03,
      image04,
    };
  },
  setup(_props, ctx) {
    onMounted(() => {
      const $ul = document.querySelector('.js-slide ul');
      const slideCount = $ul.querySelectorAll('li').length;
      // Safariはロード時に非表示だと画像が読み込まれないため100ms遅らせる
      setTimeout(() => {
        for (let i = 0; i < slideCount - 1; i++) {
          $ul.children[i].style.display = 'none';
        }
      }, 100);
      setInterval(async () => {
        $ul.children[slideCount - 2].style.display = 'block';
        await ctx.root.$delay(1000);
        $ul.insertBefore($ul.children[slideCount - 1], $ul.children[0]);
        $ul.children[0].style.display = 'none';
      }, 9000);
    });
  },
});
</script>

<style module lang="scss">
.mainvisual {
  position: relative;
  width: 100%;
  height: 100%;
}
.slide {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    background-color: #000;
  }
}
.slide__list {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
  transform: scale(1.03);
  transform-origin: 0 50%;
  animation: slide 10s linear forwards;

  @media (orientation: portrait) {
    transform: scale(1.1);
  }
}
@keyframes slide {
  90% {
    opacity: 1;
  }
  100% {
    transform-origin: 100% 50%;
    opacity: 0;
  }
}
.mainvisualText {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainvisualText__inner {
  width: 170px;
}
.mainvisualText__title {
  margin: 0;
  padding: 0;
  width: 170px;
  height: 114px;
  font-family: 'Crimson Pro', serif;
  font-size: 44px;
  color: #fff;
}
.mainvisualText__produce {
  line-height: 1.5;
  font-family: 'Times New Roman', serif;
  font-size: 0.8rem;
  margin-top: 25px;
  white-space: nowrap;
  letter-spacing: 0.1em;
  color: #fff;
}
.mainvisualScroll {
  position: absolute;
  left: 20px;
  bottom: 0;
  display: flex;
  align-items: center;
  writing-mode: vertical-rl;
  letter-spacing: 1px;
  font-size: 12px;
  color: #fff;

  &::after {
    content: '';
    width: 1px;
    background: #fff;
    margin: 8px 0 0;
    height: 60px;
    overflow: hidden;
    animation: scrollarrow 3s cubic-bezier(0.19, 1, 0.22, 1) 1s 3;
  }
}

@keyframes scrollarrow {
  0% {
    clip-path: inset(0 0 0 0);
  }
  25% {
    clip-path: inset(0 0 0 0);
  }
  50% {
    clip-path: inset(100% 0 0 0);
  }
  51% {
    clip-path: inset(0 0 100% 0);
  }
  75% {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}
</style>
