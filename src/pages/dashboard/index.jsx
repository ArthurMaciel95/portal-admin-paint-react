import React from "react";
import SideBarComponent from "../../components/Sidebar";
import DashboardComponent from '../../components/Dashboard'

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
