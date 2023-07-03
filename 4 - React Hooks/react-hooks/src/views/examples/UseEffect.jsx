import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

/* Exercicio 1  */
function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return "Somente positivos";
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

/* Exercicio 2  */
function calcPar(num) {
  const n = parseInt(num);
  if (n % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}

const UseEffect = () => {
  /* Exercicio 1  */
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  /* Exercicio 2  */
  const [num, setNum] = useState(0);
  const [par, setPar] = useState(1);

  useEffect(
    function () {
      setPar(calcPar(num));
    },
    [num]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01"></SectionTitle>
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">{fatorial}</span>
        </div>

        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

        <div>
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02"></SectionTitle>

      <div className="center">
        <div>
          <span className="text">Par ou impar: </span>
          <span className="text red">{par}</span>
        </div>
        <input
          type="number"
          className="input"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
