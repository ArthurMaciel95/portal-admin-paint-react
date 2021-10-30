import React, { useState, useEffect } from 'react'
import AvatarUser from "../../assets/images/avatar1.png";
import BreadCrumbComponent from '../BreadCrumb'
import iconAccount from '../../assets/svg/account_circle-1.svg'
import iconAddClient from '../../assets/svg/bread_add_list.svg'
import jwtVerify from '../../utils/jwt'
const HeaderPageComponent = () => {

    const [currentUser, setCurrentUser] = useState({})
    const getUser = () => {
        const user = jwtVerify.getPayloadJwt()
        setCurrentUser(JSON.parse(user))

    }
    useEffect(() => {
        getUser()
    }, [])
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
                <img src={AvatarUser} alt="foto de usuário" />
                <div className="user-description">
                    {currentUser ? <><p>{currentUser.username}</p>
                        <p>{currentUser.email}</p></> : {}}

                </div>
            </div>
        </div>);
}

export default HeaderPageComponent;