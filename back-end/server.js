const express = require('express');
const cors = require('cors');

const app = express();

app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', TrackingNumber: '134234234234234'},
    {id: 2, firstName: 'Brad', TrackingNumber: '234234234234234'},
    {id: 3, firstName: 'Mary', TrackingNumber: '234234234565346'},
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);