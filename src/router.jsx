import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from './Auth';
import Login from "./pages/login";
import AccountDetail from "./pages/account-detail";
import CreateAccount from "./pages/create-account";
import Dashboard from "./pages/dashboard";
import PageNotFound from "./pages/page-not-found";
import CreateClient from "./pages/create-clients";
import CreateProducts from "./pages/create-product";
import Products from "./pages/products";
import { AuthProvider } from "./context/AuthContext";
import Revenues from './pages/revenues';
import Security from './pages/security';
import Information from './pages/information';
import { CurrenteProvider } from './context/UserContext';
const Router = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <CurrenteProvider>
                    <Switch>
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                        <PrivateRoute exact path="/create/account" component={CreateAccount} />
                        <PrivateRoute path="/account/detail" component={AccountDetail} />
                        <PrivateRoute path="/create/client" component={CreateClient} />
                        <PrivateRoute exact path="/create/products" component={CreateProducts} />
                        <PrivateRoute path="/revenues" component={Revenues} />
                        <PrivateRoute path="/security" component={Security} />
                        <PrivateRoute path="/products" component={Products} />
                        <PrivateRoute path="/information" component={Information} />
                        <Route exact path="/" component={Login} />
                        <Route path="*" component={PageNotFound} />
                    </Switch>
                </CurrenteProvider>
            </AuthProvider>
        </BrowserRouter>
    )
}

export default Router
