import React from 'react';

const InvoiceModal = ({expandInvoice, invoiceData, savedProfile}) => {
  console.log(invoiceData);
  console.log(savedProfile);

  return ( <div className='modal-fill'
    onClick={() => {expandInvoice()}}>
      <div className='modal-content'>

        <div className='modal-header'>
          <div className='1'>
            <img src='./img/wingsandrings.jpg' />
          </div>
          <div className='2'>
            <span className='i-title'>Order Summary</span>
            <span className='i-h2'>Customer Name:</span>
            <span className='i-v'>{invoiceData.first} {invoiceData.last}</span>
            <span className='i-h2'>Customer Name:</span>
            <span className='i-v'>{invoiceData.email}</span>
            <span className='i-h2'>Order Placed:</span>
            <span className='i-v'>{invoiceData.date}</span>
          </div>
        </div>

        <div className='modal-body'>
          <div className='i-msg'>
            {savedProfile.invoiceMessage}
          </div>
          <div className='i-h1'>
            Order Details
          </div>
          <div className='i-details'>
            Receipt details here
          </div>
          <div className='i-total'>
            Subtotal: {invoiceData.subTotal}
            Tax: TAX HERE
            Total: {invoiceData.subTotal}
          </div>
        </div>

        <div className='modal-footer'>
          {savedProfile.bName} | {savedProfile.bWebsite} | {savedProfile.bPhone}
        </div>

      </div>
  </div>
  )
};

export default InvoiceModal;