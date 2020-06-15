<template>
  <div id="content">
    <Mainvisual image="pic_second_01.jpg" />
    <VSection title-tag="h1">
      <template v-slot:labelSub>
        草吹町について
      </template>
      <template v-slot:labelMain>
        About Kusabuki town
      </template>
      <template v-slot:content>
        <div :class="$style.wrapper">
          <SectionText>
            <template v-slot:title>
              草吹の魅力
            </template>
            <template v-slot:content>
              <p>
                雨ニモマケズ 風ニモマケズ
                <br />
                雪ニモ夏ノ暑サニモマケヌ 丈夫ナカラダヲモチ
                <br />
                慾ハナク 決シテ瞋ラズ イツモシヅカニワラッテヰル
              </p>
            </template>
          </SectionText>
          <div :class="$style.photoFrame">
            <div :class="[$style.photoFrame__box, $style.photoFrame__lft]">
              <div class="js-photoFrame__img" :class="$style.photoFrame__img" />
            </div>
            <div :class="[$style.photoFrame__box, $style.photoFrame__rgt]">
              <div class="js-photoFrame__img" :class="$style.photoFrame__img" />
            </div>
          </div>
          <div :class="$style.photoFrame__after">
            <SectionText>
              <template v-slot:title>
                豊かな自然と守り抜かれた文化
              </template>
              <template v-slot:content>
                <p>
                  一日ニ玄米四合ト 味噌ト少シノ野菜ヲタベ
                  <br />
                  アラユルコトヲ ジブンヲカンジョウニ入レズニ
                  <br />
                  ヨクミキキシワカリ ソシテワスレズ
                  <br />
                  野原ノ松ノ林ノ蔭ノ 小サナ萓ブキノ小屋ニヰテ
                  <br />
                  東ニ病気ノコドモアレバ 行ッテ看病シテヤリ
                  <br />
                  西ニツカレタ母アレバ 行ッテソノ稲ノ朿ヲ負ヒ
                  <br />
                  南ニ死ニサウナ人アレバ 行ッテコハガラナクテモイヽトイヒ
                  <br />
                  北ニケンクヮヤソショウガアレバ ツマラナイカラヤメロトイヒ
                </p>
              </template>
            </SectionText>
          </div>
          <SectionText>
            <template v-slot:title>
              不自由さを受け入れ
              <br />
              人間らしさを取り戻す
            </template>
            <template v-slot:content>
              <p>
                ヒドリノトキハナミダヲナガシ サムサノナツハオロオロアルキ
                <br />
                ミンナニデクノボートヨバレ ホメラレモセズ クニモサレズ
                <br />
                サウイフモノニ ワタシハナリタイ
              </p>
            </template>
          </SectionText>
        </div>
      </template>
    </VSection>
  </div>
</template>

<script>
import Mainvisual from '@/components/molecules/Mainvisual.vue';
import VSection from '@/components/molecules/VSection.vue';
import SectionText from '@/components/molecules/SectionText.vue';

export default {
  components: {
    Mainvisual,
    VSection,
    SectionText,
  },
  mounted() {
    this.animation();
    document.addEventListener('scroll', () => {
      this.animation();
    });
    document.addEventListener('touchmove', () => {
      this.animation();
    });
  },
  methods: {
    animation() {
      const imgs = [...document.querySelectorAll('.js-photoFrame__img')];
      const clientRect = imgs[0].getBoundingClientRect();
      imgs.forEach((el) => {
        el.style.transform = `matrix(1, 0, 0, 1, 0, ${-clientRect.top / 20})`;
      });
    },
  },
};
</script>

<style module lang="scss">
$zindex-photoFrameLft: 20;
$zindex-photoFrameRgt: 10;

.wrapper {
  margin: 0 -60px;

  @media (max-width: 677px) {
    margin: 0 -30px;
  }
}
.photoFrame {
  position: relative;
  margin: 20px auto;
}
.photoFrame__box {
  position: absolute;
  width: 60vw;
  max-width: 300px;
  height: 60vw;
  max-height: 300px;
  overflow: hidden;
  box-sizing: content-box;
}
.photoFrame__lft {
  z-index: $zindex-photoFrameLft;
  left: 0;
  top: 60px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
}
.photoFrame__rgt {
  z-index: $zindex-photoFrameRgt;
  right: 0;
}

.photoFrame__img {
  position: absolute;
  left: 0;
  top: -14%;
  height: 128%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.photoFrame__lft .photoFrame__img {
  background-image: url(~assets/images/pic_second_sub_02.jpg);
}
.photoFrame__rgt .photoFrame__img {
  background-image: url(~assets/images/pic_second_sub_01.jpg);
}

.photoFrame__wrap .content {
  text-align: center;
}
@media (min-width: 840px) {
  .photoFrame__box {
    max-width: 240px;
  }
  .photoFrame__after {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 370px;
    margin: 0 240px 20px;
  }
}
@media (max-width: 839px) {
  .photoFrame {
    height: calc(60vw + 60px);
    max-height: 370px;
  }
}
</style>
