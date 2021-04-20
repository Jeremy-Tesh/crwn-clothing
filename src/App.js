import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";
import "./App.css";
import SignIn from "./components/sign-in/sign-in.component";
import SignInAndSignUp from "./components/pages/sign-in and sign-up/sign-in-and-sign-out.components";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unscbscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={SignIn} />
          <Route
            exact
            path="/sign-in-and-sign-up"
            component={SignInAndSignUp}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
