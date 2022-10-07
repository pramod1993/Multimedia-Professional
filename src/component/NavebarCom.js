import React, {Component} from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Courses from './Courses';
import Instructors from './Instructors';
import Register from './Register';
import logo from '../img/logo.svg'
export default function NavebarCom(props) {
    return(

    <Router>
    <div>
    {/* {props.title} */}
    <Navbar bg="dark" variant={'dark'} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to='/'><img src={logo}  width='200px' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav " className='justify-content-end'>
          <Nav>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/courses'>Courses</Nav.Link>
            <Nav.Link as={Link} to='/instructors'>Instructors</Nav.Link>
            <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
            <Nav.Link as={Link} to='/register' style={{background:'#fd5308', color:'#fff', }}>Register</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />                
        <Route path="/courses" element={<Courses />} />                
        <Route path="/instructors" element={<Instructors />} />                
        <Route path="/register" element={<Register />} />                
      </Routes>
    </div>
    </Router>
    )
}
