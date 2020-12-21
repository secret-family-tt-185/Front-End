import React from "react"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Recipes from "./components/Recipes";
import './App.css';
import PrivateRoute from "./utils/PrivateRoute";
import AddRecipe from "./components/AddRecipe";
import EditRecipes from "./components/EditRecipes";







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
  <PrivateRoute exact path="/protected" component={Recipes} />
  <PrivateRoute exact path="/add" component={AddRecipe} />
  <PrivateRoute exact path="/edit" component={EditRecipes} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
