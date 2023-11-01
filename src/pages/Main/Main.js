import React from "react";
import "./styles.css";
import Principal from "../Principal";
import Contato from "../Contato";
import Sobre from "../Sobre/index";
import Projetos from "../Projetos";

function Main() {
  return (
    <div>
      <Principal />
      <Sobre />
      <Projetos />
      <Contato />
    </div>
  );
}

export default Main;
