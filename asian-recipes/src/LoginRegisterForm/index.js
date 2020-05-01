import React from "react";
import { Form, Button, Label } from "semantic-ui-react";

export default class LoginRegisterForm extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      username: "",
      action: "Login"
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.action === "Register") {
      this.props.register(this.state);
    } else {
      this.props.login(this.state);
    }
  };

  switchForm = () => {
    if (this.state.action === "Login") {
      this.setState({ action: "Register" });
    } else {
      this.setState({ action: "Login" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <h2>{this.state.action} Here</h2>
        <Form>
          {this.state.action === "Register" && (
            <React.Fragment>
              <Label>Username:</Label>
              <Form.Input
                type="text"
                name="username"
                placeholder="Enter a username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </React.Fragment>
          )}
          <Label>Username:</Label>
          <Form.Input
            type="text"
            name="username"
            placeholder="Enter username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Label>Password:</Label>
          <Form.Input
            type="password"
            name="password"
            placeholder="Enter a password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <Button onClick={this.handleSubmit} type="Submit">
            {this.state.action === "Login" ? "Log In" : "Sign Up"}
          </Button>
        </Form>
        {this.state.action === "Login" ? (
          <p>
            Need an account? Sign up <span onClick={this.switchForm}>here</span>
          </p>
        ) : (
          <p>
            Already have an account? Log in{" "}
            <span onClick={this.switchForm}>here</span>
          </p>
        )}
      </React.Fragment>
    );
  }
}
