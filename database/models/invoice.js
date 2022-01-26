const mongoose = require('mongoose');

const Invoice = mongoose.model('Invoice', {
  //TODO: Build schema
  invoiceNumber: Number,
  orderDate: Date,
  email: String,
  first: String,
  last: String,
  phone: String,
  receipt: String,
  subTotal: Number
});

module.exports = Invoice;