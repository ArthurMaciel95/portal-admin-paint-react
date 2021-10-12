import React from "react";
import "./styles.css";
import Sidebar from '../../components/SidebarComponent'
import RegisterComponet from '../../components/RegisterComponet'

const CreateAccount = () => {
    return (
    <div className="container">
        <Sidebar/>
        <RegisterComponet/>
    </div>
    );
};

export default CreateAccount;
