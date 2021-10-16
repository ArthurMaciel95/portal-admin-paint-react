import React from 'react'
import './styles.css'

const InputComponent = ({type, label}) => {
    return (
        <div className="container-input">
            <input className="mat-input" type={type} required name={label.toLowerCase()}/>
            <label className="mat-label" htmlFor="em">{label}</label>
        </div>
    )
}

export default InputComponent
