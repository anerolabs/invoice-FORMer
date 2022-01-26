import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles.css';

const devProfile = {
  managerName: 'Andrew Carnero',
  bName: 'Lord of the Wings',
  bPhone: '305-125-6123',
  bLogoUrl: 'https://serving.photos.photobox.com/27135290611400e443a70de5efb7cb1c49973d5bdc0b704e56f3818d878a501597aa04e6.jpg',
  bWebsite: 'www.lordofthewings.com',
  invoiceMessage: `Thank you so much for supporting my business!
  I hope you enjoy your BBQ.
  Have a smokin' day!`,
  salesTax: 8.875
}

ReactDOM.render(<App devProfile={devProfile} />, document.getElementById('app'));