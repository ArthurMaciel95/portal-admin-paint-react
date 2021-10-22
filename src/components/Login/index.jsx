import React, { useEffect, useState, useContext } from "react";
import LoginIlustration from '../../assets/images/login_illustrator.png'
import InputComponent from '../Input'
import { } from "react-router-dom";
import ButtonComponent from '../Button'
import LoadingComponent from '../Loading'
import jwtVerify from "../../utils/jwt";
import "./styles.css";
import { Link } from "react-router-dom";
import { user } from '../../services/user-service'
import ErroMessageComponent from "../ErroMessage";
import formatter from "../../utils/formatter";
import { Context } from "../../context/AuthContext";
const LoginComponent = () => {
    const { authenticated } = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState({ error: false, message: undefined })
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const clearMessage = () => {
        return setErrorMessage({ error: false, message: undefined })
    }



    const handleSubmit = async (e) => {
        clearMessage();
        e.preventDefault();
        setDisabled(true);
        if (formatter.isNull(email) || formatter.isNull(password)) {
            setDisabled(false);
            setLoading(false);
            return setErrorMessage({ error: true, message: 'Existem campos a serem preenchidos, tente novamente.' })
        }
        const result = await user.login(email, password).then(response => response).then(data => data.json()).catch(e => console.log(e))
        console.log(result)
        setDisabled(false);
        setLoading(false);
        if (!result?.status) {

            return setErrorMessage({ error: true, message: result.message });
        }
        jwtVerify.setNewToken(result.status, result.token)

    };

    useEffect(() => {
        jwtVerify.logOut()
    }, [])

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
                                <input className="mat-input" type="password" name="password" value={password} disabled={disabled} placeholder="senha" onChange={(e) => { setPassword(e.target.value) }} />
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
