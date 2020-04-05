<template>
  <div :class="$style.about">
    <section :class="$style.about__inner">
      <SectionText :class="$style.about__text">
        <template v-slot:title>
          草吹町について
        </template>
        <template v-slot:content>
          <p>
            三方を山に囲まれ東側を海に面した草吹町は、気候も温暖で過ごしやすく、古くから花卉の栽培地として栄えてきました。
            <br />
            現在も豊かな自然に抱かれたこの町には長い歴史が醸し出す風情が漂い、観光地としての賑わいを見せています。
            <br />
            <br />
            美しい白浜を有する凪瀬海岸、エコツーリズムが盛んな自然保護区、ハイキング客で賑わう黒姫山、時期によって様々な表情を見せるこの町で、日本を再発見してみませんか。
          </p>
        </template>
      </SectionText>
      <SectionText :class="$style.about__text">
        <template v-slot:title>
          About Kusabuki town
        </template>
        <template v-slot:content>
          <p>
            Kusabuki is surrounded by mountains on three sides with the east
            side facing the sea, and has a warm and comfortable climate. The
            town has thrived as a flower production base from long ago. Many
            tourists visit the place to feel its abundant nature and taste of
            long-established history.
            <br />
            Kusabuki has a nature preserve popular for the eco-tourism, Mt.
            Kurohime crowded with hikers, and beautiful Nagise coast. It conveys
            many different expressions in accordance to the season.
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
