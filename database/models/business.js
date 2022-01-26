const mongoose = require('mongoose');

const Profile = mongoose.model('Profile', {
  invoiceNo: {type: Number, default: 0000},
  managerName: String,
  bName: String,
  bPhone: String,
  bLogoUrl: String,
  bWebsite: String,
  invoiceMessage: String,
  salesTax: Number
});

module.exports = Profile;