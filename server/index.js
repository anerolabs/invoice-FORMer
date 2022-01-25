const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist/'));
app.use(express.json());

const business = require('../database/controllers/business.js');
const invoice = require('../database/controllers/invoice.js');

//TODO: fix static files not rendering correctly

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.get('/invoices', (req, res) => {
//   //TODOa
// });

// app.post('/invoices', (req, res) => {
//   //TODO
// });

// app.get('/business', (req, res) => {
//   //TODO
// });

app.put('/business', (req, res) => {
  console.log('made it to express router');
  business.updateBusinessProfile(req, res);
});

app.listen(port, () => {
  console.log(`Invoice FORMer listening on port ${port}`)
})