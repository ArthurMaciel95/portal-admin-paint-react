import React from "react";
import './styles.css'

const BreadCrumbComponent = ({ crumb }) => {
    return (
        <div className="bread-crumbs">
            <object data={crumb.icon} type=""></object>
            <p>{crumb.page}</p>
        </div>
    );
};

export default BreadCrumbComponent;
