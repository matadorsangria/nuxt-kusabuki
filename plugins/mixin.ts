import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo, {
  duration: 700,
  easing: [0, 0, 0.1, 1],
  offset: -80,
});

Vue.mixin({
  methods: {
    $delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
});
