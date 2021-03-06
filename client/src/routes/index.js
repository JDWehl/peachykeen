import * as React from "react";
import { Route } from "react-router-dom";
import Profile from '../components/Profile';
import Landing from '../components/Landing';
import Main from '../components/Main';
import Login from '../components/Login';
import About from '../components/About';


const Routes = () => (
  <div>
    <Route path="/" component={Landing} />
    <Route exact path="/" component={Main} />
    <Route exact path="/profile" component={Profile} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/about" component={About} />
  </div>
);

export default Routes;
