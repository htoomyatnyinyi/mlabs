// App.js
import React, { useState, useEffect } from 'react';

const Api = () => {
  const [config, setConfig] = useState({ apiUrl: '', apiKey: '' });

  useEffect(() => {
    // Fetch configuration data when the component mounts
    fetch('/api/config')
      .then(response => response.json())
      .then(data => setConfig(data))
      .catch(error => console.error('Error fetching configuration at server:', error));
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return (
    <div>
      <h1>React App with Environment Variables</h1>
      <p>API URL: {config.apiUrl}</p>
      <p>API Key: {config.apiKey}</p>
    </div>
  );
};

export default Api;
