import React from 'react'
import AvatarUser from "../../assets/images/avatar1.png";
import BreadCrumbComponent from '../BreadCrumb'
import iconAccount from '../../assets/svg/account_circle-1.svg'
import iconAddClient from '../../assets/svg/bread_add_list.svg'
const HeaderPageComponent = () => {

    const Crumb = [{
        icon: iconAccount,
        page: 'Clientes'
    },
    {
        icon: iconAddClient,
        page: 'Criando uma conta'
    }
    ]
    return (
        <div className="create-user-header">
            <BreadCrumbComponent crumb={Crumb} />

            <div className="user-header">
                <img src={AvatarUser} alt="" />
                <div className="user-description">
                    <p>Nome User </p>
                    <p>danieljose@gmail.com</p>
                </div>
            </div>
        </div>);
}

export default HeaderPageComponent;