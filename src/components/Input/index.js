import React, { useEffect, useState } from 'react'
import './styles.css'

const InputComponent = ({ type, label, onchangeInput }) => {
    const [text, setText] = useState('')
    useEffect(() => {
        onchangeInput(text)
    }, [text])

    return (
        <div className="container-input">
            <input className="mat-input" type={type} required name={label.toLowerCase()} value={text} onChange={(e) => { setText(e.target.value) }} />
            <label className="mat-label" htmlFor="email">{label}</label>
        </div>
    )
}

export default InputComponent
