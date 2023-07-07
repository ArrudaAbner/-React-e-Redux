import Cabecalho from "@/components/Cabecalho";
import Layout from "@/components/Layout";

export default function Exemplo(props) {
  console.log(props);
  return (
    <Layout titulo="Exemplo de CSS Modularizado">
      <Cabecalho titulo="Next.js & React"></Cabecalho>
      <Cabecalho titulo="Aprenda Next na prática"></Cabecalho>
    </Layout>
  );
}
