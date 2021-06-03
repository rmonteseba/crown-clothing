import React, {useEffect} from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import './App.scss';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSingUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component";

import {connect} from "react-redux";

import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import {checkUserSession} from "./redux/user/user.actions";

const App = ({currentUser, checkUserSession}) => {

    useEffect(() => checkUserSession(), [checkUserSession])

    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route path="/shop" component={ShopPage}/>
                <Route exact path="/checkout" component={CheckoutPage}/>
                <Route exact path="/signin"
                       render={() => currentUser ? (<Redirect to="/"/>) : (<SignInAndSingUpPage/>)}/>
            </Switch>
        </div>
    );

}

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser})
const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
