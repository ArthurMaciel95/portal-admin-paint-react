import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login/index";
import AccountDetail from "./pages/account-detail";
import CreateAccount from "./pages/create-account";
import Dashboard from "./pages/dashboard";
import PageNotFound from "./pages/page-not-found";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/create/account" component={CreateAccount} />
                <Route path="/account/detail" component={AccountDetail} />

                <Route exact path="/*" component={Login} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
