import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import NavBar from './components/navBar.jsx';
import LoginForm from './components/loginForm';
import Logout from './components/logout';
import RegisterForm from './components/registerForm';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Customers from './components/customers';
import NotFound from './components/notFound';
import ProtectedRoute from './components/common/protectedRoute';
import User from './components/user';
import auth from './services/authService';
import './App.css';

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();

    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className='container'>
          <Switch>
            <Redirect from='/' exact to='/movies' />

            <Route path='/register' component={RegisterForm} />

            <Route path='/login' component={LoginForm} />

            <Route path='/logout' component={Logout} />

            <ProtectedRoute path='/movies/:id' component={MovieForm} />

            <Route
              path='/movies'
              render={(props) => <Movies {...props} user={user} />}
            />

            <ProtectedRoute path='/customers' component={Customers} />

            <ProtectedRoute
              path={user}
              render={(props) => <User {...props} user={user} />}
            />
            <Route path='/not-found' component={NotFound} />

            <Redirect to='/not-found' />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
