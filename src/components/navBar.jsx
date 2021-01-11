import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className='nav'>
        <div className='collapase navbar-collapse'>
          <NavLink className='nav-item nav-link' to='/'>
            Vizz
          </NavLink>
          <NavLink className='nav-item nav-link' to='/movies'>
            Moives
          </NavLink>
          <NavLink className='nav-item nav-link' to='/customers'>
            Customers
          </NavLink>
          <NavLink className='nav-item nav-link' to='/rentals'>
            Rentals
          </NavLink>
        </div>
      </div>
    );
  }
}

export default NavBar;
