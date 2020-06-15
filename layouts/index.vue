<template>
  <div id="container">
    <Header page="top" />
    <nuxt />
    <div class="loading">
      <div class="loading__main">
        <div class="loading__image js-loading__image">
          <div class="loading__image--separate" />
          <div class="loading__image--separate" />
          <div class="loading__image--separate" />
          <div class="loading__image--separate" />
          <div class="loading__image--separate" />
          <div class="loading__image--separate" />
          <div class="loading__image--separate" />
          <div class="loading__image--separate" />
          <div class="loading__image--separate" />
          <div class="loading__image--separate" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/organisms/Header.vue';

export default {
  components: {
    Header,
  },
  mounted() {
    let isLoaded = false;
    const $image = document.querySelector('.js-loading__image');
    const $separates = [
      ...$image.querySelectorAll('.loading__image--separate'),
    ];
    let count = $separates.length;
    let timer = setInterval(() => {
      const el = $separates[--count];
      el.classList.add('is-hidden');
      if (count === 0) {
        clearInterval(timer);
        if (isLoaded) return;
        count = $separates.length;
        timer = setInterval(async () => {
          const el = $separates[--count];
          el.classList.remove('is-hidden');
          if (count === 0) {
            clearInterval(timer);
            if (isLoaded) return;
            await this.$delay(1000);
            $image.classList.add('spin');
          }
        }, 80);
      }
    }, 80);

    const promiseOnload = new Promise((resolve) => {
      window.addEventListener('load', () => {
        resolve();
      });
    });

    const promiseLoading = Promise.resolve(this.$delay(860));

    Promise.all([promiseOnload, promiseLoading]).then(async () => {
      clearInterval(timer);
      isLoaded = true;
      document.querySelector('.loading').classList.add('loaded');
      await this.$delay(1000);
      document.querySelector('.loading').remove();
    });
  },
};
</script>

<style scoped lang="scss">
$zindex-loading: 200;

.loading {
  position: fixed;
  z-index: $zindex-loading;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 1;
  transition: opacity 1s;

  &.loaded {
    opacity: 0;
  }
}
.loading__main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loading__image {
  width: 50px;
  height: 50px;
  overflow: hidden;

  &.spin {
    animation: spin 20s linear forwards infinite;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

.loading__image--separate {
  width: 100%;
  height: 5px;
  margin: 0;
  background-color: #666;
  background-size: cover;
  opacity: 1;
  transform: rotate(0deg);
  transition: all 0.5s;
  overflow: hidden;

  &.is-hidden {
    opacity: 0;
  }
  &:nth-child(1).is-hidden {
    margin-left: 3.4px;
    transform: rotate(-0.8deg);
  }
  &:nth-child(2).is-hidden {
    margin-left: -7.4px;
    transform: rotate(1.3deg);
  }
  &:nth-child(3).is-hidden {
    margin-left: -2px;
    transform: rotate(-1.6deg);
  }
  &:nth-child(4).is-hidden {
    margin-left: 2.5px;
    transform: rotate(1.2deg);
  }
  &:nth-child(5).is-hidden {
    margin-left: -1.1px;
    transform: rotate(-1.7deg);
  }
  &:nth-child(6).is-hidden {
    margin-left: -5.8px;
    transform: rotate(-0.7deg);
  }
  &:nth-child(7).is-hidden {
    margin-left: 0.5px;
    transform: rotate(-0.6deg);
  }
  &:nth-child(8).is-hidden {
    margin-left: 3px;
    transform: rotate(1.2deg);
  }
  &:nth-child(9).is-hidden {
    margin-left: -0.9px;
    transform: rotate(0.1deg);
  }
  &:nth-child(10).is-hidden {
    margin-left: 8.1px;
    transform: rotate(1.3deg);
  }
}
</style>
