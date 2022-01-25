const Invoice = require('../models/invoice.js');
const { google } = require('googleapis');

module.exports = {
  getInvoices: (req, res) => {
    console.log('Made it to getInvoices');
    //TODO: find all invoices from db, send response
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

    //Read rows from spreadsheet
    const getRows = await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId,
      range: "Form Responses 1"
    });


    console.log(getRows.data);
  }
}