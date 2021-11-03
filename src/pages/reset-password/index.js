import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import ErrorMessage from '../../components/ErroMessage'
import { user } from '../../services/user-service'
import LoadingComponent from '../../components/Loading'
import { useHistory } from 'react-router'
import './styles.css'
const ResetPassword = () => {
    const history = useHistory()
    const [errorMessage, setErrorMessage] = useState({ error: false, message: undefined })
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const clearMessage = () => {
        setErrorMessage({ error: false, message: undefined })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        clearMessage()
        setLoading(true)

        if (!password || !repeatPassword) {
            setLoading(false)
            return setErrorMessage({ error: true, message: 'O Campo email não deve estar vazio.' })
        }

        const payload = {
            password,
            repeatPassword
        }
        const result = await user.resetPassword(payload);
        const data = await result.json();

        if (!result) {
            setLoading(false)
            return setErrorMessage({ error: true, message: 'Servidor indisponível no momento, tente mais tarde.' })
        }
        if (result && !data.status) {
            setLoading(false)
            return setErrorMessage({ error: true, message: data.message })
        }
        setLoading(false)
        history.push('/')

    }

    return (
        <>
            {loading && <LoadingComponent />}
            <div className="container-recovery">
                <section className="recovery-container">
                    <img className="logo" src={logo} alt="logo marca da empresa" />
                    <div className="recovery-body">
                        <h3>Crie uma nova senha!</h3>
                        <p>Preencha os campos abaixo para alterar a senha.</p>

                        {errorMessage.error && <ErrorMessage message={errorMessage.message} />}

                        <form action="" onSubmit={handleSubmit}>
                            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" placeholder="Repita Senha" onChange={(e) => setRepeatPassword(e.target.value)} />
                            <button>Mudar senha</button>
                        </form>
                    </div>
                </section>
            </div></>
    )
}

export default ResetPassword
