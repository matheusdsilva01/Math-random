import { operatorsType } from "./generateCalculation";

export function getImgNumber(number: number) {
    const index = Math.floor(Math.random() * 3);
    return `/numbers/${number}/${index}.svg`;
}

export function getImgOperator(operator: operatorsType) {
    const operationName = {
        "+": "sum",
        "-": "subtraction",
        "*": "multiplication",
        "/": "division",
    }
    return `/operations/${operationName[operator]}.svg`;
}