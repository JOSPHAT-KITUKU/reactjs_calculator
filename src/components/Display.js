import React from 'react';
import './Display.css';

const Display = (props)=>{
    return (
        <div className='display'>
            <div className='top-preview'>
                {props.input2?<span>{props.input2}</span>:0}
            </div>
            <div className='bottom-ans'>
                {props.input || 0}
            </div>
        </div>
    );
}

export default Display;
