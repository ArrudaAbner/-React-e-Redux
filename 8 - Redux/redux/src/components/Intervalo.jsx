/* eslint-disable import/no-anonymous-default-export */
import "./Intervalo.css";

import Card from "./Card";
import React from "react";
import { connect } from "react-redux";
import alterarNumeroMinimo from "../store/actions/numeros";

const Intervalo = (props) => {
  const { min, max } = props;
  props.alterarMinimo(10000)

  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={min} min={1} readOnly />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={max} max={1000} readOnly />
        </span>
      </div>
    </Card>
  );
};

function mapActionCreatorsToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // Action Creator -> Action
      const action = alterarNumeroMinimo(novoNumero);
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

export default connect(mapStateToProps, mapActionCreatorsToProps)(Intervalo);
