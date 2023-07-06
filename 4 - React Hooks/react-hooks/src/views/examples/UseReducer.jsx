import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import { initialState, reducer } from "../../store/config";

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("");

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        <span>
          <span className="text">Login: </span>
          <input
            type="text"
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>

        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add2" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: name })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberMulti7", payload: name })}
          >
            *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberDiv25", payload: name })}
          >
            /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberInt", payload: name })}
          >
            Int
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAddN", payload: -9 })}
          >
            -9
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
