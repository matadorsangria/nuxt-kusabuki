<template>
  <div id="content">
    <Mainvisual image="pic_second_03.jpg" />
    <VSection title-tag="h1">
      <template v-slot:labelSub>
        ストーリー
      </template>
      <template v-slot:labelMain>
        Pickup Stories
      </template>
      <template v-slot:content>
        <SectionText id="story01">
          <template v-slot:title>
            海の音色を聴く
            <span :class="$style.subtitle">− Sea Sound −</span>
          </template>
          <template v-slot:content>
            <div :class="$style.textWrap">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas congue quisque egestas diam.
                <br />
                Vulputate eu scelerisque felis imperdiet proin fermentum leo.
                Fames ac turpis egestas maecenas pharetra convallis posuere.
                <br />
                Feugiat in fermentum posuere urna nec tincidunt. Eu consequat ac
                felis donec et. Molestie a iaculis at erat. Augue eget arcu
                dictum varius duis at. Nullam ac tortor vitae purus.
              </p>
              <div :class="[$style.imageWrap, $style.imageWrap01]">
                <div :class="$style.imageWrap__inner">
                  <p>
                    At lectus urna duis convallis convallis tellus. At varius
                    vel pharetra vel turpis nunc eget. Quis ipsum suspendisse
                    ultrices gravida dictum fusce ut placerat orci. Tortor
                    aliquam nulla facilisi cras fermentum odio eu feugiat
                    pretium.
                    <br />
                    Purus semper eget duis at tellus at. Phasellus faucibus
                    scelerisque eleifend donec pretium. Nunc consequat interdum
                    varius sit amet. Duis convallis convallis tellus id
                    interdum.
                    <br />
                    Tincidunt nunc pulvinar sapien et ligula ullamcorper
                    malesuada proin. Sed arcu non odio euismod lacinia at quis
                    risus. Pellentesque dignissim enim sit amet.
                    <br />
                    <br />
                    Aenean pharetra magna ac placerat vestibulum. Amet facilisis
                    magna etiam tempor orci eu lobortis. Sagittis id consectetur
                    purus ut faucibus pulvinar elementum.
                    <br />
                    Lectus nulla at volutpat diam ut. Ultricies tristique nulla
                    aliquet enim tortor at auctor.
                  </p>
                </div>
              </div>
            </div>
          </template>
        </SectionText>
        <SectionText id="story02">
          <template v-slot:title>
            花とともにある暮らし
            <span :class="$style.subtitle">− Living with flowers −</span>
          </template>
          <template v-slot:content>
            <div :class="$style.textWrap">
              <p>
                Volutpat lacus laoreet non curabitur gravida arcu. Magna eget
                est lorem ipsum dolor. Risus quis varius quam quisque id diam
                vel.
                <br />
                lementum nibh tellus molestie nunc non blandit massa enim.
                Scelerisque viverra mauris in aliquam. Urna porttitor rhoncus
                dolor purus non enim.
                <br />
                <br />
                Accumsan sit amet nulla facilisi. Turpis massa sed elementum
                tempus egestas sed sed risus. Quis imperdiet massa tincidunt
                nunc pulvinar sapien. Sollicitudin tempor id eu nisl nunc mi
                ipsum faucibus.
                <br />
                Vel pharetra vel turpis nunc eget lorem. Sed turpis tincidunt id
                aliquet risus feugiat in.
                <br />
                Morbi blandit cursus risus at ultrices mi tempus imperdiet.
                Tincidunt augue interdum velit euismod in pellentesque massa
                placerat duis.
              </p>
              <div :class="[$style.imageWrap, $style.imageWrap02]">
                <div :class="$style.imageWrap__inner">
                  <p>
                    A iaculis at erat pellentesque adipiscing commodo. Accumsan
                    tortor posuere ac ut consequat semper viverra nam.
                    <br />
                    Cursus metus aliquam eleifend mi in nulla posuere.
                    Condimentum id venenatis a condimentum vitae sapien
                    pellentesque habitant morbi.
                    <br />
                    <br />
                    At tellus at urna condimentum mattis pellentesque id nibh
                    tortor. Nisl suscipit adipiscing bibendum est ultricies.
                    Dictum varius duis at consectetur lorem donec massa.
                    <br />
                    Mattis rhoncus urna neque viverra justo nec. Tincidunt dui
                    ut ornare lectus. Mollis aliquam ut porttitor leo. Sed risus
                    pretium quam vulputate dignissim suspendisse in est.
                    Fermentum dui faucibus in ornare quam.
                    <br />
                    Mollis nunc sed id semper risus in hendrerit.
                  </p>
                </div>
              </div>
            </div>
          </template>
        </SectionText>
        <SectionText id="story03">
          <template v-slot:title>
            着物文化が根付く町
            <span :class="$style.subtitle">− Kimono Culture −</span>
          </template>
          <template v-slot:content>
            <div :class="$style.textWrap">
              <p>
                Mattis vulputate enim nulla aliquet porttitor lacus luctus
                accumsan.
                <br />
                Sit amet mattis vulputate enim. Lacus laoreet non curabitur
                gravida arcu ac tortor dignissim convallis. At in tellus integer
                feugiat scelerisque varius morbi enim nunc.
                <br />
                Est pellentesque elit ullamcorper dignissim cras. Accumsan lacus
                vel facilisis volutpat est. Quis imperdiet massa tincidunt nunc.
                Aliquet sagittis id consectetur purus ut faucibus pulvinar
                elementum integer.
                <br />
                <br />
                Luctus venenatis lectus magna fringilla urna porttitor.
                <br />
                Aliquam vestibulum morbi blandit cursus risus at ultrices.
              </p>
              <div :class="[$style.imageWrap, $style.imageWrap03]">
                <div :class="$style.imageWrap__inner">
                  <p>
                    Pharetra massa massa ultricies mi quis hendrerit dolor.
                    <br />
                    Risus in hendrerit gravida rutrum. Cras pulvinar mattis nunc
                    sed. Ut diam quam nulla porttitor. Purus gravida quis
                    blandit turpis cursus in hac habitasse. Vulputate dignissim
                    suspendisse in est ante in nibh mauris cursus. Risus
                    ultricies tristique nulla aliquet.
                    <br />
                    Lectus proin nibh nisl condimentum id. Est ante in nibh
                    mauris cursus mattis molestie a. Egestas fringilla phasellus
                    faucibus scelerisque eleifend donec pretium vulputate
                    sapien. Etiam non quam lacus suspendisse.
                    <br />
                    <br />
                    Diam donec adipiscing tristique risus nec feugiat in. Congue
                    eu consequat ac felis donec. Viverra tellus in hac
                    habitasse. Mauris vitae ultricies leo integer malesuada.
                    <br />
                    Nunc sed id semper risus in hendrerit gravida rutrum. Amet
                    consectetur adipiscing elit ut aliquam purus sit. Sed sed
                    risus pretium quam.
                    <br />
                    Risus quis varius quam quisque id. Eget gravida cum sociis
                    natoque penatibus.
                  </p>
                </div>
              </div>
              <p>
                Tortor consequat id porta nibh venenatis. Feugiat vivamus at
                augue eget arcu. Tortor vitae purus faucibus ornare suspendisse.
                Ridiculus mus mauris vitae ultricies leo integer malesuada.
                Vestibulum rhoncus est pellentesque elit ullamcorper.
                <br />
                Dignissim sodales ut eu sem integer. Feugiat nibh sed pulvinar
                proin. Amet cursus sit amet dictum sit amet justo donec enim.
                Phasellus vestibulum lorem sed risus ultricies tristique. Tellus
                elementum sagittis vitae et leo. Et netus et malesuada fames ac
                turpis.
                <br />
                Enim nec dui nunc mattis enim. Tellus mauris a diam maecenas.
                Pharetra magna ac placerat vestibulum lectus. Sem viverra
                aliquet eget sit amet tellus cras adipiscing enim. Mollis nunc
                sed id semper risus in hendrerit gravida.
                <br />
                Ac turpis egestas integer eget aliquet. Tellus in metus
                vulputate eu scelerisque felis imperdiet proin fermentum. Orci
                eu lobortis elementum nibh tellus molestie. A scelerisque purus
                semper eget duis at.
                <br />
                <br />
              </p>
              <p style="text-align: right;">
                –––– via magnis dis.
              </p>
            </div>
          </template>
        </SectionText>
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
    SectionText
  }
};
</script>

<style module lang="scss">
.subtitle {
  font-size: 18px;

  @media (max-width: 677px) {
    display: block;
    font-size: 16px;
  }
}
.textWrap {
  margin: calc(-0.8em - 20px) -60px 0;

  @media (max-width: 677px) {
    margin-left: -30px;
    margin-right: -30px;
  }
}
.textWrap p {
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 0;
  text-align: left;
}
.imageWrap {
  margin: 0 -30px;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  color: #fff;
}
.imageWrap01 {
  background-image: url('~assets/images/pic_stories_01.jpg');
}
.imageWrap02 {
  background-image: url('~assets/images/pic_stories_02.jpg');
}
.imageWrap03 {
  background-image: url('~assets/images/pic_stories_03.jpg');
}
.imageWrap__inner {
  padding: 0 30px;
  backdrop-filter: brightness(0.4) blur(3px);
}
</style>
