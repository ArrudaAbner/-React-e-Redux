import { createStore, combineReducers } from "redux";
import numerosReducer from "./reducers/numerosReducer";

const reducers = combineReducers({
  numeros: numerosReducer,
});

function configStore() {
  return createStore(reducers);
}

export default configStore;
