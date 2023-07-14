/* eslint-disable import/no-anonymous-default-export */

import Card from "./Card";
import React from "react";

export default (props) => {
  const { min, max } = props;
  return (
    <Card title="Soma dos Números" blue>
      <div>
        <span>
          <span>Resultado:</span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  );
};
