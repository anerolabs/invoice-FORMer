import React from 'react';

const InvoiceModal = ({expandInvoice, invoiceData, savedProfile}) => {
  console.log(invoiceData);
  console.log(savedProfile);

  return ( <div className='modal-fill'
    onClick={() => {expandInvoice()}}>
      <div className='modal-content'>
      <h1>Order Summary</h1>
      <h3>Thank you for your order!</h3>
      Customer: First Last
      email@email.com

      Order Placed: 1/1/22

      This is the message on the invoice!

      ORDER DETAILS
      Item ..... QTY ..... PRICE
      Subtotal:
      Tax:
      Order Total:

      Business Name | Business Website | Business Phone
      </div>
  </div>
  )
};

export default InvoiceModal;