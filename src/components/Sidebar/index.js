import React from "react";
import logo from "../../assets/images/logo.png";
import iconUser from "../../assets/svg/account_circle.svg";
import iconDollar from "../../assets/svg/fa-solid_dollar-sign.svg";
import iconSecurity from "../../assets/svg/security.svg";
import iconInfo from "../../assets/svg/info.svg";
import iconArrowDown from "../../assets/svg/keyboard_arrow_down.svg";
import iconCopyright from "../../assets/svg/copyright.svg";
import iconBuild from "../../assets/svg/build.svg";
import iconProducts from '../../assets/svg/box_products.svg'
import "./styles.css";
import { Link } from "react-router-dom";

const SideBarComponent = () => {
    const icon = [iconUser, iconDollar, iconSecurity, iconInfo, iconProducts]
    const textOptionMenu = [
        { name: 'Clientes', path: '/dashboard' },
        { name: 'Faturamento', path: '/revenues' },
        { name: 'Segurança', path: '/security' },
        { name: 'Informação', path: '/information' },
        { name: 'Produtos', path: '/products' }
    ]

    return (
        <>
            <aside className="side-bar">
                <div className="sidebar-content">
                    <img className="logo" src={logo} alt="logo marca paint" />
                    <div className="menu__side-bar">
                        <ul>
                            {textOptionMenu.map(({ name, path }, i) => (
                                <Link to={path}>
                                    <li key={i}>
                                        <object data={icon[i]} type=""></object>
                                        <p>{name}</p>
                                        <object data={iconArrowDown} type=""></object>
                                    </li>
                                </Link>
                            ))}

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
