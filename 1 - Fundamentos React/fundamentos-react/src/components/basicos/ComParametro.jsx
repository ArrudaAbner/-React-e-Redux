import React from "react";
export default function ComParametro(props) {
  //propriedades são somente leitura, não podendo fazer alterações no JSX para as props no HTML
  const status = props.nota >= 7 ? "Aprovado" : "Recuperação";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>Aluno: {props.aluno}</h3>
      <h3>Nota: {props.nota}</h3>
      <h3>Status: {status}</h3>
    </div>
  );
}
