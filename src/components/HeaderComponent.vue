<template>
    <div class="elements-row">
        <div class="header-elements">
          <p>Imagem</p>
          <p>Carolina Inglethe</p>
        </div>
        <div class="header-elements">
          <p>Home</p>
          <p>Sobre</p>
          <p>portfolio</p>
          <p>Tecnologias</p>
          <p>Experiencia</p>
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
  .elements-row {
    display: flex;
    justify-content: space-around;
  }
  .header-elements {
    display: flex;
  }
  .header-elements p {
    padding: 0px 17px;
  }
</style>