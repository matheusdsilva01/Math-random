import { FormEvent, useRef, useState } from "react";

import { MathHistory } from "./components/MathHistory";
import { Calculation } from "./interfaces/Calculation";
import { generateCalculation, operatorsType } from "./util/generateCalculation";
import { getImgNumber, getImgOperator } from "./util/getImgs";

import "./App.css";

function App() {
  const [operator, setOperator] = useState<operatorsType>();
  const [history, setHistory] = useState<Calculation[]>([]);

  const responseCalc = useRef<HTMLInputElement>(null);
  const {
    conta: count,
    first_number,
    second_number,
    operator: ope,
  } = generateCalculation(operator);

  const calculation = (e: FormEvent) => {
    e.preventDefault();
    let response = responseCalc.current?.value;
    if (eval(count) === Number(response)) {
      addHit(count, Number(response));
    } else {
      addError(count, eval(count));
    }
    responseCalc.current!.value = "";
  };

  const addHit = (count: string, response: number) => {
    let hit: Calculation = {
      conta: count,
      response: response,
      isCorrect: true,
    };
    setHistory((prevState) => [hit, ...prevState]);
  };

  const addError = (count: string, response: number) => {
    let error = {
      conta: count,
      response: response,
      isCorrect: false,
    };
      setHistory((prevState) => [error, ...prevState])
  };

  return (
    <div className="p-1">
      <section>
        <form
          className="w-full py-5 text-center font-semibold flex flex-col max-w-[625px] m-auto mt-32 sm:mt-52 px-4 bg-slate-50 shadow-lg rounded-3xl"
          onSubmit={calculation}
        >
          <h2 className="text-2xl font-sans font-bold text-[#ED47D7] mb-4">Escolha uma operação: </h2>
          <section className="flex flex-row justify-center flex-wrap mb-2 gap-3">
            <button
              type="button"
              onClick={() => setOperator("+")}
              data-selected={operator === "+"}
              className="py-1 sm:py-2 flex items-center text-white px-4 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600 data-[selected=true]:bg-indigo-500 data-[selected=true]:hover:bg-indigo-600 data-[selected=true]:ring-2 ring-blue-800 transition-all text-xs sm:text-sm"
            >
                <img
                  className="max-w-2 sm:max-w-4 w-full inline-block mr-2"
                  src="/operations/sum.svg"
                  alt="plus icon"
                />
                Adição
            </button>
            <button
              type="button"
              onClick={() => setOperator("-")}
              data-selected={operator === "-"}
              className="py-1 sm:py-2 flex items-center text-white px-4 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600  data-[selected=true]:bg-indigo-500 data-[selected=true]:hover:bg-indigo-600 data-[selected=true]:ring-2 ring-blue-800 transition-all text-xs sm:text-sm"
            >
                <img
                  className="max-w-2 sm:max-w-4 w-full inline-block mr-2"
                  src="/operations/subtraction.svg"
                  alt="plus icon"
                />
                Subtração
            </button>
            <button
              type="button"
              onClick={() => setOperator("*")}
              data-selected={operator === "*"}
              className="py-1 sm:py-2 flex items-center text-white px-4 rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600  data-[selected=true]:bg-indigo-500 data-[selected=true]:hover:bg-indigo-600 data-[selected=true]:ring-2 ring-blue-800 transition-all text-xs sm:text-sm"
            >
                <img
                  className="max-w-2 sm:max-w-4 w-full inline-block mr-2"
                  src="/operations/multiplication.svg"
                  alt="plus icon"
                />
                Multiplicação
            </button>
            <button
              type="button"
              onClick={() => setOperator("/")}
              data-selected={operator === "/"}
              className="py-1 sm:py-2 flex items-center px-4 text-white rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600  data-[selected=true]:bg-indigo-500 data-[selected=true]:hover:bg-indigo-600 data-[selected=true]:ring-2 ring-blue-800 transition-all text-xs sm:text-sm"
            >
                <img
                  className="max-w-4 inline-block w-full mr-2"
                  src="/operations/division.svg"
                  alt="plus icon"
                />
                Divisão
            </button>
          </section>
          <button
            type="button"
            onClick={() => setOperator(undefined)}
            data-selected={operator === undefined}
            className="py-1 px-4 m-auto text-white rounded-xl bg-fuchsia-500 hover:bg-fuchsia-600 data-[selected=true]:bg-indigo-500 data-[selected=true]:hover:bg-indigo-600 data-[selected=true]:ring-2 ring-blue-800 transition-all text-xs sm:text-sm mb-6"
          >
            Aleatório
          </button>
          <div className="m-auto flex gap-y-2 flex-col sm:flex-row">
            <div className="flex">
              <div className="flex gap-4 mr-2">
                <div className="flex gap-1">
                  {first_number.toString().split("").map((el) => (
                      <img className="max-w-4 sm:max-w-6 w-full" key={el} src={getImgNumber(Number(el))} alt="" />
                    ))}
                </div>
                <img className="max-w-4 max-h-12 w-full my-auto" src={getImgOperator(ope)} alt="" />
                <div className="flex gap-1">
                  {second_number.toString().split("").map((el) => (
                      <img className="max-w-4 sm:max-w-6 w-full" key={el} src={getImgNumber(Number(el))} alt="" />
                  ))}
                </div>
                <img className="max-w-4 sm:max-w-6 w-full" src="/operations/egual.svg" alt="" />
              </div>
                <input placeholder="?" required type="number" inputMode="numeric" ref={responseCalc} className="outline-none ring-2 rounded-xl sm:text-xl px-1.5 py-2 max-w-20 ring-sky-200 focus:ring-sky-400" />{" "}
              </div>
              <button
                className="border ml-2 rounded-2xl py-1.5 px-4 bg-green-400 hover:border-green-500 active:bg-green-500 active:ring-green-300 active:ring-2 transition-all text-sm sm:text-base"
              >
                Calcular
              </button>
            </div>
        </form>
      </section>
      <MathHistory history={history} />
    </div>
  );
}

export default App;
