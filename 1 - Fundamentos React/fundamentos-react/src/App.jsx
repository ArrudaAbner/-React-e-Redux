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
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="12 - Contador" color="#424242">
          <Contador numeroInicial={10}></Contador>
        </Card>

        <Card titulo="11 - Componente Controlado" color="#E45F56">
          <Input></Input>
        </Card>

        <Card titulo="10 - Comunicação Indireta" color="#8BAD39">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="09 - Comunicação Direta" color="#59323C">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="08 - Renderização Condicional" color="#982395">
          <ParOuImpar numero={20} />
          <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
          <UsuarioInfo usuario={{}}></UsuarioInfo>
        </Card>

        <Card titulo="07 - Atividade Repetição" color="#3A9AD9">
          <TabelaProdutos />
        </Card>

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
