import React, { useEffec, useState } from "react";
import LoginIlustration from '../../assets/images/login_illustrator.png'
import InputComponent from '../../components/InputComponent'

import ButtonComponent from '../../components/ButtonComponent'
import "./styles.css";
import { Link } from "react-router-dom";
import ErroMessageComponent from "../ErroMessageComponent";
import { useEffect } from "react/cjs/react.development";
const LoginComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState({ error: false, message: undefined })
    const [disabled, setDisabled] = useState(false)

    const isNull = (text) => {
        if (typeof text == 'null' || text.length === 0 || text === '') {
            return true
        }
        return false
    }

    /*   const handleSubmit = (e) => {
          e.prevendDefault()
          setDisabled(true)
          if (isNull(email) || isNull(password)) {
              setErrorMessage({ error: true, message: 'Existem campos a serem preenchidos, tente novamente.' })
          }
  
      } */
    const handleSubmit = (e) => {
        e.preventDefault();
        setDisabled(true)
        if (isNull(email) || isNull(password)) {
            setErrorMessage({ error: true, message: 'Existem campos a serem preenchidos, tente novamente.' })
        }
    };


    return (
        <main className="login-container">
            <div className="login-card-content">
                <div className="login-content">
                    <h3 className="login-title">Portal Administrativo</h3>
                    <img src={LoginIlustration} className="illustration-login" alt="" />
                    <div className="form-login">
                        <h3>Preencha os campos para fazer o Login</h3>
                        {errorMessage.error && <ErroMessageComponent message={errorMessage.message} />}
                        <form onSubmit={handleSubmit} method="post">
                            <InputComponent label="Email" type="text" disabled={disabled} />
                            <InputComponent label="Senha" type="password" disabled={disabled} />
                            <Link to="">Esqueci minha senha.</Link>
                            <ButtonComponent type="submit" value="Entrar" disabled={disabled} />
                        </form>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default LoginComponent;
