<template>
  <div class="home-page">
      <div class="home-page-elements">
        <section>
          <div class="home-page-texts">
            <h4>Olá pessoas,</h4>
            <h1>Eu sou uma <br/> Programadora</h1>
            <h4>Seja bem-vindo(a) ao meu Portfólio website</h4>
          </div>
          <router-link class="link-navbar" to="/sobre"><button> Saiba mais sobre mim</button></router-link>
        </section>
        <img class="homepage-image-developer-girl" src="../../public/img/imagem-programadora.png.png" alt="Imagem de uma mulher no computador">
      </div>
      <div class="homepage-social-media">
        <a href="https://github.com/CarolinaInglethe" target="_blank"><img src="../../public/img/logo-github.png" alt="logo da ferramenta git"></a>
        <a href="https://www.linkedin.com/in/carolina-inglethe-b1b86a1b8/" target="_blank"><img src="../../public/img/logo-linkedin.png" alt="logo da ferramenta linkedin"></a>
        <a href="https://www.instagram.com/inglethe_ca/" target="_blank"><img src="../../public/img/logo-instagram.png" alt="logo da ferramenta instagram"></a>
      </div>
  </div>
</template>

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
.home-page button:hover {
  color: rgba(66, 45, 94, 0.959);
  background-color: aliceblue;
  border: 1px solid rgba(66, 45, 94, 0.959);
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
