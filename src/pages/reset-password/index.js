import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import ErrorMessage from '../../components/ErroMessage'
import { user } from '../../services/user-service'
import LoadingComponent from '../../components/Loading'
import { useHistory, useParams } from 'react-router-dom'
import './styles.css'
import buffer from '../../utils/buffer'
import SuccessMessage from '../../components/SuccessMessage'
const ResetPassword = () => {
    const history = useHistory()
    const { token } = useParams()

    const [errorMessage, setErrorMessage] = useState({ error: false, message: undefined })
    const [successMessage, setSuccessMessage] = useState({ success: false, message: undefined });
    const [password, setPassword] = useState('')
    const [repeat_password, setRepeatPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const clearMessage = () => {
        setErrorMessage({ error: false, message: undefined })

    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        clearMessage()
        setLoading(true)

        if (!password || !repeat_password) {
            setLoading(false)
            return setErrorMessage({ error: true, message: 'O Campo email não deve estar vazio.' })
        }

        let email = (buffer.decoded(buffer.decoded(token))).split(':')[0].trim()

        const payload = {
            password,
            repeat_password,
            email
        }
        const result = await user.resetPassword(payload);

        if (!result) {
            setLoading(false)
            return setErrorMessage({ error: true, message: 'Servidor indisponível no momento, tente mais tarde.' })
        }

        const data = await result.json();

        if (result && !data.status) {
            setLoading(false)
            return setErrorMessage({ error: true, message: data.message })
        }
        setLoading(false)

        setSuccessMessage({ success: true, message: 'Senha alterada com sucesso.' })
        history.push('/')

    }

    useEffect(() => {
        const tokenVerify = async () => {
            const result = await user.resetPasswordTokenVerify(token);
            console.log(token)
            const data = await result.json();
            console.log(result, data)
            if (!result || !data?.status) {
                history.push('/forgetpassword')
            }
        }
        tokenVerify()
    }, [])

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
                        {successMessage.success && <SuccessMessage message={successMessage.message} />}
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
