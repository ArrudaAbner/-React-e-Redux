import Layout from "@/components/Layout";
import { useState } from "react";

export default function Estado() {
  const [numero, setNumero] = useState(0);

  function incrementar() {
    setNumero(numero + 1);
  }
  return (
    <Layout titulo="Componente com Estado">
      <span>{numero}</span>
      <button
        onClick={incrementar}
        style={{
          margin: "10px",
        }}
      >
        Incrementar
      </button>
    </Layout>
  );
}
