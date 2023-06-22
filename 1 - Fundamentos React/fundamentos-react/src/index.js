import "./index.css";
import ReactDom from "react-dom"; //para utilizar .render
import React from "react"; //Para funcionar sintaxe JSX

//Implementando uma string no arquivo HTML através do DOM
//ReactDom.render("Olá React!!", document.getElementById("root"));

//rodar funções de outros arquivos
import Primeiro from "./components/basicos/Primeiro";

ReactDom.render(
  //sintaxe JSX (<div>Olá React!!</div>)
  <div>
    <Primeiro></Primeiro>
  </div>,
  document.getElementById("root")
);
