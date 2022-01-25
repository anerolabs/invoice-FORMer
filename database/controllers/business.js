const db = require('../index.js');
const Profile = require('../models/business.js');

module.exports = {
  getBusinessProfile: (req, res) => {
    console.log('Made it to getBusinessProfile');
    //TODO: retrieve matching business profile
  },
  updateBusinessProfile: (req, res) => {
    console.log('Made it to updateBusiness Profile');

    console.log(req.body);

    const updatedProfile = {

    };

    db.Profile.findOneAndUpdate({bName: req.body.bName}, updatedProfile, {upsert: true})
      .then((results) => {
        console.log(results);

        res.status(204).send('');
      })
      .catch((error) => {
        console.log('Error adding or updating the business profile');
      })
  }
}