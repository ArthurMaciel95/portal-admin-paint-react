import React, { useState, useEffect } from "react";
import { useParams, useHistory } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import HeaderPageComponent from '../../components/HeaderPage'
import noAvatar from '../../assets/images/avatar-high.png'
import buffer from "../../utils/buffer";
import LoadingComponent from '../../components/Loading'
import ErroMessageComponent from "../../components/ErroMessage";
import { client } from '../../services/client-service'
import "./styles.css";

const AccountDetail = () => {
    const history = useHistory()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const [photo, setPhoto] = useState()
    const [ErrorMessage, setErrorMessage] = useState({ error: false, message: undefined })
    const MAX_SIZE_IMAGE = 100000
    const { id } = useParams()

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
    async function getuserById() {
        try {
            setLoading(true)
            const result = await client.show(id)

            if (!result) {
                return setErrorMessage({ error: true, message: 'Servidor indisponível no momento!' });
            }
            const data = await result.json()
            setLoading(false)
            console.log(data)
            setUser(data.client)
            setPhoto(base64decoded(data.client.photo.data))

        } catch (e) {
            console.log(e)
        }
    }

    const base64decoded = (image) => {
        return buffer.decoded(image, 'utf-8')
    }
    const deleteClient = async () => {
        setLoading(true)
        const result = await client.delete(id)
        setLoading(false)
        if (!result) {
            return setErrorMessage({ error: true, message: 'Servidor indisponível no momento!' });
        }
        if (result && !result.status) {
            return setErrorMessage({ error: true, message: result.message });
        }
        const data = await result.json();

        if (data.status) {
            history.push('/dashboard')
        }
        console.log(data)
    }

    useEffect(() => {
        getuserById()
    }, [])

    const product = [
        {
            id: '000029948272',
            product: 'Pintura Premium',
            price: 'R$1236.99',
            updated_at: '10/11/2021 12:10:45'

        },
        {
            id: '000029948272',
            product: 'Pintura Premium',
            price: 'R$1236.99',
            updated_at: '10/11/2021 12:10:45'

        },
        {
            id: '000029948272',
            product: 'Pintura Premium',
            price: 'R$1236.99',
            updated_at: '10/11/2021 12:10:45'

        },
        {
            id: '000029948272',
            product: 'Pintura Premium',
            price: 'R$1236.99',
            updated_at: '10/11/2021 12:10:45'

        },
        {
            id: '000029948272',
            product: 'Pintura Premium',
            price: 'R$1236.99',
            updated_at: '10/11/2021 12:10:45'

        },
    ]


    return <>
        {loading && <LoadingComponent />}
        <div className="container">
            <Sidebar />
            <section className="detail-container">
                <HeaderPageComponent />
                <div className="detail-header">
                    <div className="detail-card">
                        <p>Cliente:</p>
                        {ErrorMessage.error && <ErroMessageComponent message={ErrorMessage.message} />}
                        <div className="detail-card-warp">
                            <div className="image-area-detail">
                                <img src={!photo ? noAvatar : photo} alt="foto de perfil do cliente" />
                                <input type="file" id="file-input" hidden name="photo" onChange={(e) => { uploadImage(e) }} />
                                <label htmlFor="file-input">
                                    Trocar foto
                                </label>
                                <p></p>

                            </div>
                            <div className="info-detail">
                                <input type="text" name="name" id="" placeholder="Nome" value={user && user.username} />
                                <input type="text" name="birth_date" id="" placeholder="Data de nascimento" value={user && user.birth_date} />

                                <select name="payment_method" id="">
                                    <option selected disabled hidden value={user && user.payment_method}>Forma de pagamento</option>
                                    <option value="debit">Débito</option>
                                    <option value="credit">Crédito</option>
                                    <option value="money">Dinheiro</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <p>Endereço:</p>
                        <div className="detail-card-warp">
                            <div className="info-detail">
                                <input type="text" name="cep" id="" placeholder="Cep" value={user && user.address.cep} />
                                <input type="text" name="city" id="" placeholder="Cidade" value={user && user.address.city} />
                                <input type="text" name="district" id="" placeholder="Bairro" value={user && user.address.district} />
                                <input type="text" name="additional_infomation" id="" placeholder="Nome" value={user && user.address.additional_infomation} />
                            </div>
                            <div className="info-detail">

                                <select name="status" id="">
                                    <option selected disabled hidden value={user && user.status}>Situação</option>
                                    <option value="peding">Pendente</option>
                                    <option value="late">Atrasado</option>
                                    <option value="received">Recebido</option>
                                </select>

                                <input type="text" name="name" id="" placeholder="Nome" value={user && user.address.additional_infomation} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="client-product-buy">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Produto</th>
                                <th>Preço</th>
                                <th>Atualizado em</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((m) => {
                                return <tr>
                                    <td><p>{m.id}</p></td>
                                    <td><p>{m.product}</p></td>
                                    <td><p>{m.price}</p></td>
                                    <td><p>{m.updated_at}</p></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="footer-account-detail">
                    <button className="btn-delete" onClick={(e) => deleteClient()}>
                        Deletar Cliente
                    </button>
                    <button className="btn-save">
                        Salvar Alterações
                    </button>

                </div>
            </section>
        </div>
    </>;
};

export default AccountDetail;
