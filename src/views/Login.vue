<template>
  <div class="login">
    <div class="columns is-mobile is-narrow-desktop">
      <div class="column">
        <div class="box">
          <article class="media">
            <div class="media-content">
              <div class="content">
                <!-- <figure class="image is-64x64">
                  <img src="http://bulma.io/images/placeholders/128x128.png" alt="Image">
                </figure> -->
                <div class="has-text-centered">
                  <h1 class="title is-1"><span>QUIZ</span>nology</h1>
                </div>

                <div class="login-msg">
                  <p class="msg"> <strong>Hello World</strong>, </p>
                  <p class="msg">identifícate utilizando tu cuenta <strong>Github</strong> </p>
                </div>
                <a class="login-button button is-black is-large is-fullwidth">
                  <icon class="icon is-large" name="github"></icon>
                  <strong>
                    Login with Github
                  </strong>
                </a>
                <div class="has-text-centered">
                  <small>¿No tienes cuenta? <a href="#">Crear cuenta</a></small>
                </div>

              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">

.login {
  background-color: $bg;
  align-items: center!important;
  justify-content: center;
}

.login-msg {
  margin-bottom: 35px;
  p.msg {
    font-size: 18px;
    &:first-of-type {
      margin-bottom: 0!important;
    }
  }
}

.content {
  h1 {
    span {
      font-weight: bold;
    }
  }

  a.login-button {
    font-size: 18px;
    height: 60px;
    svg {
      margin-right: 15px !important;
    }
  }
}

</style>
