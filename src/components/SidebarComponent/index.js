import React from "react";
import "./styles.css";
import logo from "../../assets/images/logo.png";
import iconUser from "../../assets/svg/account_circle.svg";
import iconDollar from "../../assets/svg/fa-solid_dollar-sign.svg";
import iconSecurity from "../../assets/svg/security.svg";
import iconInfo from "../../assets/svg/info.svg";
import iconArrowDown from "../../assets/svg/keyboard_arrow_down.svg";
import iconCopyright from "../../assets/svg/copyright.svg";
import iconBuild from "../../assets/svg/build.svg";

const SideBarComponent = () => {
    return (
        <>
            <aside className="side-bar">
                <div className="sidebar-content">
                <img className="logo" src={logo} alt="logo marca paint" />
                <div className="menu__side-bar">
                    <ul>
                        <li>
                            <object data={iconUser} type=""></object>
                            <p>Clientes</p>
                            <object data={iconArrowDown} type=""></object>
                        </li>
                        <li>
                            <object data={iconDollar} type=""></object>
                            <p>Faturamento</p>
                            <object data={iconArrowDown} type=""></object>
                        </li>
                        <li>
                            <object data={iconSecurity} type=""></object>
                            <p>Segurança</p>
                            <object data={iconArrowDown} type=""></object>
                        </li>
                        <li>
                            <object data={iconInfo} type=""></object>
                            <p>Informação</p>
                            <object data={iconArrowDown} type=""></object>
                        </li>
                    </ul>
                </div>
                <div className="footer__side-bar">
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

export default SideBarComponent;
