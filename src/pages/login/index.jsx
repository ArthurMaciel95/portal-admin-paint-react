import React from "react";
import SideBarLogin from "../../components/sideBarLogin";
import "./styles.css";
import LoginComponent from "../../components/Login";


const Login = () => {



    return (

        <div className="container">
            <SideBarLogin />
            <LoginComponent />
        </div>

    );
};

export default Login;
