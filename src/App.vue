<template>
  <div id="app" class="hero is-fullheight">
    <div class="hero-head">
      <top-nav></top-nav>
    </div>
    <div class="hero-body align-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TopNav from '@/components/common/TopNav';

export default {
  name: 'app',
  components: {
    TopNav,
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
</style>
