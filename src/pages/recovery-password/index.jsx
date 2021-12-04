import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import ErrorMessage from '../../components/ErroMessage'
import SuccessMessage from '../../components/SuccessMessage'
import { user } from '../../services/user-service'
import LoadingComponent from '../../components/Loading'
import './styles.css'
const RecoveryPassword = () => {
    const [errorMessage, setErrorMessage] = useState({ error: false, message: undefined })
    const [successMessage, setSuccessMessage] = useState({ success: false, message: undefined })
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)

    const clearMessage = () => {
        setErrorMessage({ error: false, message: undefined })
        setSuccessMessage({ success: false, message: undefined })
    }
    const payload = {
        email
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearMessage()
        setLoading(true)

        if (!email) {
            setLoading(false)
            return setErrorMessage({ error: true, message: 'O Campo email não deve estar vazio.' })
        }
        const result = await user.forgetPassword(payload).then(data => data.json()).catch(e => console.log(e));


        if (!result) {
            setLoading(false)
            return setErrorMessage({ error: true, message: 'Servidor indisponível no momento' })
        }
        if (result && !result.status) {
            setLoading(false)
            return setErrorMessage({ error: true, message: result.message })
        }


        setLoading(false)
        setSuccessMessage({ success: true, message: 'Email enviado com sucesso!' })



    }


    return (
        <>
            {loading && <LoadingComponent />}
            <div className="container-recovery">
                <section className="recovery-container">
                    <img className="logo" src={logo} alt="logo marca da empresa" />
                    <div className="recovery-body">
                        <h3>Esqueceu sua senha? <br />
                            Vamos recuperar!</h3>
                        <p>Por favor, digite seu e-mail para rebeber um link com instruçoes.</p>
                        <p>Lembrou sua senha? <Link to="/">conecte-se</Link></p>
                        {errorMessage.error && <ErrorMessage message={errorMessage.message} />}
                        {successMessage.success && <SuccessMessage message={successMessage.message} />}
                        <form action="" onSubmit={handleSubmit}>
                            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            <button>Enviar</button>
                        </form>
                    </div>
                </section>
            </div></>
    )
}

export default RecoveryPassword
