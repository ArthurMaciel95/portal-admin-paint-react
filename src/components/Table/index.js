import React from 'react';
import { Link } from 'react-router-dom'
import { formatDate } from '../../utils/mask';
import Avatar1 from '../../assets/images/no-avatar.png';
import IconAccountDetail from '../../assets/svg/launch.svg';
import ButtonComponent from '../Button';
import IconDollar from '../../assets/svg/ic_outline-payments.svg';
import IconCreditCard from '../../assets/svg/credit_card.svg'
import IconArrowLeft from '../../assets/svg/arrow_back_ios-1.svg'
import IconArrowRight from '../../assets/svg/arrow_back_ios.svg'
import './styles.css';
import buffer from '../../utils/buffer';
import SkeletonTable from '../skeletonTable'
const TableComponent = ({ data, tableHeaderNames }) => {

    const imageDecoded = (image) => {
        return buffer.decoded(image, 'utf-8')
    }
    console.log(data)
    return (
        <>
            <table>
                <thead>
                    <tr>

                        {
                            tableHeaderNames.map((headerTable, i) => {
                                return <th key={i} className="table-row">{headerTable}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>

                    {
                        data ? data.map(item => {
                            return <tr key={item._id}>
                                <td className="image-area">
                                    {!item.photo ? <img src={Avatar1} alt="" /> : <img src={imageDecoded(item.photo.data)} alt="" />}
                                </td>
                                <td>
                                    <p>{item.username}</p>
                                </td>
                                <td>
                                    <p>{item.email}</p>
                                </td>
                                <td className="status-area">

                                    {item.status === 'pending' && <span className="circle-status-yellow"></span>}
                                    {item.status === 'received' && <span className="circle-status-green"></span>}
                                    {item.status === 'late' && <span className="circle-status-red"></span>}

                                    <p>
                                        {item.status === 'pending' && 'Pendente'}
                                        {item.status === 'received' && 'Recebido'}
                                        {item.status === 'late' && 'Atrasado'}

                                    </p>
                                </td>
                                <td>
                                    <p>{formatDate(item.created_at)}</p>
                                </td>
                                <td>
                                    <p>{formatDate(item.updated_at)}</p>
                                </td>
                                <td>
                                    <p>R$1.872,02</p>
                                </td>
                                <td className="pay-area">
                                    <span>
                                        {item.payment_method === 'credit' && <object className="icon-pay-method" data={IconCreditCard}></object>}
                                        {item.payment_method === 'debit' && <object className="icon-pay-method" data={IconCreditCard}></object>}
                                        {item.payment_method === 'money' && <object className="icon-pay-method" data={IconDollar}></object>}
                                    </span>
                                    <p>
                                        {item.payment_method === 'credit' && 'Cr??dito'}
                                        {item.payment_method === 'debit' && 'D??bito'}
                                        {item.payment_method === 'money' && 'Dinheiro'}
                                    </p>
                                </td>
                                <td>

                                    <Link to={'/client/' + item._id}>
                                        <ButtonComponent type="submit" btnDetail="true">
                                            {<object type="image/svg+xml" data={IconAccountDetail}></object>}
                                        </ButtonComponent>
                                    </Link>
                                </td>
                            </tr>
                        }) : <SkeletonTable />
                    }


                </tbody>

            </table>
            <div className="pagination">

                <div>
                    <p>Item por P??gina</p>
                    <select name="" id="">
                        <option value="10">10</option>
                        <option value="10">50</option>
                        <option value="10">100</option>
                    </select>
                </div>
                <div className="change-page">
                    <p>P??gina 1 de 10</p>
                    <span>
                        <object data={IconArrowRight} type=""></object>
                        <object data={IconArrowLeft} type=""></object>
                    </span>
                </div>

            </div>
        </>
    )
}

export default TableComponent
