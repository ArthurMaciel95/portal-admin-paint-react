import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import LoginIlustration from '../../assets/images/login_illustrator.png'
import ButtonComponent from '../Button'
import LoadingComponent from '../Loading'
import jwtVerify from "../../utils/jwt";
import "./styles.css";
import { Link } from "react-router-dom";
import { user } from '../../services/user-service'
import ErroMessageComponent from "../ErroMessage";
import formatter from "../../utils/formatter";
const LoginComponent = () => {
    const redirect = useHistory();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState({ error: false, message: undefined })
    const [disabled, setDisabled] = useState(false)
    const [loading, setLoading] = useState(false)

    const clearMessage = () => {
        return setErrorMessage({ error: false, message: undefined })
    }

    const finished = () => {
        setLoading(false)
        setDisabled(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        finished()
        if (formatter.isNull(email) || formatter.isNull(password)) {
            finished()
            return setErrorMessage({ error: true, message: 'Existem campos a serem preenchidos, tente novamente.' })
        }
        const result = await user.login(email, password).then(response => response)
            .then(data => data.json())
            .catch(e => console.error(e))

        finished()
        if (result && !result.status) {
            finished()
            return setErrorMessage({ error: true, message: result.message });
        }
        if (!result) {
            return setErrorMessage({ error: true, message: 'Servidor indisponível, Por favor tente mais tarde' })
        }
        clearMessage();
        jwtVerify.setNewToken(result.status, result.token)
        redirect.push('/dashboard')
    };
    useEffect(() => {
        jwtVerify.logOut()
    }, [])


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
                                <input className="mat-input" type="password" name="password" value={password} disabled={disabled} placeholder="senha" onChange={(e) => { setPassword(e.target.value) }} />
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
