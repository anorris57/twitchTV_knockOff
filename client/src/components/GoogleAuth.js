import React, { Component } from 'react';
//initializes library
class GoogleAuth extends Component {
  
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init ({
        clientId: 
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
