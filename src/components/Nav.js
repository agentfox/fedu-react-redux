import React, { Component } from 'react'
import { Link, NavLink } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                  <Link className="navbar-brand js-scroll-trigger" to="/">Koala News</Link>
                  
                  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">


                      <li className="nav-item mr-3">
                        <NavLink to="/news">News</NavLink>
                      </li>
                      <li className="nav-item mr-3 nav-home">
                        <NavLink to="/about">About</NavLink>
                      </li>
                      <li className="nav-item mr-3">
                        <NavLink to="/contact">Contact</NavLink>
                      </li>
                      <li className="nav-item mr-3 btn-signin">
                        <NavLink to="/registration">Sign In</NavLink>
                      </li>

                    </ul>
                  </div>
                </div>
              </nav>
      </div>
    )
  }
}
