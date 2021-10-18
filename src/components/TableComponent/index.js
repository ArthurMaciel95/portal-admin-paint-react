import React from 'react'
import { formatDate } from '../../utils/mask'
import Avatar1 from '../../assets/images/no-avatar.png'
import IconAccountDetail from '../../assets/svg/launch.svg'
import ButtonComponent from '../ButtonComponent'
import './styles.css'
const TableComponent = ({ data, tableHeaderNames }) => {


    return (
        <table>
            <thead>
                <tr>

                    {
                        tableHeaderNames.map(headerTable => {
                            return <th>{headerTable}</th>
                        })
                    }
                </tr>
            </thead>
            <tbody>

                {
                    data ? data.map(item => {
                        return <tr key={item._id}>
                            <td className="image-area">
                                <img src={Avatar1} alt="" />
                            </td>
                            <td>
                                <p>{item.username}</p>
                            </td>
                            <td>
                                <p>{item.email}</p>
                            </td>
                            <td className="status-area">
                                {item.status === 'pending' ? <span className="circle-status-yellow"></span> : ''}
                                {item.status === 'received' ? <span className="circle-status-green"></span> : ''}
                                {item.status === 'late' ? <span className="circle-status-red"></span> : ''}
                                <p>{item.status}</p>
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
                            <td>
                                <p>{item.payment_method}</p>
                            </td>
                            <td>

                                <ButtonComponent type="submit" btnDetail="true">
                                    {<object type="image/svg+xml" data={IconAccountDetail}></object>}
                                </ButtonComponent>
                            </td>
                        </tr>
                    }) : ''
                }


            </tbody>
            <tfoot>
                <div className="pagination">

                </div>
            </tfoot>
        </table>
    )
}

export default TableComponent
