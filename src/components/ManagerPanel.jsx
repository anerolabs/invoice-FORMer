import React, { useState, useEffect } from 'react';

const ManagerPanel = ({savedProfile, isManaged}) => {
  const [ managerName, setManagerName ] = useState('');
  const [ businessProfile, setBusinessProfile ] = useState(savedProfile);

  return ( <div className='panel'>
    <h1>Manager Panel</h1>
    <h2>Welcome!</h2>
    <p>To create an invoice template and save invoices, tell us a little about your business.</p>

    <form>
    <label>
        Your Name:
        <input type='text' value={businessProfile.managerName}
          onChange={(e) => {setBusinessProfile({...businessProfile, managerName: e.target.value})}} />
      </label>
      <label>
        Business Name:
        <input type='text' value={businessProfile.bName}
          onChange={(e) => {setBusinessProfile({...businessProfile, bName: e.target.value})}} required />
      </label>
      <label>
        Business Phone:
        <input type='tel' value={businessProfile.bPhone}
          onChange={(e) => {setBusinessProfile({...businessProfile, bPhone: e.target.value})}}
          placeholder='123-457-7890'
          pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' required />
      </label>
      <label>
        Business Website:
        <input type='text' value={businessProfile.bWebsite}
        onChange={(e) => {setBusinessProfile({...businessProfile, bWebsite: e.target.value})}} />
      </label>
      <label>
        Business Logo:
        <input type='file' value={businessProfile.bLogo}
          onChange={(e) => {setBusinessProfile({...businessProfile, bLogo: e.target.value})}} required />
      </label>
      <label>
        Invoice Message:
        <textarea value={businessProfile.invoiceMessage}
        onChange={(e) => {setBusinessProfile({...businessProfile, invoiceMessage: e.target.value})}}
        placeholder='This optional message will appear on each of your invoices.' />
      </label>
      <input type='submit' className='btn submit'
        value={isManaged ? 'Update' : 'Submit'} />
    </form>
  </div>
  )
};

export default ManagerPanel;