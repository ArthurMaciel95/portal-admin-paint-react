import SideBarComponent from "../../components/SidebarComponent";
import React from 'react'
import CreateUser from "../../components/CreateUserComponet";

const CreateClient  = () => {
    return ( 
    <div className="container">
        <SideBarComponent/>
        <CreateUser/>
    </div> );
}
 
export default CreateClient ;