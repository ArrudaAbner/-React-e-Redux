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
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          fontWeight: "bold",
          border: "none",
          padding: "15px 32px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
        }}
      >
        Fornecer Informações
      </button>
    </div>
  );
};
