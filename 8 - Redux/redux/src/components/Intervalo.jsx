/* eslint-disable import/no-anonymous-default-export */
import "./Intervalo.css";

import Card from "./Card";
import React from "react";

export default (props) => {
  return (
    <Card title="Intervalo de Números" red>
      <div className="Intervalo">
        <span>
          <strong>Mínimo:</strong>
          <input type="number" value={0} min={1} />
        </span>
        <span>
          <strong>Máximo:</strong>
          <input type="number" value={10} max={1000} />
        </span>
      </div>
    </Card>
  );
};
