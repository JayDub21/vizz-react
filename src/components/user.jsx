import React, { Component } from 'react';

class User extends Component {
  state = {};

  render() {
    const { user } = this.props;

    if (!user) return null;
    else return <h1> {user.name}'s Page Under Construction.</h1>;
  }
}

export default User;
