'use client';

import { useState } from 'react';

interface GovComponentProps {
  defaultPrompt: string;
}

export default function GovComponent({ defaultPrompt }: GovComponentProps) {
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Here you would typically make an API call to your AI service
    // For now, we'll just simulate a response after a delay
    setTimeout(() => {
      setResponse(`AI response to: ${prompt}`);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border rounded-md mb-4"
          rows={4}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
      </form>
      {response && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Response:</h2>
          <p className="bg-gray-100 p-4 rounded-md">{response}</p>
        </div>
      )}
    </div>
  );
}
