import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSeasion } from './redux/user/user.actions';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import CheckoutPage from './Pages/checkout/checkout.component';
import Header from './Components/header/header.component';
import SignInUpPage from './Pages/sign-in-up/sign-in-up.component';

import './App.css';

const App = ({ checkUserSeasion, currentUser }) => {
  useEffect(() => {
    checkUserSeasion();
  }, [checkUserSeasion])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route exact path='/signin' render={() =>
          currentUser ?
            (<Redirect to='/' />)
            :
            (<SignInUpPage />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSeasion: () => dispatch(checkUserSeasion())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);