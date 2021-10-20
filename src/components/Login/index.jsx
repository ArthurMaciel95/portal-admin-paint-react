import React, { useEffect, useState } from "react";
import LoginIlustration from '../../assets/images/login_illustrator.png'
import InputComponent from '../Input'
import environment from '../../environment'
import ButtonComponent from '../Button'
import LoadingComponent from '../Loading'
import jwtVerify from "../../services/local-storage";
import "./styles.css";
import { Link } from "react-router-dom";
import ErroMessageComponent from "../ErroMessage";

const LoginComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState({ error: false, message: undefined })
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const isNull = (text) => {
        if (typeof text == 'null' || text.length === 0 || text === '') {
            return true
        }
        return false
    }

    const login = async () => {
        setLoading(true)
        const toBase64 = `${email}:${password}`
        const encoded = new Buffer(toBase64, 'base64').toString("ascii")
        console.log(encoded)
        const payload = { email, password }

        console.log(JSON.stringify(payload))
        const path = `${environment.baseURL}/user/access`
        const result = await fetch(path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),


        }).then(response => response.json()).catch(e => console.log(e))
        setLoading(false)
        console.log(result)
        if (!result?.status) {
            setDisabled(true)
            return setErrorMessage({ error: true, message: result.message })
        }

        if (jwtVerify.isEqual(result.token, 'jwt_token')) {
            if (result?.status) {

                const token = result.token
                token && localStorage.setItem('jwt_token', JSON.stringify(result.token))
            };
        }



    }

    const handleSubmit = (e) => {

        e.preventDefault();
        setDisabled(true)
        if (isNull(email) || isNull(password)) {
            setDisabled(false)
            return setErrorMessage({ error: true, message: 'Existem campos a serem preenchidos, tente novamente.' })
        }
        login()
    };

    const onchangeInput = (email, password) => {
        setPassword(password)
        setEmail(email)


    }


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
