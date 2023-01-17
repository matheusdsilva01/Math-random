import { FormEvent, useRef, useState } from 'react';
import TableHitsandErrors from './components/TableHitsandErrors/TableHitsandErrors';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import { Calculation } from './interfaces/Calculation';
import { generateCalculation, operatorsType } from './util/generateCalculation';
import './App.css';

function App() {
  const [operator, setOperator] = useState<operatorsType>();
  const [hits, setHits] = useState<Calculation[]>([]);
  const [errors, setErrors] = useState<Calculation[]>([]);
  const responseCalc = useRef<HTMLInputElement>(null);
  const count = generateCalculation(operator);

  const calculation = (e: FormEvent) => {
    e.preventDefault()
    let response = responseCalc.current?.value;
    if (eval(count) === Number(response)) {
      addHit(count, Number(response))
    } else {
      addError(count, Number(response))
    }
  }

  const addHit = (count: string, response: number) => {
    let hit = {
      conta: count,
      resposta: response
    }
    setHits((state) => [...state, hit])
  }

  const addError = (count: string, response: number) => {
    let error = {
      conta: count,
      resposta: response
    }
    errors.filter((el) => el.conta === count).length < 1 ?
      setErrors((state) => [...state, error]) : null
  }

  return (
    <div className="App">
      <ToggleTheme />
      <section>
        <form className='container-form' onSubmit={calculation}>
          <h1>{count} = <input required type="number" step={".01"} ref={responseCalc} /></h1>
          <select
            name="operacoes"
            onChange={(e) => setOperator(e.target.value as operatorsType)}
          >
            <option value="">Aleatório</option>
            <option value="+">Adição</option>
            <option value="-">Subtração</option>
            <option value="*">Multiplicação</option>
            <option value="/">Divisão</option>
          </select>
        </form>
      </section>
      <TableHitsandErrors hits={hits} errors={errors} />
    </div>
  )
}

export default App
