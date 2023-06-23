//rodar funções de outros arquivos
import "./App.css";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Framento";
import MinMax from "./components/basicos/MinMax";
import Card from "./components/layout/card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="06 - Repetição" color="#FF4C65">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="05 - Componente com Filhos" color="#00C8F8">
          <Familia sobrenome="Arruda">
            <FamiliaMembro nome="Abner" />
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="João" />
          </Familia>
        </Card>

        <Card titulo="04 - Desafio Aleatório" color="#FA6900">
          <MinMax></MinMax>
        </Card>

        <Card titulo="03 - Fragmento" color="#E94C6F">
          <Fragmento></Fragmento>
        </Card>

        <Card titulo="02 - Com Parametro" color="#E8B71A">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Abner"
            nota={9.3}
          ></ComParametro>
        </Card>

        <Card titulo="01 - Primeiro Componente" color="#588C73">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};
