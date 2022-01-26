import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './styles.css';

const devProfile = {
  managerName: '',
  bName: '',
  bPhone: '',
  bLogoUrl: '',
  bWebsite: '',
  invoiceMessage: '',
  salesTax: 0
}

ReactDOM.render(<App devProfile={devProfile} />, document.getElementById('app'));