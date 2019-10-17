import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import Header from './Components/header/header.component';
import SignInUpPage from './Pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utils';
import './App.css';

class App extends React.Component{
  constructor() {
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path='/signin' component={SignInUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;