import Layout from "@/components/Layout";
import { useState } from "react";

export default function Integracao() {
  const [codigo, setCodigo] = useState(1);
  const [client, setCliente] = useState({});

  async function obterCliente() {
    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
    const dados = await resp.json();
    setCliente(dados);
  }

  return (
    <Layout titulo="Integrando API">
      <div>
        <input
          type="number"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
        />
        <button onClick={obterCliente}>Obter Cliente</button>
      </div>
      <ul>
        <li>Código: {client.id}</li>
        <li>Nome: {client.nome}</li>
        <li>Email: {client.email}</li>
      </ul>
    </Layout>
  );
}
