import React, { useEffect, useState } from 'react'
import BreadCrumbComponent from '../BreadCrumb'
import iconAccount from '../../assets/svg/account_circle-1.svg'
import imageFilter from '../../assets/images/filter_menu_illustrator.png'
import InputComponent from '../Input'
import environment from '../../environment'
import LoadingComponent from '../Loading'
import TableComponent from '../Table'
import jwtVerify from '../../utils/jwt'
import noAvatar from '../../assets/images/no-avatar.png'

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
                    'Authorization': 'Bearer ' + jwtVerify.getToken()
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
    const getUser = () => {
        const user = jwtVerify.getPayloadJwt()


    }

    useEffect(() => {
        getData()
        getUser()
    }, [])

    return (
        <>
            {loading && <LoadingComponent status={loading} />}
            <section className="dashboard-container">
                <div className="dashboard-header">
                    <BreadCrumbComponent crumb={Crumb} />
                    <div className="profile-area">
                        <div className="image-area">
                            <img src={noAvatar} alt="sem foto" />
                        </div>
                        <div className="profile-info">
                            <p>Arthur Rocha</p>
                            <p>arthurnmrocha@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="dashboard-filter">
                    <h4>Filtrar por:</h4>
                    <div className="col1">

                        <div className="input-area">

                            <InputComponent type="text" label="Nome" onchangeInput={onChangeInput} />
                            <InputComponent type="text" label="Empresa" onchangeInput={onChangeInput} />
                        </div>
                        <div className="input-area">
                            <InputComponent type="text" label="Situação" onchangeInput={onChangeInput} />
                            <InputComponent type="text" label="Email" onchangeInput={onChangeInput} />

                        </div>
                        <object data={imageFilter} type=""></object>
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
