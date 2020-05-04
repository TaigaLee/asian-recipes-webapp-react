import React from "react";
import "./App.css";
import RecipeContainer from "./RecipeContainer";
import LoginRegisterForm from "./LoginRegisterForm";
import Footer from "./Footer";
import Header from "./Header";
import UserSettings from "./UserSettings";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loggedIn: false,
      loggedInUser: "",
      viewingUserSettings: false
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

      const registerResponseJson = await registerResponse.json();

      if (registerResponse.status === 201) {
        this.setState({
          loggedIn: true,
          loggedInUser: registerResponseJson.data
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

      const loginResponseJson = await loginResponse.json();

      if (loginResponse.status === 200) {
        this.setState({
          loggedIn: true,
          loggedInUser: loginResponseJson.data
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  logout = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "/api/v1/users/logout";

      const logoutResponse = await fetch(url, {
        credentials: "include"
      });

      if (logoutResponse.status === 200) {
        this.setState({
          loggedIn: false
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

  viewingUserSettings = () => {
    if (this.state.viewingUserSettings === false) {
      this.setState({
        viewingUserSettings: true
      });
    } else {
      this.setState({
        viewingUserSettings: false
      });
    }
  };

  deleteUser = async idOfUserToDelete => {
    const url =
      process.env.REACT_APP_API_URL + "/api/v1/users/" + idOfUserToDelete;

    try {
      const deleteUserResponse = await fetch(url, {
        credentials: "include",
        method: "DELETE"
      });

      const deleteUserJson = await deleteUserResponse.json();

      if (deleteUserResponse.status === 200) {
        this.setState({
          currentUser: "",
          loggedIn: false
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
          <div>
            <Header
              logout={this.logout}
              loggedIn={this.state.loggedIn}
              viewingUserSettings={this.viewingUserSettings}
            />
            {this.state.viewingUserSettings === true && (
              <UserSettings
                loggedInUser={this.state.loggedInUser}
                deleteUser={this.deleteUser}
              />
            )}
            <RecipeContainer loggedInUser={this.state.loggedInUser} />
          </div>
        ) : (
          <LoginRegisterForm login={this.login} register={this.register} />
        )}
        <Footer />
      </div>
    );
  }
}
