import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles.css';

const devProfile = {
  managerName: 'Andrew Carnero',
  bName: 'Business Name',
  bPhone: '123-123-1234',
  bLogoUrl: 'https://serving.photos.photobox.com/27135290611400e443a70de5efb7cb1c49973d5bdc0b704e56f3818d878a501597aa04e6.jpg',
  bWebsite: 'www.website.com',
  invoiceMessage: 'This is the message on the invoice!'
}

ReactDOM.render(<App devProfile={devProfile} />, document.getElementById('app'));