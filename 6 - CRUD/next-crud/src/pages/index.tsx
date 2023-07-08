import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());

  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Bia", 45, "2"),
    new Cliente("Carlos", 59, "3"),
    new Cliente("Pedro", 21, "4"),
  ];

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

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
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
