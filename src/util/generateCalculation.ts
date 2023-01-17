export type operatorsType = "+" | "-" | "*" | "/";
const operations: operatorsType[] = ["+", "-", "*", "/"];

function generateCountSum() {
  const num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * 10 + 1) + num1;
  const conta = `${num1} + ${num2}`;
  return conta;
}

function generateCountSub() {
  const num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * 10 + 1) + num1;
  const conta = `${num1} - ${num2}`;
  return conta;
}

function generateCountMult() {
  const num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * 10 + 1) + num1;
  const conta = `${num1} * ${num2}`;
  return conta;
}

function generateCountDiv() {
  const num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * 10 + 1) + num1;
  const conta = `${num1} / ${num2}`;
  return conta;
}

const counts = {
  "+": generateCountSum,
  "-": generateCountSub,
  "*": generateCountMult,
  "/": generateCountDiv,
};

export const generateCalculation = (operator?: operatorsType) => {
  if (!operator) {
    let randomOperator = operations[Math.floor(Math.random() * 4)];
    const count = counts[randomOperator];
    return count();
  }
  const Count = counts[operator];

  return Count();
};
