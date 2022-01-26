import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header.jsx';
import ManagerPanel from './components/ManagerPanel.jsx';
import Linker from './components/Linker.jsx';
import InvoiceList from './components/InvoiceList.jsx';


const App = ({devProfile}) => {
  const [ isManaged, setIsManaged ] = useState(false);
  const [ savedProfile, setSavedProfile ] = useState(devProfile);
  const [ invoices, setInvoices ] = useState([]);

  const fetchInvoices = (businessName) => {
    businessName = businessName || savedProfile.bName;
    axios(`/invoices?business=${businessName}`)
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
    // const updatedProfile = {
    //   managerName: '',
    //   bName: '',
    //   bPhone: '',
    //   bLogo: '',
    //   bWebsite: '',
    //   invoiceMessage: ''
    // }

    //setBusinessProfile(businessProfile);
  };

  useEffect(() => {
    //fetchInvoices();
    //TODO: Fetch the business profile from the DB if
    // there is one saved
    //if (!isManaged) { fetchBusinessProfile(); }
  }, []);

  return ( <>
      <Header />
      <div className='container'>
      <div className='left'>
        <ManagerPanel
          isManaged={isManaged}
          savedProfile={savedProfile}
          setSavedProfile={setSavedProfile}
          setIsManaged={setIsManaged}
          fetchInvoices={fetchInvoices} />
      </div>
      <div className='right'>
        <Linker
          isManaged={isManaged}
          fetchInvoices={fetchInvoices}
          savedProfile={savedProfile} />
        <InvoiceList
          invoices={invoices}
          savedProfile={savedProfile} />
      </div>
    </div>
    </>
  )
};

export default App;