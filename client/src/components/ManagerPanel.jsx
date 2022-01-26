import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManagerPanel = ({savedProfile, isManaged, setSavedProfile}) => {
  const [ managerName, setManagerName ] = useState('');
  const [ businessProfile, setBusinessProfile ] = useState(savedProfile);
  const [ lookupBusiness, setLookupBusiness ] = useState('');

  const handleManagerFormSubmit = (e) => {
    e.preventDefault();
    console.log('--> Handle submit clicked');

    axios.put('/business', businessProfile)
      .then((results) => {
        console.log('Client received response!', results);
        //TODO: add user status message
      })
      .catch((error) => {
        //TODO: add user status message
        console.log('Error receiving response from db.')
      })
  }

  const handleLookupBusiness = (e) => {
    e.preventDefault();
    console.log('--> Lookup business clicked');

    axios.get(`/business?name=${lookupBusiness}`)
      .then((results) => {
        console.log('Client received response!', results);
        setSavedProfile(results.data[0]);
        setBusinessProfile(results.data[0]);
      })
      .catch((error) => {
        console.log('Error receiving response from db.')
      })
  }

  return ( <div className='panel'>
    <h1>Manager Panel</h1>
    <h2>Welcome!</h2>
    <p>To create your invoice template and save invoices, tell us a little about your business.</p>

    Have you been here before?
    Type in your business name to pull up your invoices.
    <form onSubmit={(e) => { handleLookupBusiness(e) }}>
      <label>
        <input type='text' value={lookupBusiness}
          onChange={(e) => {setLookupBusiness(e.target.value)}} />
      </label>
      <input type='submit' className='btn submit'
        value={isManaged ? 'Update' : 'Submit'} />
    </form>

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