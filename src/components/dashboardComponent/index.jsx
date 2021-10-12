import React from "react";
import LoginIlustration from '../../assets/images/login_illustrator.png'

import "./styles.css";
import { Link } from "react-router-dom";
const DashboardComponent = () => {
    
    return (
        <main className="dashboard-container">
            <div className="dashboard-content">
                <div className="dashboard-login-content">
                    <h3 className="login-title">Portal Administrativo</h3>
                    <img src={LoginIlustration} alt="" />
                    <div className="form-login">
                        <h3>Preencha os campos para fazer o Login</h3>
                        <form action="" method="post">
                            <input type="text" id="name" placeholder="Email" />
                            <input type="password" id="password" placeholder="Senha"/>
                            <Link to="">Esqueci minha senha.</Link>
                            <button>Entrar</button>
                            
                        </form>
                    </div>
                   
                </div>
            </div>
        </main>
    );
};

export default DashboardComponent;
