//rodar funções de outros arquivos
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Framento";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div id="app">
      <h1>Fundamentos React</h1>
      <Fragmento></Fragmento>

      <ComParametro
        titulo="Situação do Aluno"
        aluno="Abner"
        nota={9.3}
      ></ComParametro>

      <Primeiro></Primeiro>
    </div>
  );
};
