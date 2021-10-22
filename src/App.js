import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login";
import AccountDetail from "./pages/account-detail";
import CreateAccount from "./pages/create-account";
import Dashboard from "./pages/dashboard";
import PageNotFound from "./pages/page-not-found";
import CreateClient from "./pages/create-clients";
import CreateProducts from "./pages/create-product";
import Products from "./pages/products";
import { AuthProvider } from "./context/AuthContext";

function App() {


    return (
        <BrowserRouter>
            <AuthProvider>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route exact path="/create/account" component={CreateAccount} />
                    <Route path="/account/detail" component={AccountDetail} />
                    <Route path="/create/client" component={CreateClient} />
                    <Route exact path="/create/products" component={CreateProducts} />
                    <Route path="/products" component={Products} />
                    <Route exact path="/" component={Login} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default App;
