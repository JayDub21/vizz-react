import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class RegisterForm extends Form {
  state = {
    data: { username: '', password: '', name: '' },
    errors: {},
  };


    schema = {
      username: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required()
        .label('Username'),
      password: Joi.string().required().min(5).label('Password'),
      name: Joi.string().alphanum().min(3).max(30).required().label('Name'),
    };

  doSubmit = () => {
    console.log('Register From Sent');
  };
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password')}
          {this.renderInput('name', 'Name')}
          {this.renderButton('Register')}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
