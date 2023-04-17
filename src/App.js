import './index.css';
import Display from './components/Display';
import Buttons from './components/Button';
import { useState } from 'react';

function App() {
  const [val, setResult] = useState("");
  const [val_prev, setPrev] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const handleClick = (value) => {
    if ((ops.includes(value) && val === '') || (ops.includes(value) && ops.includes(val.slice(-1)))){
      return;
    }
    setResult(prev => prev + value);
    if (!ops.includes(value)){
      // eslint-disable-next-line
      setPrev(eval(val+value).toString());
    }
  }
  const handleEqual = () =>{
    if (val === ''){
      return;
    }
     // eslint-disable-next-line
    setResult(eval(val).toString());
  }
  const handleClear = () => {
    setResult("");
    setPrev("");
  }
  const handleDel = () => {
    if (val === ''){
      return;
    }
    const num = val.slice(0, -1);
    setResult(num);
  }
  return (
    <div className='App-wrapper'>
      <div className='title'>
        <h2>Reactjs Calculator</h2>
      </div>
      <div className="App">
      <div className='disp'>
        <Display input={val} input2={val_prev}/>
      </div>
      <div className='butt'>
        <Buttons click={handleClick} equal={handleEqual} clear={handleClear} delete={handleDel}></Buttons>
      </div>
      </div>
    </div>
  );
}

export default App;
