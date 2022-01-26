import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Linker = ({isManaged, fetchInvoices, savedProfile}) => {
  const [ spreadsheetURL, setSpreadsheetURL ] = useState('');
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

      axios.post('/invoices', {spreadsheetId: spreadsheetID, bName: savedProfile.bName})
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
  }, []);

  let content = <>
    To generate invoices, please fill out the details on the left or search for your business if you've visited before.
  </>;

  if(isManaged) {
    content = <form onSubmit={(e) => { handleLinkerSubmit(e) }}>
    <p>Need help finding your spreadsheet link? Click <a href='/'>here</a>.</p>

    <input type='text' value={spreadsheetURL}
      onChange={(e) => { setSpreadsheetURL(e.target.value) }}
      placeholder='Link your Google Forms result spreadsheet here...' />

    <input type='submit' className='btn submit'
      value='Generate Invoices!' />

    <span className='status-msg'>{statusMessage}</span>
  </form>
  }

  return (
    <div className='panel'>
    <h1>Generate Invoices</h1>
    {content}
    </div>
  )
};

export default Linker;