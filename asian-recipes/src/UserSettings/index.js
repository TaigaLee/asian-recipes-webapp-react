import React from "react";

export default class UserSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInUser: this.props.loggedInUser
    };
  }

  render() {
    return (
      <button onClick={() => this.props.deleteUser(this.state.loggedInUser.id)}>
        Delete user
      </button>
    );
  }
}
