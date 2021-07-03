import React from 'react';
import './LabeledInput.css';

export function LabeledInput({labelText,placeholder,type}){
    return (
        <div className="LabeledInput">
            {labelText && <label>{labelText}</label>}
            <input type={type} placeholder={placeholder}/>
        </div>
    );
}