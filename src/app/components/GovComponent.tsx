'use client';

import React, { useState } from 'react';

interface GovComponentProps {
  defaultPrompt: string;
}

export default function GovComponent({ defaultPrompt }: GovComponentProps) {
  const [name, setName] = useState('');
  const [dataUrl, setDataUrl] = useState('');
  const [blockchainAddress, setBlockchainAddress] = useState('');
  const [metaPrompt, setMetaPrompt] = useState('');

  const sampleMetaPrompt = `As an AI governance system, your primary objective is to make decisions that benefit the community while adhering to the following principles:

1. Prioritize long-term sustainability over short-term gains
2. Ensure equitable distribution of resources
3. Protect individual privacy and data rights
4. Promote transparency in decision-making processes
5. Consider environmental impact in all policy decisions

When presented with a policy question:
1. Analyze the provided data from the specified URL
2. Consider multiple perspectives and potential outcomes
3. Propose a solution that aligns with the above principles
4. Provide a clear rationale for the decision
5. Suggest implementation steps and potential challenges`;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Gov AI Interface Editor</h1>
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Interface Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter a custom name for this interface"
          className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dataUrl" className="block text-sm font-medium text-gray-700 mb-1">Data Feed URL</label>
        <input
          type="url"
          id="dataUrl"
          value={dataUrl}
          onChange={(e) => setDataUrl(e.target.value)}
          placeholder="Enter URL for conversation data to train the AI"
          className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="blockchainAddress" className="block text-sm font-medium text-gray-700 mb-1">Blockchain Address</label>
        <input
          type="text"
          id="blockchainAddress"
          value={blockchainAddress}
          onChange={(e) => setBlockchainAddress(e.target.value)}
          placeholder="Enter Ethereum-compatible blockchain address for contributions"
          className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="metaPrompt" className="block text-sm font-medium text-gray-700 mb-1">Meta-Prompt (Constitution)</label>
        <textarea
          id="metaPrompt"
          value={metaPrompt}
          onChange={(e) => setMetaPrompt(e.target.value)}
          placeholder={sampleMetaPrompt}
          rows={10}
          className="w-full p-2 border rounded focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="defaultPrompt" className="block text-sm font-medium text-gray-700 mb-1">Default Prompt</label>
        <textarea
          id="defaultPrompt"
          value={defaultPrompt}
          readOnly
          rows={3}
          className="w-full p-2 border rounded bg-gray-100"
        />
      </div>

      <button
        type="button"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        Save Interface
      </button>
    </div>
  );
}
