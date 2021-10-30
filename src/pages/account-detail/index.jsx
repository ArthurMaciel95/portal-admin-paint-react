import React, { useState, useEffect } from "react";
import Sidebar from '../../components/Sidebar'
import HeaderPageComponent from '../../components/HeaderPage'
import noAvatar from '../../assets/images/avatar-high.png'
import LoadingComponent from '../../components/Loading'
import "./styles.css";

const AccountDetail = () => {
    const [loading, setLoading] = useState(true)

    setTimeout(() => {
        setLoading(false)
    }, 2000);
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


    useEffect(() => {

    }, [])

    return <>
        {loading && <LoadingComponent />}
        <div className="container">
            <Sidebar />
            <section className="detail-container">
                <HeaderPageComponent />
                <div className="detail-header">
                    <div className="detail-card">
                        <p>Cliente:</p>
                        <div className="detail-card-warp">
                            <div className="image-area-detail">
                                <img src={noAvatar} alt="foto de perfil do cliente" />
                                <input type="file" name="photo" />
                            </div>
                            <div className="info-detail">
                                <input type="text" name="name" id="" placeholder="Nome" />
                                <input type="text" name="birth_date" id="" placeholder="Data de nascimento" />
                                <input type="text" name="payment_method" id="" placeholder="Metodo de pagamento " />
                            </div>
                        </div>
                    </div>
                    <div className="detail-card">
                        <p>Endereço:</p>
                        <div className="detail-card-warp">
                            <div className="info-detail">
                                <input type="text" name="cep" id="" placeholder="Cep" />
                                <input type="text" name="city" id="" placeholder="Cidade" />
                                <input type="text" name="district" id="" placeholder="Bairro" />
                                <input type="text" name="additional_information" id="" placeholder="Nome" />
                            </div>
                            <div className="info-detail">

                                <input type="text" name="status" id="" placeholder="Situação" />
                                <input type="text" name="name" id="" placeholder="Nome" />
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
            </section>
        </div>
    </>;
};

export default AccountDetail;
