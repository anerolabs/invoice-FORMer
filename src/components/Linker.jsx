import React, { useState, useEffect } from 'react';

const Linker = ({isManaged}) => {
  const [ spreadsheetURL, setSpreadsheetURL ] = useState('');

  const handleLinkerSubmit = (e) => {
    e.preventDefault();
    console.log('--> Linker Submit Clicked');
    //TODO: Parse spreadsheet and POST request
  };

  return (
    <div className='panel'>
    <h1>Link your Form</h1>

    <form onSubmit={(e) => { handleLinkerSubmit(e) }}>
      <input type='text' value={spreadsheetURL}
        onChange={(e) => { setSpreadsheetURL(e.target.value) }} />
      <p>Need help finding your spreadsheet link? Click <a href='/'>here</a>.
      </p>
      <input type='submit' className='btn submit'
        value='Generate Invoices!' />
    </form>
    </div>
  )
};

export default Linker;