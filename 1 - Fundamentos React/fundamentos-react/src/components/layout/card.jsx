/* eslint-disable import/no-anonymous-default-export */
import "./card.css";

export default (props) => {
  return (
    <div
      className="Card"
      style={{
        backgroundColor: props.color || "#F00",
        borderColor: props.color || "#F00",
      }}
    >
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
