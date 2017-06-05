<template>
  <div class="landing has-text-centered">
    <div class="landing-bg"></div>
    <div class="landing-content">
      <div class="question">
        <span class="title is-2">¿Eres el que más sabe de </span>
        <img
          class="logo-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2000px-Unofficial_JavaScript_logo_2.svg.png" alt="" />
        <span class="title is-2">del mundo?</span>
      </div>
      <div class="block button-wrapper">
        <a class="button is-danger">Empezar</a>
        <a class="button is-info">Reta a un amigo</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'landing',
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .landing {
    align-items: center!important;
    justify-content: center;    
    color: white;
    background-color: rgba(0,0,0,0.7)!important;
    overflow: hidden;
  }
  .landing-bg {
    display: block;
    left: 0;
    width: 100%;
    height: 100%;
    top: -51px;
    position: absolute;
    background-image: url('https://images.unsplash.com/photo-1489389944381-3471b5b30f04?dpr=1&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=&bg=');
    background-size: cover;
    -ms-background-size: cover;
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.1;
  }

  .question {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    span {
      color: white;
    }

    img.logo-img {
      height: 100px;
      margin: 0 15px;
    }
  }

  .button-wrapper {
    margin: 10px 0;

    .button {
      width: 250px;
      margin: 0 15px;
    }
  }

</style>
