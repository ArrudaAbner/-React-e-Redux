/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <span>Nome: {nome} </span>
        <span>Idade: {idade} </span>
        <span>Nerd: {nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
