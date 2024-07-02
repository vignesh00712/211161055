import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
  const [numberId, setNumberId] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://20.244.56.144/test/numbers/${numberId}`);
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number ID:
          <input
            type="text"
            value={numberId}
            onChange={(e) => setNumberId(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h2>Response</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AverageCalculator;
