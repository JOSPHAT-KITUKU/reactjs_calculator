import React from 'react';
import './Button.css';


const Buttons = (props) =>{
    return(
        <div className='buttons'>
            <button className='span-two' onClick={props.clear}>CLEAR</button>
            <button className='span-two' onClick={props.delete}>DEL</button>
            <button onClick={()=>props.click('7')}>7</button>
            <button onClick={()=>props.click('8')}>8</button>
            <button onClick={()=>props.click('9')}>9</button>
            <button className='color-org' onClick={()=>props.click('/')}>/</button>
            <button onClick={()=>props.click('4')}>4</button>
            <button onClick={()=>props.click('5')}>5</button>
            <button onClick={()=>props.click('6')}>6</button>
            <button className='color-org' onClick={()=>props.click('*')}>X</button>
            <button onClick={()=>props.click('1')}>1</button>
            <button onClick={()=>props.click('2')}>2</button>
            <button onClick={()=>props.click('3')}>3</button>
            <button className='color-org' onClick={()=>props.click('+')}>+</button>
            <button onClick={()=>props.click('0')}>0</button>
            <button onClick={()=>props.click('.')}>.</button>
            <button className='color-org'onClick={props.equal}>=</button>
            <button className='color-org' onClick={()=>props.click('-')}>-</button>
        </div>
    );
}

export default Buttons;
