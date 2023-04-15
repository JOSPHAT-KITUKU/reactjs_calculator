import React from 'react'
import './index.css';
import {useState} from 'react';


function App() {
    const [calc, setState] = useState("");
    const [result, setResult] = useState("");

    const operations = ['/', '*', '+', '-', '.', '_'];


    const clearCalc = () =>{
      setResult("");
      setState("");
    }
    const updateCalc = value => {
      if ((operations.includes(value) && calc === '') || (operations.includes(value) && operations.includes(calc.slice(-1))))
      {
        return;
      }
      setState(prev => prev + value);
      if (!operations.includes(value)){
        if (calc === '_'){
          console.log(value);
        }
        // eslint-disable-next-line
        setResult(eval(calc + value));
      }
    }
    const equalto = () => {
      if (calc === ''){
        return;
      }
      // eslint-disable-next-line
      setState(eval(calc).toString());
    }
    const del = () => {
      if (calc === ''){
        return;
      }
      const num = calc.slice(0, -1);
      setState(num);
      setResult(num);
    }
    return (
      <div className="Calc">
        <div className='display'>
          <div className='prev-out'>
            {result ? <span>{result}</span>: 0}
          </div>
          <div className='curr_out'>
            {calc || "0"}
          </div>
        </div>
        <button className='span_two' onClick={()=>clearCalc()}>C</button>
        <button className='color-org' onClick={del}>DEL</button>
        <button className='color-org' onClick={()=>updateCalc('_')}>_</button>
        <button onClick={()=> updateCalc('7')}>7</button>
        <button onClick={()=> updateCalc('8')}>8</button>
        <button onClick={()=> updateCalc('9')}>9</button>
        <button className='color-org' onClick={()=> updateCalc("/")}>/</button>
        <button onClick={()=> updateCalc('4')}>4</button>
        <button onClick={()=> updateCalc('5')}>5</button>
        <button onClick={()=> updateCalc('6')}>6</button>
        <button className='color-org' onClick={()=> updateCalc("*")}>X</button>
        <button onClick={()=> updateCalc('1')}>1</button>
        <button onClick={()=> updateCalc('2')}>2</button>
        <button onClick={()=> updateCalc('3')}>3</button>
        <button className='color-org' onClick={()=> updateCalc("-")}>-</button>
        <button onClick={()=> updateCalc('0')}>0</button>
        <button onClick={()=> updateCalc(".")}>.</button>
        <button className='color-org' onClick={() => equalto()}>=</button>
        <button className='color-org' onClick={()=> updateCalc("+")}>+</button>
      </div>
    );
}

export default App;
