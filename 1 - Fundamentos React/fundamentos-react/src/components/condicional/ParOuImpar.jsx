/* eslint-disable import/no-anonymous-default-export */
export default (props) => {
  const isPar = props.numero % 2 === 0;

  return (
    <div>
      {isPar ? (
        <span>Número: {props.numero} - Par</span>
      ) : (
        <span>Número: {props.numero} - Ímpar</span>
      )}
    </div>
  );
};
