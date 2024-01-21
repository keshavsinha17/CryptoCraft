
// server/server.js

const express = require('express');
const axios = require('axios');
const cors=require('cors')
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

app.get('/api/crypto-data', async (req, res) => {
  try {
    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '3d9aa2c3-4972-4ec7-8498-3966a9fa405d',
      },
      params: {
        limit: 4, // Pass the cryptocurrencyId as a parameter to the API
      },
    });

    const jsonData = response.data;
    console.log(jsonData);

    // Send the JSON data as a response
    res.json(jsonData);
  } catch (error) {
    console.error(error);
    // Handle errors and send an appropriate response
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
