import React from "react";
import logo from "../../assets/images/logo.png";
import iconCopyright from "../../assets/svg/copyright.svg";
import iconBuild from "../../assets/svg/build.svg";
import "./styles.css";


const SideBarLogin = () => {


    return (
        <>
            <aside className="side-bar_login">
                <div className="sidebar-content">
                    <img className="logo" src={logo} alt="logo marca paint" />
                    <div className="menu__side-bar_login">
                        <ul>
                            <p className="introduction">Paint é uma empresa fictícia no ramo de Pintura, Onde Atua no mercado há mais de 10 anos deixando a vida mais colorida.</p>

                        </ul>
                    </div>
                    <div className="footer__side-bar_login">
                        <span>
                            <object data={iconBuild} type=""></object>
                            <p>Versão da Aplicação: 1.0</p>
                        </span>
                        <span>
                            <object data={iconCopyright} type=""></object>
                            <p>Todos os direitos reservados </p>
                        </span>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default SideBarLogin;
