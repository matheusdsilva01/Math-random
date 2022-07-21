import { FormEvent, useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
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
    let sum = num1 + num2
    let response = responseCalc.current?.value;
    if (sum === Number(response)) {
      console.log("acertou!");
      newCount();
    } else {
      console.log("errou!");
    }
  }


  
  return (
    <div className="App">
      <section>
        <form onSubmit={calculation}>
          <h1>{num1} + {num2} = <input type="number" ref={responseCalc} /></h1>
        </form>
      </section>
    </div>
  )
}

export default App
