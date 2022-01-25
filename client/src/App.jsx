import React, { useState, useEffect } from 'react';
import ManagerPanel from './components/ManagerPanel.jsx';
import Linker from './components/Linker.jsx';
import InvoiceList from './components/InvoiceList.jsx';

const App = ({emptyProfile}) => {
  const [ isManaged, setIsManaged ] = useState(false);
  const [ savedProfile, setSavedProfile ] = useState(emptyProfile);
  const [ invoices, setInvoices ] = useState(["1", "2"]);

  const fetchInvoices = () => {
    console.log('-> Fetching invoices');
  };

  const fetchBusinessProfile = () => {
    console.log('-> Fetching business details');

    //Build Business Profile Object
    const updatedProfile = {
      managerName: '',
      managerId: null,
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
    if (!isManaged) { fetchBusinessProfile(); }
  }, []);

  return ( <div className='container'>
      <h1>Invoice FORMer</h1>
      <ManagerPanel  isManaged={isManaged}
        savedProfile={savedProfile} />
      <Linker isManaged={isManaged} />
      <InvoiceList invoices={invoices} />
    </div>
  )
};

export default App;