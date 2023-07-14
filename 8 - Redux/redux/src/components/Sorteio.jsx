/* eslint-disable import/no-anonymous-default-export */

import Card from "./Card";
import React from "react";

export default (props) => {
  return (
    <Card title="Sorteio de um Número" purple>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{10}</strong>
        </span>
      </div>
    </Card>
  );
};
