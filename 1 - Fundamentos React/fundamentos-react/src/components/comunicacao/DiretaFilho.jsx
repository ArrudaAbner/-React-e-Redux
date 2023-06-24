/* eslint-disable import/no-anonymous-default-export */
export default (props) => {
  return (
    <div>
      <span>{props.nome}</span>
      <span>, {props.idade}</span>
      <span>, {props.nerd ? "Verdadeiro" : "Falso"}!</span>
    </div>
  );
};
