import React, { useState, useEffect } from 'react';
import Invoice from './Invoice.jsx';
import InvoiceModal from './InvoiceModal.jsx';


const InvoiceList = ({invoices, savedProfile}) => {
  const [ showModal, setShowModal ] = useState(false);
  const [ currentInvoice, setCurrentInvoice ] = useState(1);

  const expandInvoice = (targetInvoice) => {
    setCurrentInvoice(targetInvoice);
    setShowModal(!showModal);
  }
  let invoiceModal = '';
  if (showModal) {
    invoiceModal = <InvoiceModal expandInvoice={expandInvoice}
      invoiceData={invoices[currentInvoice]}
      savedProfile={savedProfile} />
  }

  return ( <div className='panel'>
      <h1>Invoice List</h1>
      <p>Click on an invoice to view, download, or print.</p>
      {invoiceModal}
      <ol className='invoice-list'>
        {invoices.map((invoice, i) => {
          return <Invoice key={i}
            invoiceIndex={i}
            invoice={invoice}
            expandInvoice={expandInvoice} />;
        })}
      </ol>
    </div>
  )
};

export default InvoiceList;