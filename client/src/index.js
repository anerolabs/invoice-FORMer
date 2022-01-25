import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const devProfile = {
  managerName: 'Andrew Carnero',
  bName: 'Business Name',
  bPhone: '123-123-1234',
  bLogo: 'logo.png',
  bWebsite: 'www.website.com',
  invoiceMessage: 'This is the message on the invoice!'
}

ReactDOM.render(<App devProfile={devProfile} />, document.getElementById('app'));