import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useEffect, useState } from "react";
import ClienteRepositorio from "@/core/ClienteRepositorio";
import ColecaoCliente from "@/backend/db/ColecaoCliente";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const repo: ClienteRepositorio = new ColecaoCliente();

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente>(Cliente.vazio());

  useEffect(obterTodos, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      setVisivel("tabela");
    });
  }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.getId, cliente.getNome, cliente.getIdade);
  }

  function novoCliente() {
    setCliente(Cliente.vazio);
    setVisivel("form");
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    setVisivel("tabela");
  }

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao
                className="mb-4 bg-gradient-to-r from-green-400 to-green-700"
                onClick={novoCliente}
              >
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}
