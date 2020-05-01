import React from "react";
import { Button, Form, Grid, Message, Segment } from "semantic-ui-react";
import Header from "../Header";

import "../index.css";

export default class LoginForm extends React.Component {
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
        <Header />
        <Grid
          textAlign="center"
          style={{ height: "70vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <header className="LoginRegisterForm-Header">
              <h1>{this.state.action} Here!</h1>
            </header>
            <Form size="large">
              <Segment stacked>
                {this.state.action === "Register" && (
                  <React.Fragment>
                    <Form.Input
                      fluid
                      name="email"
                      icon="mail"
                      value={this.state.email}
                      onChange={this.handleChange}
                      iconPosition="left"
                      placeholder="Email"
                    />
                  </React.Fragment>
                )}
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <Button
                  onClick={this.handleSubmit}
                  type="Submit"
                  color="red"
                  fluid
                  size="large"
                >
                  {this.state.action === "Login" ? "Log In" : "Sign Up"}
                </Button>
              </Segment>
            </Form>
            {this.state.action === "Login" ? (
              <Message>
                Need an account? Register{" "}
                <span className="fake-link" onClick={this.switchForm}>
                  here
                </span>
              </Message>
            ) : (
              <Message>
                Already have an account? Log in{" "}
                <span className="fake-link" onClick={this.switchForm}>
                  here
                </span>
              </Message>
            )}
          </Grid.Column>
        </Grid>
      </React.Fragment>
    );
  }
}
