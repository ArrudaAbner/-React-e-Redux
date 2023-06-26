/* eslint-disable import/no-anonymous-default-export */
import "./Input.css";
import React, { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "400px",
        }}
      >
        <label htmlFor="controlado">Controlado: </label>
        <input id="controlado" value={valor} onChange={quandoMudar} />

        <label htmlFor="leitura">Somente Leitura: </label>
        <input id="leitura" value={valor} readOnly />

        <label htmlFor="naoControlado">Não Controlado: </label>
        <input id="naoControlado" value={undefined} />
      </div>
    </div>
  );
};
