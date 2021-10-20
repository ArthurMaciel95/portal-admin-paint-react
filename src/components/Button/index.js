import React from 'react'

import './styles.css'
const ButtonComponent = ({ type, value = undefined, btnDetail = false, children }) => {


    return (

        <button className={btnDetail ? 'btn-detail' : 'btn'} type={type}>
            {value || children}
        </button>


    )
}

export default ButtonComponent
