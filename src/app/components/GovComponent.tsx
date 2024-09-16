'use client';

import React, { useState } from 'react';

interface GovComponentProps {
  defaultPrompt: string;
}

export default function GovComponent({ defaultPrompt }: GovComponentProps) {
  const [name, setName] = useState('');
  const [dataUrl, setDataUrl] = useState('');
  const [blockchainAddress, setBlockchainAddress] = useState('');
  const [metaPrompt, setMetaPrompt] = useState(defaultPrompt);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto space-y-8 bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-blue-600">Gov AI Interface Editor</h1>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Interface Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter a custom name for this interface"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-xs text-gray-500">Example: Economic Policy AI</p>
          </div>

          <div>
            <label htmlFor="dataUrl" className="block text-sm font-medium text-gray-700">Data Feed URL</label>
            <input
              type="url"
              id="dataUrl"
              value={dataUrl}
              onChange={(e) => setDataUrl(e.target.value)}
              placeholder="Enter URL for conversation data to train the AI"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-xs text-gray-500">Example: https://example.com/economic-policy-discussions.json</p>
          </div>

          <div>
            <label htmlFor="blockchainAddress" className="block text-sm font-medium text-gray-700">Blockchain Address</label>
            <input
              type="text"
              id="blockchainAddress"
              value={blockchainAddress}
              onChange={(e) => setBlockchainAddress(e.target.value)}
              placeholder="Enter Ethereum-compatible blockchain address for contributions"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-xs text-gray-500">Example: 0x742d35Cc6634C0532925a3b844Bc454e4438f44e</p>
          </div>

          <div>
            <label htmlFor="metaPrompt" className="block text-sm font-medium text-gray-700">Meta-Prompt [Constitution]</label>
            <textarea
              id="metaPrompt"
              value={metaPrompt}
              onChange={(e) => setMetaPrompt(e.target.value)}
              rows={10}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <p className="mt-1 text-xs text-gray-500">This is the constitution for the AI's decision-making process.</p>
          </div>

          <button
            type="button"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save Interface
          </button>
        </div>
      </div>
    </div>
  );
}
