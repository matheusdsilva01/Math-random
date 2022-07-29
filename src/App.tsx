import { FormEvent, useEffect, useRef, useState } from 'react';
import './App.css';
import TableHitsandErrors from './components/TableHitsandErrors/TableHitsandErrors';
import ToggleTheme from './components/ToggleTheme/ToggleTheme';
import { Calculation } from './interfaces/Calculation';


function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operator, setOperator] = useState<string | null>(null);
  const [hits, setHits] = useState<Calculation[]>([]);
  const [errors, setErrors] = useState<Calculation[]>([]);
  const responseCalc = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    if (!operator) {
      let operations = ['+', '-', '*', '/'];
      let randomOperator = Math.floor(Math.random() * 4);
      setOperator(operations[randomOperator]);
    }
    setNum1(Math.floor(Math.random() * 10 + 1));
    setNum2(Math.floor(Math.random() * 10 + 1));
  }, [operator])

  const newCount = () => {
    setNum1(Math.floor(Math.random() * 10 + 1));
    setNum2(Math.floor(Math.random() * 10 + 1));
    responseCalc.current!.value = ""
  }

  const calculation = (e: FormEvent) => {
    e.preventDefault()
    let conta = `${num1} ${operator} ${num2}`
    let response = responseCalc.current?.value;
    if (eval(conta) === Number(response)) {
      addAcert(conta, Number(response))
      newCount();
    } else {
      addError(conta, Number(response))
    }
  }

  const addAcert = (conta: string, resposta: number) => {
    let acert = {
      conta,
      resposta
    }
    setHits((state) => [...state, acert])
  }

  const addError = (conta: string, resposta: number) => {
    let error = {
      conta,
      resposta
    }
    errors.filter((el) => el.conta === conta).length < 1 ?
      setErrors((state) => [...state, error]) : null
  }

  return (
    <div className="App">
      <ToggleTheme />
      <section>
        <form className='container-form' onSubmit={calculation}>
          <h1>{num1} {operator} {num2} = <input required type="number" step={".01"} ref={responseCalc} /></h1>
          <select
            name="operacoes"
            defaultValue={'null'}
            onChange={(e) => {setOperator(e.target.value)}}
          >
            <option value=''>Aleatório</option>
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
