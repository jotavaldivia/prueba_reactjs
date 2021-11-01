import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import IconCart from '../CartWidget/CartWidget.js'
import './Navbar.css'
function NavBar({ logo }) {
  return (
    <div>
    <nav className="navbar">
      <div className="containerLogo">
      <img src={logo} width="250px" />
      </div>

      <div className="containerItems">
      <div className="containerMenu">
        <ul>
          <li>Menu 1</li>
          <li>Menu 2</li>
          <li>Menu 3</li>
          <li>Menu 4</li>
        </ul>
        </div>
        <div className="iconCartMobile">
            <IconCart></IconCart>

          </div>
        
     </div>
    </nav>
    </div>
  )
}

export default NavBar
