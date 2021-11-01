import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import ErrorMessage from '../../components/ErroMessage'
import './styles.css'
const RecoveryPassword = () => {

    const [errorMessage, setErrorMessage] = useState({ error: false, message: undefined })
    return (
        <div className="container-recovery">
            <section className="recovery-container">
                <img src={logo} alt="logo marca da empresa" />
                <div className="recovery-body">
                    <h3>Esqueceu sua senha? <br />
                        Vamos recuperar!</h3>
                    <p>Por favor, digite seu e-mail para rebeber um link com instruçoes no seu email.</p>
                    <p>Lembrou sua senha? <Link to="/">conecte-se</Link></p>
                    {errorMessage.error && <ErrorMessage message={errorMessage.message} />}

                    <input type="email" required placeholder="Email" />
                    <button>Enviar</button>
                </div>
            </section>
        </div>
    )
}

export default RecoveryPassword
