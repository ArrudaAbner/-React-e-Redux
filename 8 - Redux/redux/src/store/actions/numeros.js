//Action Creator
export default function alterarNumeroMinimo(novoNumero) {
  return {
    type: "NUM_MIN_ALTERADO",
    payload: novoNumero,
  };
}
