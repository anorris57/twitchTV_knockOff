import React, { Component } from 'react';
import Keygapi from './Keygapi';
//initializes library
class GoogleAuth extends Component {
  
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init ({
        Keygapi
      })
    });
  }
  render() {

    return (
      <div>
        GoogleAuth
      </div>
    )
  }
}

export default GoogleAuth;
