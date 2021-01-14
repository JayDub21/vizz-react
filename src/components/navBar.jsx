import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className='navbar navbar-expand navbar-light bg-light'>
        <div className='container-fluid'>
          {/* <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button> */}
          <Link className='navbar-brand' to='/'>
            Vizz
          </Link>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
            <div className='navbar-nav'>
              <NavLink className='nav-item nav-link' to='/movies'>
                Movies
              </NavLink>
              <NavLink className='nav-item nav-link' to='/customers'>
                Customers
              </NavLink>
              <NavLink className='nav-item nav-link' to='/rentals'>
                Rentals
              </NavLink>
              <NavLink className='nav-item nav-link' to='/login'>
                Login
              </NavLink>
              <NavLink className='nav-item nav-link' to='/register'>
                Register
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
