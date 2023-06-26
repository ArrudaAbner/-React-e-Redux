/* eslint-disable import/no-anonymous-default-export */
import IndiretaFilho from "./IndiretaFilho";
import DiretaFilho from "./IndiretaFilho";

export default (props) => {
  let nome = "?";
  let idade = 0;
  let nerd = false;

  function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
    nome = nomeParam;
    idade = idadeParam;
    nerd = nerdParam;

    console.log(nomeParam, idadeParam, nerdParam);
  }

  return (
    <div>
      <div>
        <span>Nome: {nome} </span>
        <span>Idade: {idade} </span>
        <span>Nerd: {nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
