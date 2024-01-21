import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/crypto-data');
        setCryptoData(response.data);
        console.log(cryptoData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Crypto Data</h1>
      {cryptoData && (
        <pre>{JSON.stringify(cryptoData, null, 2)}</pre>
      )}
    </div>
  );
};

export default App;
