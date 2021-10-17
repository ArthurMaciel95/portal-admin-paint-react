import React, { useEffect, useState } from 'react'
import BreadCrumbComponent from '../breadCrumbComponent'
import iconAccount from '../../assets/svg/account_circle-1.svg'
import InputComponent from '../inputComponent'
import Avatar from '../../assets/images/avatar2.png'
import Avatar1 from '../../assets/images/avatar1.png'
import IconAccountDetail from '../../assets/svg/launch.svg'
import ButtonComponent from '../ButtonComponent'
import environment from '../../environment'
import LoadingComponent from '../LoadingComponent'

import './styles.css'

const DashboardComponent = () => {
    const Crumb = {
        icon: iconAccount,
        page: 'Clientes'
    }
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()


    useEffect(() => {

        async function getData() {
            try {
                const url = `${environment.baseURL}/client/list`
                const option = {
                    method: 'GET',
                    headers: {
                        'Authorization': 'Bearer ' + environment.token,

                    }
                }
                const result = await fetch(url, option)
                const data = await result.json()

                console.log(data, result)
                setUser(data)


                setLoading(false)
            } catch (e) {
                setLoading(false)
                console.error(e)
            }
        }

        getData()
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
                        <InputComponent type="text" label="Empresa" />
                    </div>
                    <div className="input-area">
                        <InputComponent type="text" label="Situação" />
                        <InputComponent type="text" label="Email" />
                    </div>
                </div>
                <div className="dashboard-body">
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Clientes</th>
                                <th>Email</th>
                                <th>Situação</th>
                                <th>Data de Criação</th>
                                <th>Atualizado em</th>
                                <th>Pagamento</th>
                                <th>Metodo</th>
                                <th>...</th>
                            </tr>
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
                                <td className="status-area">
                                    <span className="circle-status-yellow"></span>
                                    <p>Pendente</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>R$1.872,02</p>
                                </td>
                                <td>
                                    <p>Dinheiro</p>
                                </td>
                                <td>

                                    <ButtonComponent type="submit" btnDetail="true">
                                        {<object type="image/svg+xml" data={IconAccountDetail}></object>}
                                    </ButtonComponent>
                                </td>
                            </tr>
                            <tr>
                                <td className="image-area">
                                    <img src={Avatar1} alt="" />
                                </td>
                                <td>
                                    <p>Arthur Rocha</p>
                                </td>
                                <td>
                                    <p>arthurnmrocha@gmail.com</p>
                                </td>
                                <td className="status-area">
                                    <span className="circle-status-green"></span>
                                    <p>Recebido</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>R$1.872,02</p>
                                </td>
                                <td>
                                    <p>Dinheiro</p>
                                </td>
                                <td>

                                    <ButtonComponent type="submit" btnDetail="true">
                                        {<object type="image/svg+xml" data={IconAccountDetail}></object>}
                                    </ButtonComponent>
                                </td>
                            </tr>
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
                                <td className="status-area">
                                    <span className="circle-status-red"></span>
                                    <p>Atrasado</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>R$1.872,02</p>
                                </td>
                                <td>
                                    <p>Dinheiro</p>
                                </td>
                                <td>

                                    <ButtonComponent type="submit" btnDetail="true">
                                        {<object type="image/svg+xml" data={IconAccountDetail}></object>}
                                    </ButtonComponent>
                                </td>
                            </tr>
                            <tr>
                                <td className="image-area">
                                    <img src={Avatar1} alt="" />
                                </td>
                                <td>
                                    <p>Arthur Rocha</p>
                                </td>
                                <td>
                                    <p>arthurnmrocha@gmail.com</p>
                                </td>
                                <td className="status-area">
                                    <span className="circle-status-green"></span>
                                    <p>Recebido</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>R$1.872,02</p>
                                </td>
                                <td>
                                    <p>Dinheiro</p>
                                </td>
                                <td>

                                    <ButtonComponent type="submit" btnDetail="true">
                                        {<object type="image/svg+xml" data={IconAccountDetail}></object>}
                                    </ButtonComponent>
                                </td>
                            </tr>
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
                                <td className="status-area">
                                    <span className="circle-status-red"></span>
                                    <p>Atrasado</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>R$1.872,02</p>
                                </td>
                                <td>
                                    <p>Dinheiro</p>
                                </td>
                                <td>

                                    <ButtonComponent type="submit" btnDetail="true">
                                        {<object type="image/svg+xml" data={IconAccountDetail}></object>}
                                    </ButtonComponent>
                                </td>
                            </tr>
                            <tr>
                                <td className="image-area">
                                    <img src={Avatar1} alt="" />
                                </td>
                                <td>
                                    <p>Arthur Rocha</p>
                                </td>
                                <td>
                                    <p>arthurnmrocha@gmail.com</p>
                                </td>
                                <td className="status-area">
                                    <span className="circle-status-yellow"></span>
                                    <p>Pendente</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>R$1.872,02</p>
                                </td>
                                <td>
                                    <p>Dinheiro</p>
                                </td>
                                <td>

                                    <ButtonComponent type="submit" btnDetail="true">
                                        {<object type="image/svg+xml" data={IconAccountDetail}></object>}
                                    </ButtonComponent>
                                </td>
                            </tr>
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
                                <td className="status-area">
                                    <span className="circle-status-red"></span>
                                    <p>Atrasado</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>R$1.872,02</p>
                                </td>
                                <td>
                                    <p>Dinheiro</p>
                                </td>
                                <td>

                                    <ButtonComponent type="submit" btnDetail="true">
                                        {<object type="image/svg+xml" data={IconAccountDetail}></object>}
                                    </ButtonComponent>
                                </td>
                            </tr>
                            <tr>
                                <td className="image-area">
                                    <img src={Avatar1} alt="" />
                                </td>
                                <td>
                                    <p>Arthur Rocha</p>
                                </td>
                                <td>
                                    <p>arthurnmrocha@gmail.com</p>
                                </td>
                                <td className="status-area">
                                    <span className="circle-status-green"></span>
                                    <p>Recebido</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>2021/10/14 18:17:02</p>
                                </td>
                                <td>
                                    <p>R$1.872,02</p>
                                </td>
                                <td>
                                    <p>Dinheiro</p>
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
