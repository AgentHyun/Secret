// App.js

import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>MongoDB Data Viewer</h1>
      <button onClick={fetchData}>Fetch Data</button>
      <ul>
        {data.length === 0 ? (
          <p>No data available</p>
        ) : (
          data.map((item, index) => (
            <li key={index}>
              Name: {item.name}, Email: {item.email}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default App;
