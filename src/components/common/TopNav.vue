<template>
  <nav class="nav has-shadow">
  <div class="container">
    <div class="nav-left">
      <router-link class="nav-item" to="/">
        <img src="../../assets/logo.png" alt="Vue logo">
        <b>QUIZ</b>nology
      </router-link>
      <router-link class="nav-item is-tab is-hidden-mobile" to="/">Home</router-link>
      <router-link class="nav-item is-tab is-hidden-mobile" to="/about">About</router-link>
    </div>
    <span class="nav-toggle">
      <span></span>
      <span></span>
      <span></span>
    </span>
    <div class="nav-right nav-menu">
      <router-link class="nav-item is-tab is-hidden-tablet is-active" to="/">Home</router-link>
      <router-link class="nav-item is-tab is-hidden-tablet" to="/about">About</router-link>
      <a class="nav-item is-tab">
        <figure class="image is-16x16" style="margin-right: 8px;">
          <img src="http://bulma.io/images/jgthms.png">
        </figure>
        Profile
      </a>
      <a class="nav-item is-tab">Log out</a>
    </div>
  </div>
</nav>
</template>

<script>
  export default {
    name: 'top-nav',
  };
</script>
