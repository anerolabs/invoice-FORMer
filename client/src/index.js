import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

const emptyProfile = {
  managerName: '',
  managerId: null,
  bName: '',
  bPhone: '',
  bLogo: '',
  bWebsite: '',
  invoiceMessage: ''
}

ReactDOM.render(<App emptyProfile={emptyProfile} />, document.getElementById('app'));