import React, { Component } from 'react';

class LoginForm extends Component {
  state = {
    account: { username: '', password: '' },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };
  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };
  render() {
    const { account } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='from-group'>
            <label htmlFor='username'>Username</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              name='username'
              id='username'
              type='text'
              className='form-control'
            />
          </div>
          <div className='from-group'>
            <label htmlFor='password'>Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              id='password'
              name='password'
              type='text'
              className='form-control'
            />
          </div>
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
