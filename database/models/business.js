const mongoose = require('mongoose');

const Profile = mongoose.model('Profile', {
  managerName: String,
  bName: String,
  bPhone: String,
  bLogo: String,
  bWebsite: String,
  invoiceMessage: String
});

module.exports = Profile;