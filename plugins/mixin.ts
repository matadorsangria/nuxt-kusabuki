import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueCompositionApi from '@vue/composition-api';

Vue.prototype.$delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0, 0, 0.1, 1],
  offset: -80,
});

Vue.use(VueCompositionApi);
