'use client';

import { useState } from 'react';

export default function GovComponent() {
  const [result, setResult] = useState('');

  const sendRequestToGov = async () => {
    const response = await fetch('/api/callGov', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: 'Hello GOV, make a decision.' }),
    });

    const data = await response.json();
    setResult(data.result);
  };

  return (
    <div>
      <h1>Response from GOV</h1>
      <p>{result}</p>
      <button onClick={sendRequestToGov}>Send Request to GOV</button>
    </div>
  );
}
