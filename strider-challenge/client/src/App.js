import React from 'react';
import API from './routes/api';
const api = new API();
const get = api.getAllDataFromDatabase();

function App() {
  return (
    <div>
      <h1>{get}</h1>
    </div>
  );
}

export default App;
