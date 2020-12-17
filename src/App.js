import React from "react"
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Recipes from "./components/Recipes";
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";





function App() {
  return (
    <Router>
    <div>
      <h1>Secret Family Recipes Cookbook</h1>
      <Link to="/">Login</Link> 
      <Link to="/register">Register</Link> 
      <Link to="/protected">See Recipes</Link> 
      <Switch>
  <Route exact path="/" render={() => <LoginForm/>} /> 
  <Route path="/register" render={() => <RegisterForm/>} />
  <Route path="/protected" component={Recipes} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
