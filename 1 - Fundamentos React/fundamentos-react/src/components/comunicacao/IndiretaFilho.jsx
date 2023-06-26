/* eslint-disable import/no-anonymous-default-export */

export default (props) => {
  const min = 50;
  const max = 70;
  const gerarIdade = () => parseInt(Math.random() * 20) + 50;
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(_) => props.quandoClicar("João", gerarIdade, gerarNerd)}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
