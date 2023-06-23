/* eslint-disable import/no-anonymous-default-export */
import alunos from "../../data/alunos";

export default (props) => {
  const alunosListJSX = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} - {aluno.nota}
      </li>
    );
  });

  return (
    <div>
      <ul>
        <li style={{ listStyle: "none" }}>{alunosListJSX}</li>
      </ul>
    </div>
  );
};
