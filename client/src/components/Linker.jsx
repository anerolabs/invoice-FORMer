import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Linker = ({isManaged, fetchInvoices}) => {
  const [ spreadsheetURL, setSpreadsheetURL ] = useState('https://docs.google.com/spreadsheets/d/1_ISTRfVa1Pe6hVi_ObqJ1K8Y3A98U3IijW6XXGeKls8/edit?resourcekey#gid=589615645');
  const [ statusMessage, setStatusMessage ] = useState('');


  const handleLinkerSubmit = (e) => {
    e.preventDefault();
    console.log('--> Linker Submit Clicked');
    setStatusMessage('Your invoices are being created! Please wait...');

    const urlElements = spreadsheetURL.split('/');
    const dIndex = urlElements.indexOf('d');

    if (dIndex) {
      const spreadsheetID = urlElements[dIndex +1 ];
      console.log(spreadsheetID);

      axios.post('/invoices', {spreadsheetId: spreadsheetID})
      .then((results) => {
        console.log('-->Successful POST /invoices');
        fetchInvoices();
      })
      .catch((error) => {
        console.log('Error posting invoices to db.');
      })
    }
  };

  useEffect(() => {
    //setStatusMessage('');
  }, [])

  return (
    <div className='panel'>
    <h1>Generate Invoices</h1>

    <form onSubmit={(e) => { handleLinkerSubmit(e) }}>
      <p>Need help finding your spreadsheet link? Click <a href='/'>here</a>.</p>

      <input type='text' value={spreadsheetURL}
        onChange={(e) => { setSpreadsheetURL(e.target.value) }}
        placeholder='Link your Google Forms result spreadsheet here...' />

      <input type='submit' className='btn submit'
        value='Generate Invoices!' />

      <span className='status-msg'>{statusMessage}</span>
    </form>
    </div>
  )
};

export default Linker;