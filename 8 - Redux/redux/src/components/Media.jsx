/* eslint-disable import/no-anonymous-default-export */

import Card from "./Card";
import React from "react";

export default (props) => {
  const { min, max } = props;

  return (
    <Card title="Média dos Números" green>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
};
