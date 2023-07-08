import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "@/core/Cliente";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.getId;
  const [nome, setNome] = useState(props.cliente.getNome ?? "");
  const [idade, setIdade] = useState(props.cliente.getIdade ?? 0);

  return (
    <div>
      {id ? (
        <Entrada
          texto="Código"
          valor={id}
          somenteLeitura
          className="mb-4"
        ></Entrada>
      ) : (
        false
      )}
      <Entrada
        texto="Nome"
        tipo="text"
        valor={nome}
        valorMudou={setNome}
        className="mb-4"
      ></Entrada>
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      ></Entrada>

      <div className="flex justify-end mt-7 ">
        <Botao
          className="mr-2 bg-gradient-to-r from-blue-400 to-blue-700"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao
          className="bg-gradient-to-r from-gray-400 to-gray-700"
          onClick={props.cancelado}
        >
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
