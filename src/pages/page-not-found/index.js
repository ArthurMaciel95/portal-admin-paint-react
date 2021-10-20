import React from "react";
import "./styles.css";
import Sidebar from '../../components/Sidebar'
import PageNot from '../../components/PageNotFound'

const PageNotFound = () => {
    return (
        <div className='container'>
            <Sidebar />
            <PageNot />
        </div>
    );
};

export default PageNotFound;
