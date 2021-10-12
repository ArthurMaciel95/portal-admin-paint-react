import React from "react";
import BreadCrumbComponent from "../breadCrumbComponent";
import iconAccountCrumbs from "../../assets/svg/account_circle-1.svg";

import "./styles.css";
const DashboardComponent = () => {
    const Crumb = {
        page: "Clientes",
        icon: iconAccountCrumbs,
    };

    return (
        <main className="dashboard-container">
            <section className="dashboard-header">
                <BreadCrumbComponent crumb={Crumb} />
            </section>
        </main>
    );
};

export default DashboardComponent;
