import React from "react";
import "./styles.css";
import Sidebar from '../../components/Sidebar'
import RegisterComponet from '../../components/Register'

const CreateAccount = () => {
    return (
        <div className="container">
            <Sidebar />
            <RegisterComponet />
        </div>
    );
};

export default CreateAccount;
