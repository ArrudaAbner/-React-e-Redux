import Cliente from "@/core/Cliente";

interface TabelaProps {
  clientes: Cliente[];
}

export default function Tabela(props: TabelaProps) {
  function renderizarCabecalho() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
        {/* <th>Ações</th> */}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr key={cliente.getId}>
          <td>{cliente.getId}</td>
          <td>{cliente.getNome}</td>
          <td>{cliente.getIdade}</td>
        </tr>
      );
    });
  }

  return (
    <table>
      <thead>{renderizarCabecalho()}</thead>
      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  );
}
