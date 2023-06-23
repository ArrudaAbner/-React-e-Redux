export default function MinMax() {
  return <>Numero aleatório de 0 a 10: {getRandomInt(10)}</>;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
