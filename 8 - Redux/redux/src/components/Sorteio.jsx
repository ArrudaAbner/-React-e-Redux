/* eslint-disable import/no-anonymous-default-export */

import Card from "./Card";
import React from "react";

export default (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );
};
