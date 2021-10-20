import imgCreateUser from "../../assets/images/create_user_illustrator.png";
import ModalComponet from "../Modal";
import ButtonCompo from "../Button";
import { useState } from "react";
import "./style.css";
import HeaderPageComponent from "../HeaderPage";

const client = {
    name: '',
    surname: '',
    cpf: '',
    cep: '',
    state: '',
    address: '',
    barrio: '',
    nro: '',
    city: '',

}

const CreateUser = () => {


    const [dataForm, setDataForm] = useState({});
    const [hideModal, setHideModal] = useState(false)
    const [success, setsuccess] = useState(true)


    // Recebendo os valores do formularios
    const getDataForm = (event) => {
        const { name, value } = event.target
        setDataForm({ ...dataForm, [name]: value })
    };

    const changeModalHide = () => {
        setHideModal(hide => !hide)
    }

    const changeValue = (valor) => !valor


    // Formulario pronto para ser enviado
    const setForm = (event) => {
        event.preventDefault();

        if (Object.values(dataForm).length !== 9) {
            setsuccess(changeValue)
            setHideModal(changeValue)
        } else {
            setsuccess(changeValue)
            setHideModal(changeValue)
        }




    };

    return (
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
                    <form onSubmit={setForm}>
                        <fieldset className="create-user-form-data">
                            <legend>Dados perssoais</legend>
                            <input
                                onChange={getDataForm}
                                type="text"
                                placeholder="Nome"
                                name="name" />
                            <input
                                onChange={getDataForm}
                                type="text"
                                placeholder="Sobrenome"
                                name="surname"
                            />
                            <input
                                onChange={getDataForm}
                                type="number"
                                placeholder="CPF"
                                name="cpf" />
                        </fieldset>
                        <fieldset>
                            <legend>Dados de endereço</legend>
                            <input
                                onChange={getDataForm}
                                type="text"
                                placeholder="Cep"
                                name="cep" />
                            <input
                                onChange={getDataForm}
                                type="text"
                                placeholder="Estado"
                                name="state"
                            />
                            <input
                                onChange={getDataForm}
                                type="text"
                                placeholder="Cidade"
                                name="city" />
                            <input
                                onChange={getDataForm}
                                type="text"
                                placeholder="Rua"
                                name="address" />
                            <input
                                onChange={getDataForm}
                                type="number"
                                placeholder="Nro"
                                name="nro" />
                            <input
                                onChange={getDataForm}
                                type="text"
                                placeholder="Barrio"
                                name="barrio"
                            />
                        </fieldset>
                        <div className="button-form">
                            <ButtonCompo text="Cadastrar Cliente" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;
