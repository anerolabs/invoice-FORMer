const db = require('../index.js');
const Profile = require('../models/business.js');

module.exports = {
  getBusinessProfile: (req, res) => {
    console.log('Made it to getBusinessProfile');
    //TODO: retrieve matching business profile
  },
  updateBusinessProfile: (req, res) => {
    console.log('Made it to updateBusiness Profile');

    Profile.findOneAndUpdate({bName: req.body.bName}, req.body, {upsert: true})
      .then((results) => {
        res.status(204).send('');
      })
      .catch((error) => {
        res.status(204).send('Error adding or updating the business profile', error);
      })
  }
}