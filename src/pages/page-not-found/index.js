import React from "react";
import "./styles.css";
import Sidebar from '../../components/SidebarComponent'
import PageNot from '../../components/PageNotFountComponent'

const PageNotFound = () => {
    return (
        <div className='container'>
            <Sidebar/>
            <PageNot/>
        </div>
    );
};

export default PageNotFound;
