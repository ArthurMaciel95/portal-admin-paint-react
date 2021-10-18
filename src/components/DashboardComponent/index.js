import React, { useEffect, useState } from 'react'
import BreadCrumbComponent from '../breadCrumbComponent'
import iconAccount from '../../assets/svg/account_circle-1.svg'
import InputComponent from '../inputComponent'
import environment from '../../environment'
import LoadingComponent from '../LoadingComponent'

import './styles.css'
import TableComponent from '../TableComponent'

const DashboardComponent = () => {
    const Crumb = {
        icon: iconAccount,
        page: 'Clientes'
    }
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    async function getData() {
        try {
            const url = `${environment.baseURL}/client/list`
            const option = {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + environment.token


                }

            }
            // ERRO AO REALIZAR O MAP NO TEMPLATE. TypeError: Cannot read property 'map' of undefined
            const result = await fetch(url, option)
            const data = await result.json()

            setUser(data.clients)
            setLoading(false)
            return data


        } catch (e) {
            setLoading(false)
            console.error(e)
        }
    }

    useEffect(() => {
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
                    <TableComponent
                        data={user}
                        tableHeaderNames={[
                            '',
                            'Clientes',
                            'Email',
                            'Situação',
                            'Data de Criação',
                            'Atualização',
                            'Pagamento',
                            'Metodo',
                            '...'
                        ]} />
                </div>
            </section>
        </>
    )
}

export default DashboardComponent
