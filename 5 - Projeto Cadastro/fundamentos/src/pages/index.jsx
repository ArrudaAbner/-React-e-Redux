import Navegador from "@/components/Navegador";

export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegador destino="/estiloso" texto="Estiloso"></Navegador>
      <Navegador destino="/exemplo" texto="Exemplo" cor="#9400d3"></Navegador>
      <Navegador destino="/jsx" texto="JSX" cor="crimson"></Navegador>
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green"></Navegador>
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="orange"></Navegador>
    </div>
  );
}
