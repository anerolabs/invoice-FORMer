import React, { useState, useEffect } from 'react';
import ManagerPanel from './components/ManagerPanel.jsx';
import Linker from './components/Linker.jsx';
import InvoiceList from './components/InvoiceList.jsx';
import axios from 'axios';


const App = ({devProfile}) => {
  const [ isManaged, setIsManaged ] = useState(false);
  const [ savedProfile, setSavedProfile ] = useState(devProfile);
  const [ invoices, setInvoices ] = useState(['1', '2']);


  const fetchInvoices = () => {
    axios('/invoices')
      .then((results) => {
        setInvoices(results.data);
      })
      .catch((error) => {
        console.log('GET /invoices request failed.', error);
      });
  };

  const fetchBusinessProfile = () => {
    console.log('-> Fetching business details');
    //TODO: Finish this functionality

    //Build Business Profile Object
    const updatedProfile = {
      managerName: '',
      bName: '',
      bPhone: '',
      bLogo: '',
      bWebsite: '',
      invoiceMessage: ''
    }

    //setBusinessProfile(businessProfile);
  };

  useEffect(() => {
    fetchInvoices();
    //if (!isManaged) { fetchBusinessProfile(); }
  }, []);

  return ( <div className='container'>
      <h1>Invoice FORMer</h1>
      <ManagerPanel
        isManaged={isManaged}
        savedProfile={savedProfile} />
      <Linker
        isManaged={isManaged}
        fetchInvoices={fetchInvoices} />
      <InvoiceList invoices={invoices} />
    </div>
  )
};

export default App;