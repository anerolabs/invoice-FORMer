const Invoice = require('../models/invoice.js');

module.exports = {
  getInvoices: (req, res) => {
    console.log('Made it to getInvoices');
    //TODO: find all invoices from db, send response
  },
  createInvoice: (req, res) => {
    console.log('Made it to createInvoice');
    //TODO: create an invoice in the db
  }
}