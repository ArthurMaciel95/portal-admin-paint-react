import React from "react";
import "./styles.css";
import logo from "../../assets/images/logo.png";
import iconUser from "../../assets/svg/account_circle.svg";
import iconDollar from "../../assets/svg/fa-solid_dollar-sign.svg";
import iconSecurity from "../../assets/svg/security.svg";
import iconInfo from "../../assets/svg/info.svg";
import iconArrowDown from "../../assets/svg/keyboard_arrow_down.svg";

const SideBarComponent = () => {
    return (
        <>
            <aside className="side-bar">
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
            </aside>
        </>
    );
};

export default SideBarComponent;
