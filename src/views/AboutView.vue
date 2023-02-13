<template>
  <div class="about">
    <img src="../../public/img/foto-perfill.png" alt="Minha foto" width="150">
    <div class="about-title">
      <h1 class="word-purple">Carolina</h1>
      <h1>Inglethe</h1>
    </div>
    <div class="about-text">
      <p>Meu nome é Carolina Inglethe de Souza Araújo. Sou do Brasil,Belo Horizonte/MG.</p>
      <p>Sou Engenheira de software, formada no curso profissionalizante de Desenvolvimento Web Fullstack da Trybe</p>
    </div>
    <div class="about-title about-title-skills">
      <h1>Hard</h1>
      <h1 class="word-purple">Skills</h1>
    </div>
    <div class="about-skills">
      <h3>JavaScript <br> <img src="../../public/img/gráfico-skills-5.png" alt="Grafico nivel 5" width="155"></h3>
      <h3>CSS <br> <img src="../../public/img/gráfico-skills-5.png" alt="Grafico nivel 5" width="155"></h3>
      <h3>HTML <br> <img src="../../public/img/gráfico-skills-5.png" alt="Grafico nivel 5" width="155"></h3>
      <h3>React <br> <img src="../../public/img/gráfico-skills-4.png" alt="Grafico nivel 4" width="155"></h3>
      <h3>Vue <br> <img src="../../public/img/gráfico-skills-2.png" alt="Grafico nivel 2" width="155"></h3>
      <h3>TypeScript <br> <img src="../../public/img/gráfico-skills-1.png" alt="Grafico nivel 1" width="155"></h3>
      <h3>Node <br> <img src="../../public/img/gráfico-skills-3.png" alt="Grafico nivel 3" width="155"></h3>
      <h3>Python <br> <img src="../../public/img/gráfico-skills-1.png" alt="Grafico nivel 1" width="155"></h3>
      <h3>MySQL <br> <img src="../../public/img/gráfico-skills-3.png" alt="Grafico nivel 3" width="155"></h3>
    </div>
  </div>
</template>

<style>
  .about img {
    margin-top: 10px;
  }
  .about-title {
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }
  .about-title h1 {
    margin: 4px;
  }
  .about-title-skills {
    margin-top: 70px;
  }
  .word-purple {
    color: #483357e1;
  }
  .about-skills {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 15px 5%;
  }
  .about-skills h3 {
    margin: 40px 30px;
  }
</style>