import React, { useEffect, useState } from "react";
import LoginIlustration from '../../assets/images/login_illustrator.png'
import InputComponent from '../Input'
import environment from '../../environment'
import ButtonComponent from '../Button'
import LoadingComponent from '../Loading'
import jwtVerify from "../../utils/jwt";
import "./styles.css";
import { Link } from "react-router-dom";
import ErroMessageComponent from "../ErroMessage";
import formatter from "../../utils/formatter";
import buffer from "../../utils/buffer";
const LoginComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState({ error: false, message: undefined })
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)



    const clearMessage = () => {
        return setErrorMessage({ error: false, message: undefined })
    }

    const login = async () => {
        try {
            clearMessage()
            setLoading(true)
            const toBase64 = `${email}:${password}`
            const encoded = buffer.encoded(toBase64, 'base64')

            const payload = { email, password }


            const path = `${environment.baseURL}/user/access`
            const result = await fetch(path, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
            const data = await result.json()

            setDisabled(false)
            setLoading(false)

            console.log(data)
            if (!data?.status) {

                return setErrorMessage({ error: true, message: data.message })
            }

            if (data.status && !jwtVerify.isEqual(data.token, 'jwt_token')) {
                const token = data.token
                token && localStorage.setItem('jwt_token', JSON.stringify(data.token))
            }
        } catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setDisabled(true)
        if (formatter.isNull(email) || formatter.isNull(password)) {
            setDisabled(false)
            return setErrorMessage({ error: true, message: 'Existem campos a serem preenchidos, tente novamente.' })
        }
        login()
    };

    /*   const onchangeInput = (email, password) => {
          setPassword(password)
          setEmail(email)
      } */

    return (
        <> {loading && <LoadingComponent />}
            <main className="login-container">
                <div className="login-card-content">
                    <div className="login-content">
                        <h3 className="login-title">Portal Administrativo</h3>
                        <img src={LoginIlustration} className="illustration-login" alt="" />
                        <div className="form-login">
                            <h3>Preencha os campos para fazer o Login</h3>
                            {errorMessage.error && <ErroMessageComponent message={errorMessage.message} />}
                            <form onSubmit={handleSubmit} method="post">
                                <input className="mat-input" type="text" name="email" value={email} disabled={disabled} placeholder="email" onChange={(e) => { setEmail(e.target.value) }} />
                                {/* <label className="mat-label" htmlFor="email">email</label> */}
                                <input className="mat-input" type="text" name="password" value={password} disabled={disabled} placeholder="senha" onChange={(e) => { setPassword(e.target.value) }} />
                                {/* <label className="mat-label" htmlFor="email">Senha</label> */}
                                {/*  <InputComponent label="Email" type="text" disabled={disabled} onchangeInput={onchangeInput} />
                           <InputComponent label="Senha" type="text" disabled={disabled} onchangeInput={onchangeInput} /> */}
                                <Link to="">Esqueci minha senha.</Link>
                                <ButtonComponent type="submit" value="Entrar" disabled={disabled} />
                            </form>

                        </div>

                    </div>
                </div>
            </main></>
    );
};

export default LoginComponent;
