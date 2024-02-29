import React, { useState, useEffect } from 'react';

function ReadAllAssets() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    // Fetch assets from your server
    fetch('http://localhost:3001/api/assets') // Use the full URL
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch assets. Status: ${response.status}`);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return response.json();
        } else {
          throw new Error('Response is not in JSON format');
        }
      })
      .then((data) => setAssets(data))
      .catch((error) => console.error(`Failed to fetch assets: ${error}`));
  }, []);  

  return (
    <div>
      <h1>Asset List</h1>
      <ul>
        {assets.map((asset) => (
          <li key={asset.Key}>
            Asset ID: {asset.ID}, Color: {asset.Color}, Owner: {asset.Owner}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReadAllAssets;