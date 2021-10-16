import React, { useEffect } from "react";
import LoginIlustration from '../../assets/images/login_illustrator.png'
import InputComponent from '../../components/inputComponent'

import ButtonComponent from '../../components/ButtonComponent'
import "./styles.css";
import { Link } from "react-router-dom";
const LoginComponent = () => {

    return (
        <main className="login-container">
            <div className="login-card-content">
                <div className="login-content">
                    <h3 className="login-title">Portal Administrativo</h3>
                    <img src={LoginIlustration} alt="" />
                    <div className="form-login">
                        <h3>Preencha os campos para fazer o Login</h3>
                        <form action="" method="post">
                            <InputComponent label="Email" type="text" />
                            <InputComponent label="Senha" type="password" />
                            <Link to="">Esqueci minha senha.</Link>
                            <ButtonComponent type="submit" value="Entrar" />


                        </form>

                    </div>

                </div>
            </div>
        </main>
    );
};

export default LoginComponent;
