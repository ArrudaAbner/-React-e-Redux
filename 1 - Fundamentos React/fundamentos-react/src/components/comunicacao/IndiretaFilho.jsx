/* eslint-disable import/no-anonymous-default-export */

export default (props) => {
  return (
    <div>
      <div>Filho</div>
      <button onClick={(_) => props.quandoClicar("João", 53, true)}>
        Fornecer Informações
      </button>
    </div>
  );
};
