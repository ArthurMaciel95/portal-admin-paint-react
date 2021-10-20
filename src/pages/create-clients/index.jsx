import SideBarComponent from "../../components/Sidebar";
import React from 'react'
import CreateUser from "../../components/CreateClient";

const CreateClient = () => {
    return (
        <div className="container">
            <SideBarComponent />
            <CreateUser />
        </div>);
}

export default CreateClient;