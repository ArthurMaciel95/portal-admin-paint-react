import React from "react";
import SideBarComponent from "../../components/SidebarComponent";
import DashboardComponent from '../../components/DashboardComponent'

import "./styles.css";

const Dashboard = () => {



    return (
        <div className="container">
            <SideBarComponent />
            <DashboardComponent />
        </div>
    )
};

export default Dashboard;
