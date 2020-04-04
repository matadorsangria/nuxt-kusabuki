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
        <figure class="card order-1">
          <figcaption>
            <span class="label">SEA BREAZE</span>
            <p>Nagisa</p>
          </figcaption>
          <a href="#" class="target" @click.prevent />
          <div class="quickbuy">
            <a href="#" class="button" @click.prevent>Show Detail</a>
          </div>
        </figure>
        <figure class="card order-2">
          <figcaption style="color: black;">
            <span class="label">NATURE TOUR</span>
            <p>Komorebi</p>
          </figcaption>
          <a href="#" class="target" @click.prevent />
          <div class="quickbuy">
            <a href="#" class="button" @click.prevent>Show Detail</a>
          </div>
        </figure>
        <figure class="card order-3">
          <figcaption>
            <span class="label">CULTURE STUDY</span>
            <p>Kimonoto</p>
          </figcaption>
          <a href="#" class="target" @click.prevent />
          <div class="quickbuy">
            <a href="#" class="button">Show Detail</a>
          </div>
        </figure>
      </div>
      <VButton link="/stories" text="Read More" />
    </template>
  </VSection>
</template>

<script>
import VSection from '@/components/molecules/VSection.vue';
import VButton from '@/components/atoms/VButton.vue';

export default {
  components: {
    VSection,
    VButton
  }
};
</script>

<style>
.wrapper {
  display: grid;
  margin-bottom: 40px;
  gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
.label {
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.1rem;
  font-size: 0.8rem;
  opacity: 0.9;
  font-weight: 500;
}
.wrapper figure {
  height: 400px;
  background-position: center;
  background-size: cover;
  transform: translateY(0);
}
@media (max-width: 1024px) {
  .wrapper figure {
    height: 380px;
  }
}
.wrapper figure.order-1 {
  background-image: url('~assets/images/pic_stories_01.jpg');
}
.wrapper figure.order-2 {
  background-image: url('~assets/images/pic_stories_02.jpg');
}
.wrapper figure.order-3 {
  background-image: url('~assets/images/pic_stories_03.jpg');
}
@media (max-width: 1024px) {
  .wrapper figure {
    opacity: 1;
    transform: translateY(0);
  }
}

figure.card {
  overflow: hidden;
}

figure.card figcaption {
  position: absolute;
  bottom: 0;
  padding-top: 30px;
  padding-bottom: 30px;
  left: 0;
  z-index: 10;
  width: 100%;
  text-align: center;
  backface-visibility: hidden;
  color: #fff;
  transition: transform 0.3s, opacity 0.3s, bottom 0.3s;
}
figure.card:hover figcaption {
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
}
figure.card figcaption h3 {
  margin-top: 15px;
  font-size: 1.25rem;
}
figure.card figcaption p {
  font-size: 1.25rem;
  margin: 6px 0;
}
@media (max-width: 1024px) {
  figure.card figcaption h3 {
    font-size: 1rem;
  }
  figure.card figcaption p {
    font-size: 1rem;
  }
}
.target {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
figure.card .quickbuy {
  z-index: 10000;
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
figure.card:hover .quickbuy {
  transform: translateY(0%);
  opacity: 1;
  transition: transform 0.3s, opacity 0.5s;
}
.button {
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
</style>
