import Vue from 'vue';
import Router from 'vue-router';
import Index from '../pages/index.vue';
import Resume from '../pages/resume.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/resume/:resumeid',
      name: 'resume',
      component: Resume,
    },
  ],
});
