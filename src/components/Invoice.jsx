import React, { useState, useEffect } from 'react';

const Invoice = ({invoice}) => {
  const expandInvoice = () => {
    //TODO: Expand the clicked invoice
    console.log('--> Invoice cliked!');
  }

  return ( <li className='invoice-item'
    onClick={() => {expandInvoice()}}>
    <span className='i-number'>Invoice Number</span>
    <span className='i-name'>Invoice Name</span>
    </li>
  )
};

export default Invoice;