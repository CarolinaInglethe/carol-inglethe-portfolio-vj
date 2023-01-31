<template>
  <div class="home-page">
      <div class="home-page-elements">
        <section>
          <div class="home-page-texts">
            <h4>Olá pessoas,</h4>
            <h1>Eu sou uma <br/> Programadora</h1>
            <h4>Seja bem-vindo(a) ao meu Portfólio website</h4>
          </div>
          <button>Saiba mais sobre mim</button>
        </section>
        <img class="homepage-image-developer-girl" src="../../public/img/imagem-programadora.png.png" alt="Imagem de uma mulher no computador">
      </div>
      <div class="homepage-social-media">
        <img src="../../public/img/logo-github.png" alt="logo da ferramenta git">
        <img src="../../public/img/logo-linkedin.png" alt="logo da ferramenta linkedin">
        <img src="../../public/img/logo-instagram.png" alt="logo da ferramenta instagram">
      </div>
  </div>
</template>

<script>
export default {
name: 'HomePage',
}
</script>

<style>
.home-page {
padding: 100px 55px;
}
.home-page-elements {
display: flex;
justify-content: space-around;
}
.home-page-texts h1 {
font-size: xxx-large;
}
.home-page button {
background-color: rgba(66, 45, 94, 0.959);
border: 0px;
border-radius: 6px;
color: rgb(243, 246, 248);
font-size: large;
margin-top: 40px;
padding: 10px 16px;
}
.homepage-image-developer-girl {
width: 450px;
}
.homepage-social-media {
margin-top: 50px;
}
.homepage-social-media img {
margin: 0px 15px;
width: 40px;
}
</style>
