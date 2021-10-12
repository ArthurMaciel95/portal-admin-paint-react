import React from "react";
import SideBarComponent from "../../components/SidebarComponent";
import "./styles.css";
import DashboardComponent from "../../components/dashboardComponent";

const Login = () => {
    return (
        <>
            <div className="container">
                <SideBarComponent />
                <DashboardComponent />
            </div>
        </>
    );
};

export default Login;
