<template>
  <div id="app" v-bind:class="[isLanding ? landingAppClass : '', 'hero', 'is-fullheight']">
    <top-nav v-bind:class="[isLanding ? landingClass : '', heroHeadClass]"></top-nav>
    <router-view class="hero-body align-content"></router-view>
  </div>
</template>

<script>
import TopNav from '@/components/common/TopNav';

export default {
  name: 'app',
  components: {
    TopNav,
  },
  data() {
    return {
      heroHeadClass: 'hero-head',
      landingClass: 'landing-bg',
      landingAppClass: 'app-bg',
      isLanding: false,
    };
  },
  watch: {
    $route(val) {
      this.isLanding = (val.path === '/');
    },
  },
  mounted() {
    this.isLanding = (this.$route.path === '/');
  },
};
</script>

<style lang="sass">
  @import '~bulma'
</style>
<style lang="scss">
  .align-content {
    align-items: flex-start !important
  }
  .app-bg {
    background-color: transparent!important;
  }
  .nav.landing-bg {
    background: rgba(0,0,0,0.7)!important;
    a {
      color: white;
    }
  }
  .has-shadow.landing-bg {
    box-shadow: none!important;
  }
</style>
