<template>
    <div class="header-component">
        <div class="header-elements">
          <img src="../../public/img/image-logo-html-girl-purple.png" alt="" width="67">
          <h2>Carolina Inglethe</h2>
        </div>
        <div class="header-elements nav-bar">
          <p>Home</p>
          <p>Sobre</p>
          <p>Portfólio</p>
          <p>Tecnologias</p>
          <p>Experiência</p>
          <p>Contato</p>
        </div>
    </div>
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
  }
  .header-elements {
    display: flex;
  }
  .header-elements img {
    margin: 0px 12px;
  }
  .header-elements p {
    padding: 0px 17px;
  }
</style>