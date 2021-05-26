import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import './App.scss';
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import Header from "./components/header/header.component";
import SignInAndSingUpPage from "./pages/sign-in-and-sing-up/sign-in-and-sing-up.component";

import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";

class App extends React.Component {

    componentDidMount() {
        const {setCurrentUser} = this.props
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapshot => setCurrentUser({id: snapshot.id, ...snapshot.data()}))
            } else {
                setCurrentUser(userAuth)
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth()
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route exact path="/checkout" component={CheckoutPage}/>
                    <Route exact path="/signin"
                           render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInAndSingUpPage/>)}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({currentUser: selectCurrentUser})
const mapDispatchToProps = (dispatch) => ({setCurrentUser: user => dispatch(setCurrentUser(user))})

export default connect(mapStateToProps, mapDispatchToProps)(App);
