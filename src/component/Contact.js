import React, { Component } from 'react'
import * as Styled from './ContactStyled';
import aboutheding from '../img/aboutheding.jpg';
import Form from 'react-bootstrap/Form';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export default class Contact extends Component {

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs.sendFrom()
  // }
  render() {
    return (
      <div>
        <Styled.AboutHeder>
          <Styled.over/>
          <img src={aboutheding}/>
          <Styled.overtext>
            <h1>Contact Us</h1>
            <Styled.link>
              <ul>
                <li><a href='/'>Home</a></li>
                <li>/</li>
                <li>Contact Us</li>
              </ul>
            </Styled.link>
          </Styled.overtext>
        </Styled.AboutHeder>


        <Styled.row>
          <div className='container'>
            <Styled.row>
              <Styled.contactus>
                <Form>  
                  <Form.Group  style={{padding:'10px 7px',}}>
                  <label>Your Name</label>
                  <input type='text' name='name' className='form-control'/>
                  </Form.Group>

                  <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Email</label>
                  <input type='Email' name='Email' className='form-control'/>
                  </Form.Group>

                  <Form.Group  style={{padding:'10px 7px',}}>
                  <label>Your Subject</label>
                  <input type='Subject' name='Subject' className='form-control'/>
                  </Form.Group>

                  <Form.Group style={{padding:'10px 7px',}}>
                  <label>Your Message</label>
                  <textarea name='Messeges' rows='4' className='form-control'/>
                  </Form.Group>
                  <input type='submit' className='btn btn-primary submit' value='Send'/>
                </Form>
              </Styled.contactus>
              <Styled.map>
              <iframe className="gmap_iframe"  scrolling="yes" src="https://maps.google.com/maps?width=100%&amp;height=100%&amp;hl=en&amp;q=susthu kumar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
             </Styled.map>
            </Styled.row>
          </div>
        </Styled.row>
      </div>
    )
  }
}
// export default GoogleApiWrapper({
//   apiKey: ('YOUR_GOOGLE_API_KEY_GOES_HERE')
// })