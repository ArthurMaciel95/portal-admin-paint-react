import React from 'react'
import Avatar from '../../assets/images/avatar2.png'
import Avatar1 from '../../assets/images/avatar1.png'
import IconAccountDetail from '../../assets/svg/launch.svg'
import ButtonComponent from '../ButtonComponent'
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

                {/*  {
                    data.map(item => {
                        return <tr>
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
                                <span className="circle-status-yellow"></span>
                                <p>{item.status}</p>
                            </td>
                            <td>
                                <p>{item.created_at}</p>
                            </td>
                            <td>
                                <p>{item.updated_at}</p>
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
                    })
                } */}


            </tbody>
            <tfoot>
                <div className="pagination">

                </div>
            </tfoot>
        </table>
    )
}

export default TableComponent
