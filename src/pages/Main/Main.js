import React from "react";
import "./styles.css";
import Login from "./../Login/index";
import Principal from "../Principal";
import Contato from "../Contato";

function Main() {
  return (
    <div>
      <Principal />
      <Login />
      <Contato />
    </div>
  );
}

export default Main;
