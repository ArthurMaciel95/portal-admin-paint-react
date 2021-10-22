import React, { useEffect, useState } from 'react'
import BreadCrumbComponent from '../BreadCrumb'
import iconAccount from '../../assets/svg/account_circle-1.svg'
import InputComponent from '../Input'
import environment from '../../environment'
import LoadingComponent from '../Loading'
import TableComponent from '../Table'
import jwtVerify from '../../utils/jwt'
import './styles.css'

const DashboardComponent = () => {
    const Crumb = {
        icon: iconAccount,
        page: 'Clientes'
    }
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [status, setStatus] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    async function getData() {
        try {

            const url = `${environment.baseURL}/client/list`
            const option = {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTcwNmMzMjBlN2NmYzFlOGNjMTk3MDEiLCJ1c2VybmFtZSI6ImFydGh1ciIsImVtYWlsIjoiYXJ0aHVybm1yb2NoYUBnbWFpbC5jb20iLCJjcmVhdGVkX2F0IjoiMjAyMS0xMC0yMFQxOToyMToyMi43NjBaIiwidXBkYXRlZF9hdCI6IjIwMjEtMTAtMjBUMTk6MjE6MjIuNzYwWiIsIl9fdiI6MCwiaWF0IjoxNjM0OTE2MDY0LCJleHAiOjE2MzQ5MTk2NjR9.sSNYYtEaDY1C4xnBFbtD-8-RS7zmhKWnt-Qv-m3xCu0"
                }
            }
            const result = await fetch(url, option)
            const data = await result.json()

            setUser(data.clients)
            setTimeout(() => {
                setLoading(false)
            }, 3000);
            return data
        } catch (e) {
            setLoading(false)
            console.error(e)
        }
    }
    const onChangeInput = (text) => {
        setName()
        setCompany()
        setStatus()
        setEmail()
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            {loading && <LoadingComponent status={loading} />}
            <section className="dashboard-container">
                <div className="dashboard-header">
                    <BreadCrumbComponent crumb={Crumb} />
                </div>
                <div className="dashboard-filter">
                    <h4>Filtrar por:</h4>
                    <div className="input-area">
                        <InputComponent type="text" label="Nome" onchangeInput={onChangeInput} />
                        <InputComponent type="text" label="Empresa" onchangeInput={onChangeInput} />
                    </div>
                    <div className="input-area">
                        <InputComponent type="text" label="Situação" onchangeInput={onChangeInput} />
                        <InputComponent type="text" label="Email" onchangeInput={onChangeInput} />
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
