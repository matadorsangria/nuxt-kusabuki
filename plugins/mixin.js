import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import VueLazyload from 'vue-lazyload';

Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0, 0, 0.1, 1],
  offset: -80
});

Vue.use(VueLazyload);

Vue.mixin({
  methods: {
    $delay(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
  }
});
