import React, { useState, useEffect } from 'react';
import Invoice from './invoice.jsx';

const InvoiceList = ({invoices}) => {
  return ( <div className='panel'>
      <h1>Invoice List</h1>
      <p>Click on an invoice to view, download, or print.</p>
      <ul className='invoice-list'>
        {invoices.map((invoice, i) => {
          return <Invoice key={i} invoice={invoice} />
        })}
      </ul>
    </div>
  )
};

export default InvoiceList;