import React from 'react';

const InvoiceModal = ({expandInvoice, invoiceData, savedProfile}) => {
  let dateArray = invoiceData.orderDate.split('T');
  let date = dateArray[0];
  let time = dateArray[1].slice(0, 5);

  const receipt = JSON.parse(invoiceData.receipt);

  console.log(invoiceData);
  console.log(savedProfile);
  console.log(receipt);

  return ( <div className='modal-fill'>
      <div className='modal-content'>
        <div className='modal-nav'>
        <span className='m-n p'
          onClick={() => {window.print()}}>
            Print
          </span>
          <span className='m-n d'>
            Download
          </span>
          <span className='m-n c'
            onClick={() => {expandInvoice()}}>
            Close
          </span>
        </div>

        <div className='modal-header'>
          <div className='m-h-left'>
            <img src={savedProfile.bLogoUrl} />
          </div>
          <div className='m-h-right'>
            <span className='i-title'>Order Invoice</span>
            <span className='i-num'>
              Invoice #{invoiceData.invoiceNumber.toString().padStart(4, "0")}
            </span>
            <span className='i-h2'>Customer Name:</span>
            <span className='i-v'>{invoiceData.first} {invoiceData.last}</span>
            <span className='i-h2'>Customer Name:</span>
            <span className='i-v'>{invoiceData.email}</span>
            <span className='i-h2'>Order Placed:</span>
            <span className='i-v'>{date} {time}</span>
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
            <table className='m-receipt'>
              <thead>
              <tr>
                <th></th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
              </thead>
              <tbody>
              {Object.keys(receipt).map((product, i) => {
                return <tr key={i}>
                  <td>{i + 1}.</td>
                  <td>{product}</td>
                  <td>{receipt[product][0]}</td>
                  <td className='m-r-p'>{'$'}{receipt[product][1].toFixed(2)}</td>
                </tr>})}
              </tbody>
            </table>

          </div>
          <div className='i-total'>
            <span className='i-t-s'>
              Subtotal: ${invoiceData.subTotal.toFixed(2)}
            </span>
            <span className='i-t-x'>
              Tax: $TAX HERE
            </span>
            <span className='i-t-t'>
              Total: ${invoiceData.subTotal.toFixed(2)}
            </span>
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