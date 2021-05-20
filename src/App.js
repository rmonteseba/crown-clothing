import React from 'react';
import {Route} from "react-router-dom";
import {Switch} from 'react-router-dom'
import './App.scss';
import {Homepage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSingUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/shop" component={ShopPage}/>
                <Route path="/signin" component={SignInAndSingUpPage}/>
            </Switch>
        </div>
    );
}

export default App;
