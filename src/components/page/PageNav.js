import React from "react";
import { NavLink } from "react-router-dom";

function PageNav(props) {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-3'>
      <div className='container'>
        <NavLink to='/' exact className='navbar-brand mr-3'>
          Segovia
        </NavLink>
        <div className='ml-auto'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink to='/' exact className='nav-link'>
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/users' className='nav-link'>
                Users
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
