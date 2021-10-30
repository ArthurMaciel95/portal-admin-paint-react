import React from "react";
import './styles.css'

const BreadCrumbComponent = ({ crumb }) => {
    return (
        <div className="bread-crumbs">
            {
                crumb.map((m, i) => {
                    return <><object key={i} data={m.icon} type=""></object>
                        <p>{m.page}</p></>
                })
            }
        </div>
    );
};

export default BreadCrumbComponent;
