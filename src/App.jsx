import React, { useState, useEffect } from 'react';
import ManagerPanel from './components/managerPanel.jsx';
import Linker from './components/linker.jsx';
import InvoiceList from './components/invoiceList.jsx';

const App = () => {
  return ( <div className='container'>
      <h1>Invoice FORMer</h1>
      <ManagerPanel />
      <Linker />
      <InvoiceList />
    </div>
  )
};

export default App;