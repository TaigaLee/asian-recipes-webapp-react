import React from "react";
import "./App.css";
import RecipeContainer from "./RecipeContainer";
import LoginRegisterForm from "./LoginRegisterForm";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? <RecipeContainer /> : <LoginRegisterForm />}
      </div>
    );
  }
}
