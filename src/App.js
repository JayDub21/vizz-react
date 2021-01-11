import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/navBar.jsx';
import Movies from './components/movies';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/notFound';
import './App.css';
import { render } from '@testing-library/react';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className='container'>
        <Switch>
          <Route path='/movies/:id?' component={Movies} />
          <Route path='/customers' component={Customers} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/' exact to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
