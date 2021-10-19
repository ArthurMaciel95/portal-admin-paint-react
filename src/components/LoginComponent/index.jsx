import React, { useEffec, useState } from "react";
import LoginIlustration from '../../assets/images/login_illustrator.png'
import InputComponent from '../../components/InputComponent'

import ButtonComponent from '../../components/ButtonComponent'
import "./styles.css";
import { Link } from "react-router-dom";
const LoginComponent = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disabled, setDisabled] = useState(false)

    const handleSubmit = (event) => {
        event.prevendDefault();
        setDisabled(true)
    }
    return (
        <main className="login-container">
            <div className="login-card-content">
                <div className="login-content">
                    <h3 className="login-title">Portal Administrativo</h3>
                    <img src={LoginIlustration} alt="" />
                    <div className="form-login">
                        <h3>Preencha os campos para fazer o Login</h3>
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
