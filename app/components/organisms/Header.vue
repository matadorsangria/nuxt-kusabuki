<template>
  <header id="header" :class="{ 'is-open': state.globalMenuOpen }">
    <div
      class="header__bg"
      :class="{ 'is-active': !isTop || state.headerBgActive }"
    />
    <p class="header__logo">
      <a href="/">
        <span>{{ SITE_NAME }}</span>
        produced by Kusabuki System
      </a>
    </p>
    <div class="sp__menu" @click="switchGlobalMenu">
      <div class="sp__menu--line" />
      <div class="sp__menu--line" />
      <div class="sp__menu--line" />
    </div>
    <nav class="header__nav">
      <ul class="header__nav--list">
        <li><a href="/">TOP</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/stories">STORIES</a></li>
        <li><a href="/news">NEWS</a></li>
        <li>
          <a href="/" @click.prevent>LOCATIONS</a>
        </li>
        <li>
          <a href="/" @click.prevent>CONTACT</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { SITE_NAME } from '~/constants';

const props = withDefaults(defineProps<{
  page?: string
}>(), {
  page: ''
});

const state = reactive({
  globalMenuOpen: false,
  headerBgActive: true,
});
const setGlobalMenuOpen = (isOpen: boolean) => {
  state.globalMenuOpen = isOpen;
};
const setHeaderBgActive = (isActive: boolean) => {
  state.headerBgActive = isActive;
};
const isTop = props.page === 'top';
const switchGlobalMenu = () => {
  setGlobalMenuOpen(!state.globalMenuOpen);
  document.querySelector('body')?.classList.toggle('scroll-stop');
};

onMounted(() => {
  if (isTop) {
    const mvObserver = new IntersectionObserver(
      (e) => {
        setHeaderBgActive(!e[0].isIntersecting);
      },
      {
        root: null,
        threshold: 0.25,
      }
    );
    mvObserver.observe(document.querySelector('.js-slide') as HTMLDivElement);
  }
});
</script>

<style scoped lang="scss">
#header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: $zindex-header;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__bg {
  position: absolute;
  top: -70px;
  width: 100%;
  height: 70px;
  background-color: rgb(71, 71, 66);
  box-shadow: 0px -5px 20px 0px rgba(0, 0, 0, 0.6);
  transition: all 1s;

  &.is-active {
    top: 0;
  }
}
.header__logo {
  position: relative;
  padding: 20px;
  line-height: 1.25;
  font-family: 'Times New Roman', serif;
  font-size: 10px;
  z-index: $zindex-sp-headerLogo;
  a {
    display: block;
    color: #fff;
  }
  span {
    display: block;
    font-family: 'Crimson Pro', serif;
    font-size: 16px;
  }
}
@media (min-width: 678px) {
  .header__nav {
    position: relative;
    padding: 20px;
    font-size: 12px;

    &--list {
      display: flex;
      li {
        margin: 5px;
        letter-spacing: 1px;
        a {
          display: block;
          padding: 5px;
          background-color: rgba(255, 255, 255, 0);
          color: #fff;
          transition: background-color 0.4s, color 0.4s;
          &:hover {
            background-color: rgba(255, 255, 255, 0.8);
            color: #000;
          }
        }
      }
    }
  }
}
@media (max-width: 677px) {
  .is-open .header__logo a {
    color: #000;
  }
  .sp__menu {
    position: relative;
    z-index: $zindex-sp-headerMenu;
    width: 36px;
    height: 36px;
    margin-right: 20px;

    &--line {
      position: absolute;
      left: 8px;
      width: 20px;
      height: 1px;
      overflow: hidden;
      background-color: #fff;
      transition: all 0.3s;

      &:nth-child(1) {
        top: 9px;
      }
      &:nth-child(2) {
        top: 17px;
        opacity: 1;
      }
      &:nth-child(3) {
        bottom: 10px;
      }
    }
  }
  .is-open .sp__menu--line {
    background-color: #000;

    &:nth-child(1) {
      top: 17px;
      transform: rotate(45deg);
    }
    &:nth-child(2) {
      opacity: 0;
    }
    &:nth-child(3) {
      bottom: 18px;
      transform: rotate(-45deg);
    }
  }
  .header__nav {
    position: fixed;
    top: 0;
    width: 100%;
    height: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    opacity: 0;
    pointer-events: none;
    z-index: $zindex-sp-headerNav;
    transition: height 0.01s, opacity 0.3s;
    text-align: center;

    .is-open & {
      height: 100%;
      opacity: 1;
      pointer-events: auto;
    }
    ul li {
      margin: 30px 20px;
      letter-spacing: 2px;
      font-size: 22px;
      a {
        color: #000;
      }
    }
  }
}
</style>
