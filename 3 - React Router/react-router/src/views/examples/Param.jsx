/* eslint-disable import/no-anonymous-default-export */
import { useParams } from "react-router-dom";

export default (props) => {
  const { id } = useParams();
  return (
    <div className="Param">
      <h1>Param</h1>
      <p>Valor: {id}!</p>
    </div>
  );
};
