import React from 'react'

import './styles.css'
const ButtonComponent = ({ type, value = undefined, btnDetail = false, children, disabled }) => {
    return (
        <button className={btnDetail ? 'btn-detail' : 'btn'} type={type} disabled={disabled}>
            {value || children}
        </button>
    )
}

export default ButtonComponent
