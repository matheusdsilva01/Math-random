import { Calculation } from "../../interfaces/Calculation";
import "./MathHistory.css";

interface MathHistoryProps {
  history: Calculation[];
}

export function MathHistory({ history }: MathHistoryProps) {

  return (
    <div className="m-auto flex">
      <section className="m-auto w-full max-w-[460px] bg-white rounded-2xl shadow-2xl px-12 mt-12 py-4">
        <h1 className="text-2xl mb-4 text-center">Histórico</h1>
           {history.length ? 
            <ul className="flex flex-col gap-3 items-center">
              {history.map((cur, index) => cur.isCorrect ? <CorrectMath key={index} {...cur} /> : <ErrorMath key={index} {...cur} />)}
            </ul> : 
              (
                <p className="text-green-600">
                  Responda as contas para ver o histórico
                </p>
              )
           } 
      </section>
    </div>
  );
}

function CorrectMath({ conta, response }: Calculation) {
  return (
    <li key={conta} className="bg-green-100 border-2 shadow rounded-xl flex justify-between items-center border-green-600 px-4 py-1 w-full text-xl">
      <p>{conta} = {response}</p>
      <img src="/correct.svg" alt="correct icon" className="size-5" />
    </li>
  );
}

function ErrorMath({ conta, response }: Calculation) {
  return (
    <li key={conta} className="bg-red-100 border-2 shadow rounded-xl flex justify-between items-center border-red-600 px-4 py-1 w-full text-xl">
      <p>{conta} = {response}</p>
      <img src="/error.svg" alt="correct icon" className="size-5" />
    </li>
  );
}