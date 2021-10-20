import React from 'react'
import IconError from '../../assets/svg/error-circle.svg'
import './styles.css'
const ErroMessageComponent = ({ message }) => {
    return (
        <div className="message-area">

            <span className="error-message">
                <img src={IconError} alt="" width="20px" height="20px" />
                {message}
            </span>
        </div>
    )
}

export default ErroMessageComponent
