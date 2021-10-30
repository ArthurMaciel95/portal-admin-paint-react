import React, { useEffect, useState } from 'react'
import BreadCrumbComponent from '../BreadCrumb'
import iconAccount from '../../assets/svg/account_circle-1.svg'
import imageFilter from '../../assets/images/filter_menu_illustrator.png'
import LoadingComponent from '../Loading'
import TableComponent from '../Table'
import jwtVerify from '../../utils/jwt'
import noAvatar from '../../assets/images/no-avatar.png'
import { client } from '../../services/client-service'
import iconAddClient from '../../assets/svg/playlist_add.svg'

import './styles.css'
import { Link } from 'react-router-dom'

const DashboardComponent = () => {
    const Crumb = [{
        icon: iconAccount,
        page: 'Clientes'
    }]

    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [status, setStatus] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [currentUser, setCurrentUser] = useState({})

    async function getData() {
        try {
            const result = await client.list()
            const data = await result.json()
            setUser(data.clients)

            setLoading(false)

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
        setCurrentUser(JSON.parse(user))

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
                        <Link to="/create/client">
                            <button>
                                <img src={iconAddClient} alt="botão de criação de clientes" />
                                <p>Novo Cliente</p>
                            </button>
                        </Link>
                        <div className="image-area">
                            <img src={noAvatar} alt="sem foto" />
                        </div>

                        <div className="profile-info">
                            {
                                currentUser ? <><p>{currentUser.username}</p>
                                    <p>{currentUser.email}</p></> : {}
                            }

                        </div>
                    </div>
                </div>
                <div className="dashboard-filter">
                    <h4>Filtrar por:</h4>
                    <div className="col1">

                        <div className="input-area">

                            <input type="text" id="name" placeholder="Nome" />
                            <input type="text" id="company" placeholder="Empresa" />
                        </div>
                        <div className="input-area">
                            <input type="text" id="status" placeholder="Situação" />
                            <input type="text" id="email" placeholder="Email" />

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
