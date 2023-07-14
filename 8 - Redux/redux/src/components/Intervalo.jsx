/* eslint-disable import/no-anonymous-default-export */
import "./Intervalo.css";

import Card from "./Card";
import React from "react";
import { connect } from "react-redux";
import {
  alterarNumeroMinimo,
  alterarNumeroMaximo,
} from "../store/actions/numeros";

const Intervalo = (props) => {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            min={1}
            onChange={(e) => props.alterarMinimo(+e.target.value)}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            max={1000}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // Action Creator -> Action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      // Action Creator -> Action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
