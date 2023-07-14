/* eslint-disable import/no-anonymous-default-export */
import "./Intervalo.css";

import Card from "./Card";
import React from "react";

export default (props) => {
  const { min, max } = props;
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.onMinChanged(+e.target.value)}
            min={1}
          />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.onMaxChanged(+e.target.value)}
            max={1000}
          />
        </span>
      </div>
    </Card>
  );
};
