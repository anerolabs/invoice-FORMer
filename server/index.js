const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../dist'));

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

// app.put('/business', (req, res) => {
//   //TODO
// });

app.listen(port, () => {
  console.log(`Invoice FORMer listening on port ${port}`)
})