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

  register = async registerInfo => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/register";

      const registerResponse = await fetch(url, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(registerInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (registerResponse.status === 201) {
        this.setState({
          loggedIn: true
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  login = async loginInfo => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/login";

      const loginResponse = await fetch(url, {
        credentials: "include",
        method: "POST",
        body: JSON.stringify(loginInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (loginResponse.status === 200) {
        this.setState({
          loggedIn: true
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ? (
          <RecipeContainer />
        ) : (
          <LoginRegisterForm login={this.login} register={this.register} />
        )}
      </div>
    );
  }
}
