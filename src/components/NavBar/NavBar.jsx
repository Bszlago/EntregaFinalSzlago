import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import React from 'react';

const NavBar = () => {
  return (
    <header>
        <Link to="/">
          <h1>Tienda Bufalo</h1>
        </Link>

        <nav>
            <ul>

                <li> 
                    <NavLink to="/categoria/2"> Remeras Negras </NavLink>
                </li>

                <li>  
                    <NavLink to="/categoria/3"> Remeras Alternativas</NavLink>
                </li>

            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar