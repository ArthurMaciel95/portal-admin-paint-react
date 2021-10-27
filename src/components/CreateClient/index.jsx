import imgCreateUser from "../../assets/images/create_user_illustrator.png";
import ModalComponet from "../Modal";
import { useState } from "react";
import "./style.css";
import HeaderPageComponent from "../HeaderPage";
import ButtonComponent from "../Button";
import noAvatar from '../../assets/images/avatar-high.png'
import { client } from '../../services/client-service';
import LoadingComponent from '../Loading/index';
import { useHistory } from "react-router";
import ErroMessageComponent from '../ErroMessage'


const CreateUser = () => {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [cpf, setCpf] = useState('')
    const [cep, setCep] = useState('')
    const [state, setState] = useState('')
    const [district, setDistrict] = useState('')
    const [city, setCity] = useState('')
    const [status, setStatus] = useState('')
    const [company, setCompany] = useState('')
    const [additional_infomation, setAdditionalInfomation] = useState('')
    const [payment_method, setPaymentMethod] = useState('')
    const [birth_date, setBirthdate] = useState('')
    const [photo, setPhoto] = useState('')
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState({ error: false, message: undefined })
    const [hideModal, setHideModal] = useState(false)
    const [success, setsuccess] = useState(true)
    const MAX_SIZE_IMAGE = 100000

    const uploadImage = async (e) => {
        let file = e.target.files[0];
        if (!isFormatAllowed(file)) return setErrorMessage({ error: true, message: 'Formato de image não permitido' });
        if (!isSizeAllowed(file)) return setErrorMessage({ error: true, message: 'O tamanho da imagem não pode passar de 100kb' });
        const base64 = await imageToBase64(file);
        setPhoto(base64)
    }
    const isSizeAllowed = (file) => file.size < MAX_SIZE_IMAGE;

    const isFormatAllowed = (file) => {
        const format = file.type;
        const allowed = ['image/jpg', 'image/png', 'image/jpeg']
        const isAllowed = allowed.some(type => type === format)
        return isAllowed;
    }
    const imageToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file)
            fileReader.onload = (() => {
                resolve(fileReader.result)
            })
            fileReader.onerror = (error => {
                reject(error)
            })
        })
    }

    const handlerSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        let payload = {
            photo,
            email,
            username,
            cpf,
            state,
            birth_date,
            payment_method,
            status,
            address: {
                cep,
                district,
                city,
                additional_infomation
            },
            company
        }
        if (!Object.keys(payload).some(item => item === '')) {
            setLoading(false)
            return setErrorMessage({ error: true, message: 'Os campos não podem estar vazios' })
        }

        const result = await client.create(payload).then(data => data.json()).catch(e => console.error(e))
        setLoading(false)
        if (!result) {
            setErrorMessage({ error: true, message: 'Servidor indiponível no momento.' })
        }
        if (result && !result.status) {
            return setErrorMessage({ error: true, message: result.message });
        }
        setsuccess(true)
    }
    const changeModalHide = () => {
        setHideModal(hide => !hide)
    }
    return (
        <>
            {loading && <LoadingComponent />}
            <div className="create-user-container">
                <ModalComponet
                    text={success ? "Cliente cadastrado com sucesso" : "Error ao tentar Cadastrar Cliente"}
                    hide={hideModal}
                    functionM={changeModalHide}
                    success={success}
                />
                <HeaderPageComponent />

                <div className="create-user-card">
                    <div className="create-user-card-img">
                        <img src={imgCreateUser} alt="" />
                    </div>
                    <div className="create-user-card-description">
                        <h2>Cadastro de cliente</h2>
                        <form onSubmit={handlerSubmit} >
                            <section>
                                <div className="image-area">
                                    {!photo ? <img src={noAvatar} alt="avatar" /> : <img src={photo} alt="avatar" width="200px" height="200px" />}
                                </div>
                                <input type="file" name="photo" accept="image/*,capture=camera" onChange={(e) => uploadImage(e)} />
                            </section>
                            {errorMessage.error && <ErroMessageComponent message={errorMessage.message} />}
                            <fieldset className="create-user-form-data">
                                <legend>Dados perssoais</legend>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    type="text"
                                    placeholder="Email"
                                    name="email" />
                                <input
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    type="text"
                                    placeholder="Nome"
                                    name="username" />

                                <input
                                    onChange={(e) => setCpf(e.target.value)}
                                    value={cpf}
                                    type="number"
                                    placeholder="CPF"
                                    name="cpf" />
                                <input
                                    onChange={(e) => setBirthdate(e.target.value)}
                                    value={birth_date}
                                    type="text"
                                    placeholder="Data de nascimento"
                                    name="birth_date" />
                            </fieldset>
                            <fieldset>
                                <legend>Dados de endereço</legend>
                                <input
                                    onChange={(e) => setCep(e.target.value)}
                                    value={cep}
                                    type="text"
                                    placeholder="Cep"
                                    name="cep" />
                                <input
                                    onChange={(e) => setState(e.target.value)}
                                    value={state}
                                    type="text"
                                    placeholder="Estado"
                                    name="state"
                                />
                                <input
                                    onChange={(e) => setStatus(e.target.value)}
                                    value={status}
                                    type="text"
                                    placeholder="Situação"
                                    name="status"
                                />
                                <input
                                    onChange={(e) => setCity(e.target.value)}
                                    value={city}
                                    type="text"
                                    placeholder="Cidade"
                                    name="city" />
                                <input
                                    onChange={(e) => setDistrict(e.target.value)}
                                    value={district}
                                    type="text"
                                    placeholder="Barrio"
                                    name="district"
                                />
                                <input
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    value={payment_method}
                                    type="text"
                                    placeholder="Metodo de Pagamento"
                                    name="payment_method"
                                />
                                <input
                                    onChange={(e) => setCompany(e.target.value)}
                                    value={company}
                                    type="text"
                                    placeholder="Companhia"
                                    name="company"
                                />
                                <input
                                    onChange={(e) => setAdditionalInfomation(e.target.value)}
                                    value={additional_infomation}
                                    type="text"
                                    placeholder="Informação adicional"
                                    name="additional_infomation"
                                />
                            </fieldset>
                            <div className="button-form">
                                <ButtonComponent btnDetail={false} value="Criar Cliente" text="Cadastrar Cliente" type="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div></>
    );
};

export default CreateUser;
