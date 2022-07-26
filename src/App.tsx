import { FormEvent, useEffect, useRef, useState } from 'react';
import './App.css';
import TableHitsandErrors from './components/TableHitsandErrors';
import { Calculation } from './interfaces/Calculation';


function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [hits, setHits] = useState<Calculation[]>([]);
  const [errors, setErrors] = useState<Calculation[]>([]);
  const responseCalc = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 10 + 1));
    setNum2(Math.floor(Math.random() * 10 + 1));
  }, [])

  const newCount = () => {
    setNum1(Math.floor(Math.random() * 10 + 1));
    setNum2(Math.floor(Math.random() * 10 + 1));
    responseCalc.current!.value = ""
  }

  const calculation = (e: FormEvent) => {
    e.preventDefault()
    let conta = `${num1} + ${num2}`
    let response = responseCalc.current?.value;
    if (num1 + num2 === Number(response)) {

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
    setErrors((state) => [...state, error]): null
  }



  return (
    <div className="App">
      <section>
        <form className='container-form' onSubmit={calculation}>
          <h1>{num1} + {num2} = <input required type="number" ref={responseCalc} /></h1>
        </form>
      </section>
      <TableHitsandErrors hits={hits} errors={errors} />
    </div>
  )
}

export default App
