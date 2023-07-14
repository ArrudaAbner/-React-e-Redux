import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  numeros: function (state, action) {
    switch (action.type) {
      case "NUM_MIN_ALTERADO":
        return {
          ...state,
          min: action.payload,
        };
      default:
        return {
          min: 7,
          max: 31,
        };
    }
  },
  nomes: function (state, action) {
    return ["Ana", "Bia", "Carlos"];
  },
});

function configStore() {
  return createStore(reducers);
}

export default configStore;
