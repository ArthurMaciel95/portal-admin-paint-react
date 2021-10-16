import React, { useEffect, useState } from 'react'
import BreadCrumbComponent from '../breadCrumbComponent'
import iconAccount from '../../assets/svg/account_circle-1.svg'
import InputComponent from '../inputComponent'
import Avatar from '../../assets/images/avatar1.png'
import IconAccountDetail from '../../assets/svg/launch.svg'
import ButtonComponent from '../ButtonComponent'
import environment from '../../environment'
import axios from '../../utils/axios'
import LoadingComponent from '../LoadingComponent'

import './styles.css'

const DashboardComponent = () => {
    const Crumb = {
        icon: iconAccount,
        page: 'Clientes'
    }
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    useEffect(() => {
        let options = {
            headers: {
                'Authorization': 'Bearer ' + environment.token
            }
        }

        const result = axios.get('/client/list', options).then(response => response).catch(e => console.log(e))
        setUser(result)
        console.log(result)
        setLoading(false)

    }, [])


    return (
        <>
            {loading ? <LoadingComponent /> : ''}
            <section className="dashboard-container">
                <div className="dashboard-header">
                    <BreadCrumbComponent crumb={Crumb} />
                </div>
                <div className="dashboard-filter">
                    <h4>Filtrar por:</h4>
                    <div className="input-area">
                        <InputComponent type="text" label="Nome" />
                    </div>
                </div>
                <div className="dashboard-body">
                    <table>
                        <thead>
                            <th></th>
                            <th>Clientes</th>
                            <th>Email</th>
                            <th>Situação</th>
                            <th>Data de Criação</th>
                            <th>Atualizado em</th>
                            <th>Pagamento</th>
                            <th>Metodo</th>
                            <th>...</th>
                        </thead>
                        <tbody>

                            <tr>
                                <td className="image-area">
                                    <img src={Avatar} alt="" />
                                </td>
                                <td>
                                    <p>Arthur Rocha</p>
                                </td>
                                <td>
                                    <p>arthurnmrocha@gmail.com</p>
                                </td>
                                <td>
                                    <p>Atrasado</p>
                                </td>
                                <td>
                                    <p>09/10/2021 01:10:45</p>
                                </td>
                                <td>
                                    <p>09/10/2021 01:10:45</p>
                                </td>
                                <td>
                                    <p>R$1.872,02</p>
                                </td>
                                <td>
                                    <p>Crédito</p>
                                </td>
                                <td>

                                    <ButtonComponent type="submit" btnDetail="true">
                                        {<object type="image/svg+xml" data={IconAccountDetail}></object>}
                                    </ButtonComponent>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default DashboardComponent
