const db = require('../index.js');
const Profile = require('../models/business.js');

module.exports = {
  getBusinessProfile: (req, res) => {
    Profile.find({bName: req.query.name})
    .then((business) => {
      res.status(200).json(business);
    })
    .catch((error) => {
      res.status(500).send('No matching business found', error);
    });
  },
  updateBusinessProfile: (req, res) => {
    console.log('Made it to updateBusiness Profile');

    Profile.findOneAndUpdate({bName: req.body.bName}, req.body, {upsert: true})
      .then((results) => {
        res.status(204).send('');
      })
      .catch((error) => {
        res.status(500).send('Error adding or updating the business profile', error);
      });
  }
}