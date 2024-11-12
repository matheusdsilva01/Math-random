export type operatorsType = "+" | "-" | "*" | "/";

const operations: operatorsType[] = ["+", "-", "*", "/"];

function generateCountSum() {
  const num1 = Math.floor(Math.random() * 9 + 1);
  const num2 = Math.floor(Math.random() * 9 + 1);
  const conta = `${num1} + ${num2}`;
  return {
    conta,
    first_number: num1,
    second_number: num2,
    operator: "+" as operatorsType,
  };
}

function generateCountSub() {
  const num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * num1 + 1);
  const conta = `${num1} - ${num2}`;
  return {
    conta,
    first_number: num1,
    second_number: num2,
    operator: "-" as operatorsType,
  };
}

function generateCountMult() {
  const num1 = Math.floor(Math.random() * 9 + 1);
  const num2 = Math.floor(Math.random() * 9 + 1);
  const conta = `${num1} * ${num2}`;
  return {
    conta,
    first_number: num1,
    second_number: num2,
    operator: "*" as operatorsType,
  };
}

function generateCountDiv() {
  const num2 = Math.floor(Math.random() * 9 + 1);
  const quotient = Math.floor(Math.random() * 9 + 1);
  const num1 = num2 * quotient;
  const conta = `${num1} / ${num2}`;
  return {
    conta,
    first_number: num1,
    second_number: num2,
    operator: "/" as operatorsType,
  };
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
