import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBusiness from './SearchBusiness.jsx';

const ManagerPanel = ({savedProfile, isManaged, setSavedProfile, setIsManaged}) => {
  const [ businessProfile, setBusinessProfile ] = useState(savedProfile);

  const handleManagerFormSubmit = (e) => {
    e.preventDefault();

    console.log('--> Handle submit clicked');

    axios.put('/business', businessProfile)
      .then((results) => {
        console.log('Client received response!', results);
        //TODO: add user status message
        setIsManaged(true);
      })
      .catch((error) => {
        //TODO: add user status message
        console.log('Error receiving response from db.')
      });
  }

  const handleLookupBusiness = (e, lookupBusiness) => {
    e.preventDefault();

    if(lookupBusiness) {
      axios.get(`/business?name=${lookupBusiness}`)
        .then((results) => {
          setSavedProfile(results.data[0]);
          setBusinessProfile(results.data[0]);
          setIsManaged(true);
        })
        .catch((error) => {
          console.log('Error receiving response from db.');
        });
    }
  }


  let panelMessage = <>
    <h2>Welcome!</h2>
    <p>To create your invoice template and save invoices, tell us a little about your business.</p>
    <SearchBusiness handleLookupBusiness={handleLookupBusiness} />
    </>;

  if (isManaged) {
    panelMessage = <>
    <h2>Welcome back, {businessProfile.managerName}!</h2>
    <p>If you need to update your invoice template, edit the fields below and then click submit.</p>
    </>
  }

  return ( <div className='panel'>
    <h1>Manager Panel</h1>
    {panelMessage}

    <form onSubmit={(e) => { handleManagerFormSubmit(e) }}>
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
        Business Logo URL:
        <input type='text' value={businessProfile.bLogoUrl}
          onChange={(e) => {setBusinessProfile({...businessProfile, bLogoUrl: e.target.value})}}
          placeholder='Logo image URL here' />
      </label>
      <label>
        Invoice Message:
        <textarea value={businessProfile.invoiceMessage}
        onChange={(e) => {setBusinessProfile({...businessProfile, invoiceMessage: e.target.value})}}
        placeholder='This optional message will appear on each of your invoices.' />
      </label>
      <label>
        Sales Tax:
        <input type='number'
        value={businessProfile.salesTax}
        onChange={(e) => {setBusinessProfile({...businessProfile, salesTax: e.target.value})}}
        placeholder='%' />
      </label>
      <input type='submit' className='btn submit'
        value={isManaged ? 'Update' : 'Submit'} />
    </form>
  </div>
  )
};

export default ManagerPanel;