'use client';

import { useState } from 'react';

export default function GovComponent() {
  const [result, setResult] = useState('');
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('gpt-3.5-turbo');
  const [isLoading, setIsLoading] = useState(false);

  const sendRequestToGov = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/callGov', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt, model }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(data.response);
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred while processing your request.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-1">
          Enter your prompt:
        </label>
        <textarea
          id="prompt"
          rows={4}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Type your prompt here..."
        />
      </div>
      
      <div>
        <label htmlFor="model" className="block text-sm font-medium text-gray-700 mb-1">
          Select AI model:
        </label>
        <select
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
        >
          <option value="gpt-3.5-turbo">GPT-3.5</option>
          <option value="claude">Claude</option>
        </select>
      </div>
      
      <button
        onClick={sendRequestToGov}
        disabled={isLoading}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
      >
        {isLoading ? 'Processing...' : 'Send Request to GOV'}
      </button>
      
      {result && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Response:</h2>
          <p className="bg-gray-100 p-4 rounded-lg whitespace-pre-wrap">{result}</p>
        </div>
      )}
    </div>
  );
}
