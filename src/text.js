<Router>       
    <Routes>
    <Navbar  title="Navebar"/>
    <div className="container">
        <h1>Hello</h1>
          <Route exact path="/about">
            <About />
          </Route>          
          <Route path="/" >
            <TextForm heading="Enter the text to Pramod" />
          </Route>
          
    </div>
    </Routes>
    </Router>
    import {
        BrowserRouter as Router,
        // StaticRouter, // for server rendering
        Route,
        // Link,
        Routes
        // etc.
      } from "react-router-dom";



      
    //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div className="container-fluid">
    //       <Link className="navbar-brand" to="/">{props.title}</Link>
    //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon"></span>
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <Link className="nav-link active" aria-current="page" to="/">Home</Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link className="nav-link" to="/about">About Us</Link>
    //           </li>
              
    //         </ul>
    //         <form className="d-flex" role="search">
    //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    //           <button className="btn btn-primary" type="submit">Search</button>
    //         </form>
    //       </div>
    //     </div>
    //   </nav>


    <CardGroup>
      <Card>
        <Body>
          <Title><Link to='/'>INTRODUCTION</Link></Title>
          <Text>
          Our university is well recognized university in the world with more than 35 departments, above 100 programs and more than 500 institute all over the world. You can find the nearest institute coordinate with us and they are providing the best education ever all over the world. Grab your opportunity soon.
          </Text>
        </Body>
      </Card>
      <Card>
        <Body>
          <Title><Link to='/'>DEPARTMENTS</Link></Title>
          <Text>
          More than 35 departments, with experienced faculty and modern facilities to help you excel. Get admission on our university today and enhance your knowledge with your best faculty. Every department team will monitor individual students with proper guidance. Learn from Us !!
          </Text>
        </Body>
      </Card>
      <Card>
        <Body>
          <Title><Link to='/'>INSTITUTE</Link></Title>
          <Text>
          We have over 500 institute all over the world and every institute are well managed and regularly monitored by university. Choose your best place to learn and choose your best program from our university. Your success and bright future always be on the right university and right program.
          </Text>
        </Body>
      </Card>
    </CardGroup>





import { buildTimeValue } from '@testing-library/user-event/dist/utils';
import React from 'react'
import * as Styled from './HomeStyled';

export default function About() {

  let myStyle={
    color: 'white',
    background:'black',
  }
  return (
    <div className="container my-2" style={myStyle}>
      <h2>About Us</h2>
          <div className="accordion" id="accordionExample">
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingOne">
          <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingTwo">
          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
      <div className="accordion-item" style={myStyle}>
        <h2 className="accordion-header" id="headingThree">
          <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}