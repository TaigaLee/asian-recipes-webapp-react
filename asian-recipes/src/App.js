import React from "react";
import "./App.css";
import RecipeContainer from "./RecipeContainer";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false
    };
  }

  render() {
    return <RecipeContainer />;
  }
}
