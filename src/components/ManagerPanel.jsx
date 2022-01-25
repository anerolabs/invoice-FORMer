import React, { useState, useEffect } from 'react';

const ManagerPanel = () => {
  const [ managerName, setManagerName ] = useState('');

  const handleInputChange = (e) => {
    console.log(e);
    setManagerName(e.target.value);
  }


  return ( <div className='panel'>
    <h1>Manager Panel</h1>
    <h2>Welcome!</h2>
    <p>To create an invoice template and save invoices, tell us a little about your business.</p>

    <form>
    <label>
        Your Name:
        <input type='text' value={managerName}
          onChange={() => {handleInputChange(e)}} />
      </label>

      <label>
        Business Name:
        <input type='text' value={managerName}
          onChange={() => {handleInputChange(e)}} required />
      </label>

      <label>
        Business Phone:
        <input type='text' value={managerName}
          onChange={() => {handleInputChange(e)}} required />
      </label>

      <label>
        Business Logo:
        <input type='file' value={managerName}
          onChange={() => {handleInputChange(e)}} required />
      </label>

      <label>
        Business Website:
        <input type='text' value={managerName}
        onChange={() => {handleInputChange(e)}} required />
      </label>

    </form>
  </div>
  )
};

export default ManagerPanel;