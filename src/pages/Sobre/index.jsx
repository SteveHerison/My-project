import "./styles.css";
import AnimationSobre from "../../components/Animation/sobre";

export default function Sobre() {
  return (
    <div className="container-sobre" id="sobre">
      <AnimationSobre />
      <div class="text-side">
        <h3>SOBRE MIM</h3>
        <h4>Um Desenvolvedor Full Stack</h4>
        <p>
          Como Desenvolvedor Full Stack Júnior, possuo uma dedicação nos estudos
          e na pratica de habilidades em Html, Css, JavaScript, TypeScript,
          React, Nodejs, Git, Github, Figma, Postgres, SQL, Banco de dados, API.
          Manter sites responsivos que oferecem uma experiência de usuário
          suave. Minha experiência está na criação de interfaces dinâmicas e
          envolventes através da escrita de código limpo e otimizado e
          utilizando ferramentas e técnicas de desenvolvimento de ponta. Eu
          também sou um jogador de equipe que prospera em colaborar com equipes
          multifuncionais para produzir excelentes aplicações web.
        </p>
      </div>
    </div>
  );
}
