const Invoice = require('../models/invoice.js');
const { google } = require('googleapis');

let invoiceCounter = "1";
let invoiceNumber = invoiceCounter.padStart(4, "0");


module.exports = {
  getInvoices: (req, res) => {
    console.log('Made it to getInvoices');
    //TODO: find all invoices from db, send response
    Invoice.find({}).sort({date: 'desc'}).exec((err, invoices) => {
      if (err) {
        res.status(500).send('Failed to retrieve invoices from the database.', error)
      } else {
        console.log(invoices);
        res.status(200).json(invoices);
      }
    });
  },
  createInvoices: async (req, res) => {
    //TODO: Follow the googleapis documentation to for proper oAuth
    console.log('Made it to createInvoice');
    const spreadsheetId = req.body.spreadsheetId;
    console.log(spreadsheetId);

    const auth = new google.auth.GoogleAuth({
      keyFile: 'credentials.json',
      scopes: "https://www.googleapis.com/auth/spreadsheets"
    });

    //Create client instance for auth
    const client = await auth.getClient();

    //Create Instance of Google Sheets API
    const googleSheets = google.sheets({version: 'v4', auth: client});

    //Get sheet title from sheet meta data
    const sheetMetaData = await googleSheets.spreadsheets.get({auth, spreadsheetId});
    const sheetTitle = sheetMetaData.data.sheets[0].properties.title;

    //Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: sheetTitle
    });
    const headerRow = getRows.data.values[0];
    const invoices = getRows.data.values.slice(1);

    //Parse Product Names | Must begin with '> ' and anything in [] will be removed
    let productNames = [];
    headerRow.forEach((header, i) => {
      if (i > 4) {
        if (header[0] === '>') {
          let strippedHeader = header.slice(2);
          const bracket = strippedHeader.indexOf('[');
          if (bracket) {
            strippedHeader = strippedHeader.slice(0, bracket - 1);
          }
          productNames.push(strippedHeader);
        }
      }
    });

    const invoicePromises = invoices.map((invoice) => {
      //Get Invoice Data
      const [ orderDate, email, first, last, phone, ...products ] = invoice;
      console.log(products);

      //Assemble receipt
      let receipt = {};
      let subTotal = 0;

      products.forEach((product, i) => {
        if (product !== '0') { //Do not include products with quantity value 0
          const priceStart = product.indexOf('(');
          const priceEnd = product.indexOf(')');
          const quantity = product.slice(0, priceStart - 1);
          const price = parseFloat(product.slice(priceStart + 2, priceEnd));
          subTotal = subTotal + price;
          receipt[productNames[i]] = [quantity, price];
        }
      });
      receipt = JSON.stringify(receipt);
      const orderData = { orderDate, email, first, last, phone, receipt, subTotal };

      return new Promise((resolve, reject) => {
        //TODO: Make sure document is not being updated if it already exists
        Invoice.findOneAndUpdate({last, orderDate},
          {$setOnInsert: orderData, $inc: {invoiceNo: 1}},
          {upsert: true, new: true})
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            reject(error);
          });
      })
    });

    Promise.all(invoicePromises)
      .then(() => {
        res.status(200).send();
      })
      .catch((error) => {
        res.status(500).send('Failed to add invoices to the database.', error);
      })
  }
}