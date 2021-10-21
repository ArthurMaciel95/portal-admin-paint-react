import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login/index";
import AccountDetail from "./pages/account-detail";
import CreateAccount from "./pages/create-account";
import Dashboard from "./pages/dashboard";
import PageNotFound from "./pages/page-not-found";
import CreateClient from "./pages/create-clients";
import CreateProducts from "./pages/create-product";
import Products from "./pages/products";


function App() {
    return (
        <BrowserRouter>

            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/create/account" component={CreateAccount} />
                <Route path="/account/detail" component={AccountDetail} />
                <Route path="/create/client" component={CreateClient} />
                <Route path="/create/products" component={CreateProducts} />
                <Route path="/products" component={Products} />
                <Route exact path="/" component={Login} />
                <Route path="*" component={PageNotFound} />
            </Switch>

        </BrowserRouter>
    );
}

export default App;
