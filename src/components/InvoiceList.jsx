import React, { useState, useEffect } from 'react';

const InvoiceList = ({invoices}) => {
  return ( <div className='panel'>
      <h1>Invoice List</h1>
      <p>Click on an invoice to view, download, or print.</p>
      <div className='invoice-list'>
        {invoices.map((invoice, i) => {
          return <Invoice key={i} invoice={invoice} />
        })}
      </div>
    </div>
  )
};

export default InvoiceList;