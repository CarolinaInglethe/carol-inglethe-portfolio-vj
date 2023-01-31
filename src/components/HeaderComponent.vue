<template>
  <div class="header-component">
      <div class="header-elements">
          <img src="../../public/img/image-logo-html-girl-purple.png" alt="">
          <h2>Carolina Inglethe</h2>
      </div>
      <nav class="header-elements nav-bar">
          <router-link class="link-navbar" to="/">Home</router-link>
          <router-link class="link-navbar" to="/sobre">Sobre</router-link>
          <router-link class="link-navbar" to="/portfolio">Portfólio</router-link>
          <router-link class="link-navbar" to="/tecnologias">Tecnologias</router-link>
          <router-link class="link-navbar" to="/experiencias">Experiências</router-link>
          <router-link class="link-navbar" to="/contato">Contato</router-link>
      </nav>
  </div>
  <router-view/>
</template>

<script>
 export default {
    name: 'HeaderComponent'
 }
</script>

<style>
  .header-component {
    display: flex;
    justify-content: space-around;
    padding: 2%;
  }
  .header-elements {
    display: flex;
  }
  .header-elements img {
    margin: 0px 12px;
    width: 67px;
  }
  .link-navbar {
    color: black;
    padding: 3% 20px;
    text-decoration: none;
  }
</style>