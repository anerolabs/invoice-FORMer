import React, { useState, useEffect } from 'react';
import ManagerPanel from './components/ManagerPanel.jsx';
import Linker from './components/Linker.jsx';
import InvoiceList from './components/InvoiceList.jsx';

const App = () => {
  const [ isManaged, setIsManaged ] = useState(false);
  const [ invoices, setInvoices ] = useState([]);

  const fetchInvoices = () => {
    console.log('-> Fetching invoices');
  };

  const fetchBusinessProfile = () => {
    console.log('-> Fetching business details');
  };

  useEffect(() => {
    fetchInvoices();
    if (!isManaged) { fetchBusinessProfile(); }
  }, []);

  return ( <div className='container'>
      <h1>Invoice FORMer</h1>
      <ManagerPanel />
      <Linker />
      <InvoiceList />
    </div>
  )
};

export default App;