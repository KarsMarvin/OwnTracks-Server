const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let currentLocation = null;

app.post('/update-location', (req, res) => {
  currentLocation = req.body;
  console.log('Received location:', currentLocation); // Log received data
  res.sendStatus(200);
});

app.get('/location', (req, res) => {
  res.json(currentLocation);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
