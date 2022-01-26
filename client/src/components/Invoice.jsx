import React from 'react';


const Invoice = ({invoice, expandInvoice, invoiceIndex}) => {
  let dateArray = invoice.orderDate.split('T');
  let date = dateArray[0];
  let time = dateArray[1].slice(0, 5);

  return ( <li className='invoice-item'
    onClick={() => {expandInvoice(invoiceIndex)}}>
    <span className='i-date'>{date} {time}</span>
    <span className='i-name'>{invoice.last}, {invoice.first}</span>
    </li>
  )
};

export default Invoice;