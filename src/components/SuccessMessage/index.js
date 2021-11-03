import React from 'react'
import IconSuccess from '../../assets/svg/icon_message_success.svg';
import './styles.css'
const SuccessMessage = ({ message }) => {
    return (
        <div className="message-area">

            <span className="success-message">
                <img src={IconSuccess} alt="" width="20px" height="20px" />
                {message}
            </span>
        </div>
    )
}

export default SuccessMessage
