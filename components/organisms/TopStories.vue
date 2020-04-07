<template>
  <VSection>
    <template v-slot:labelSub>
      ストーリー
    </template>
    <template v-slot:labelMain>
      Pickup Stories
    </template>
    <template v-slot:content>
      <div class="wrapper">
        <figure v-lazy:background-image="pic01">
          <figcaption>
            <p class="story__title">
              Sea Sound
            </p>
            <p class="story__subtitle">
              before dark
            </p>
          </figcaption>
          <a href="/stories#story01" class="story__link">
            <div class="story__button">
              <span class="story__buttonlink">
                Show Detail
              </span>
            </div>
          </a>
        </figure>
        <figure v-lazy:background-image="pic02">
          <figcaption style="color: black;">
            <p class="story__title">
              Living with Flowers
            </p>
            <p class="story__subtitle">
              cluster amaryllises
            </p>
          </figcaption>
          <a href="/stories#story02" class="story__link">
            <div class="story__button">
              <span class="story__buttonlink">
                Show Detail
              </span>
            </div>
          </a>
        </figure>
        <figure v-lazy:background-image="pic03">
          <figcaption>
            <p class="story__title">
              Kimono Culture
            </p>
            <p class="story__subtitle">
              ohanami picnic
            </p>
          </figcaption>
          <a href="/stories#story03" class="story__link">
            <div class="story__button">
              <span class="story__buttonlink">
                Show Detail
              </span>
            </div>
          </a>
        </figure>
      </div>
      <VButton link="/stories" text="Read More" />
    </template>
  </VSection>
</template>

<script>
import pic01 from '~/assets/images/pic_stories_01.jpg';
import pic02 from '~/assets/images/pic_stories_02.jpg';
import pic03 from '~/assets/images/pic_stories_03.jpg';
import VSection from '@/components/molecules/VSection.vue';
import VButton from '@/components/atoms/VButton.vue';

export default {
  components: {
    VSection,
    VButton
  },
  data() {
    return {
      pic01,
      pic02,
      pic03
    };
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  display: grid;
  margin-bottom: 40px;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
figure {
  position: relative;
  height: 380px;
  background-position: center;
  background-size: cover;
  overflow: hidden;

  figcaption {
    position: absolute;
    bottom: 0;
    padding-top: 30px;
    padding-bottom: 30px;
    left: 0;
    width: 100%;
    text-align: center;
    backface-visibility: hidden;
    color: #fff;
    transition: transform 0.3s, opacity 0.3s, bottom 0.3s;

    .story__title {
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: 0.1rem;
      font-size: 0.8rem;
      opacity: 0.9;
      font-weight: 500;
    }

    .story__subtitle {
      font-size: 1.25rem;
      margin: 6px 0;

      @media (max-width: 1024px) {
        & {
          font-size: 1rem;
        }
      }
    }
  }
  &:hover figcaption {
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
  }

  .story__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .story__button {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    padding-bottom: 30px;
    transition: transform 0.3s;
    transform: translateY(20%);
    opacity: 0;
    text-align: center;
  }
  &:hover .story__button {
    transform: translateY(0%);
    opacity: 1;
    transition: transform 0.3s, opacity 0.5s;
  }

  .story__buttonlink {
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.1rem;
    color: #fff;
    background: black;
    opacity: 1;
    font-size: 0.8rem;
    position: relative;
    padding: 15px;
    font-weight: 500;
    line-height: 1;
    cursor: pointer;
    transition: all 0.25s;
  }
}
</style>
