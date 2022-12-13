import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/logo.png'
import '../styles/navbar.css'

const Navbarr = () => {
  return (
    <div className='navbar' >

      <div className='logo-title'>

          <div className='logo-container'>
            <img src={logo} alt="ipaladin-logo" />

          </div>

          <div className='title-links'>
            <ul>
              <li><a href="">Company</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">What is iPaladin</a></li>
              <li><a href="">iPaladin Clients</a></li>
            </ul>
          </div>


      </div>

      <div className='nav-btn'>
        <a href="" className='sign-in'>Sign In</a>
        <a href="" className='contact-us'>Contact Us</a>
      </div>
  

    </div>
  )
}

export default Navbarr