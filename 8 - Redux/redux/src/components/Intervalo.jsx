/* eslint-disable import/no-anonymous-default-export */
import "./Intervalo.css";

import Card from "./Card";
import React from "react";
import { connect } from "react-redux";

const Intervalo = (props) => {
  const { min, max } = props;
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} min={1} />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} max={1000} />
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Intervalo);
