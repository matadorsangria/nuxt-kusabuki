<template>
  <div :class="$style.about">
    <section :class="$style.about__inner">
      <SectionText :class="$style.about__text">
        <template v-slot:title>
          草吹町について
        </template>
        <template v-slot:content>
          <p>
            雨ニモマケズ 風ニモマケズ 雪ニモ夏ノ暑サニモマケヌ
            丈夫ナカラダヲモチ 慾ハナク 決シテ瞋ラズ イツモシヅカニワラッテヰル
            <br />
            <br />
            一日ニ玄米四合ト 味噌ト少シノ野菜ヲタベ アラユルコトヲ
            ジブンヲカンジョウニ入レズニ ヨクミキキシワカリ ソシテワスレズ
            <br />
            野原ノ松ノ林ノ蔭ノ 小サナ萓ブキノ小屋ニヰテ 東ニ病気ノコドモアレバ
            行ッテ看病シテヤリ 西ニツカレタ母アレバ 行ッテソノ稲ノ朿ヲ負ヒ
          </p>
        </template>
      </SectionText>
      <SectionText :class="$style.about__text">
        <template v-slot:title>
          About Kusabuki town
        </template>
        <template v-slot:content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </template>
      </SectionText>
    </section>
    <VButton link="/about" text="Read More" />
  </div>
</template>

<script>
import SectionText from '@/components/molecules/SectionText.vue';
import VButton from '@/components/atoms/VButton.vue';

export default {
  components: {
    SectionText,
    VButton
  }
};
</script>

<style module>
.about {
  padding: 30px 0 60px;
}
.about__inner {
  margin-bottom: 20px;
}
@media (min-width: 1024px) {
  .about {
    padding-left: 30px;
    padding-right: 30px;
  }
  .about__inner {
    display: flex;
    justify-content: space-between;
  }
  .about__text {
    width: 50%;
    text-align: left;
  }
}
</style>
