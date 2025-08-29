import React, { useState } from 'react';
import axios from 'axios';
const App = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [apiUrl, setApiUrl] = useState('https://bajaj-finserv-seven-umber.vercel.app/bfhl');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setResponse(null);

    let dataArray;
    try {
      // Expects a valid JSON array string
      dataArray = JSON.parse(input);
      if (!Array.isArray(dataArray)) {
        throw new Error('Input must be a valid JSON array.');
      }
    } catch (err) {
      setError(`Invalid JSON Array. Please enter a valid array like: ["1", "2", "A", "$"]`);
      return;
    }

    if (!apiUrl) {
      setError('Please provide a valid API URL.');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(apiUrl, {
        data: dataArray,
      });
      setResponse(res.data);
    } catch (err) {
      setError(`API request failed. Please check the URL and ensure the backend server is running. Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <span className="text-purple-400">
          [{value.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-yellow-400">"{item}"</span>
              {index < value.length - 1 ? <span className="text-gray-400">, </span> : ''}
            </React.Fragment>
          ))}]
        </span>
      );
    }
    if (typeof value === 'boolean') {
      return <span className={`font-semibold ${value ? 'text-green-500' : 'text-red-500'}`}>{String(value)}</span>;
    }
    if (typeof value === 'string') {
      return <span className="text-yellow-400">"{value}"</span>;
    }
    return <span className="text-white">{value}</span>;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-100 p-4 font-inter">
      <div className="w-full max-w-2xl bg-gray-800 shadow-xl rounded-xl p-6 md:p-8 space-y-6 border border-gray-700">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-blue-500">BFHL API Tester</h1>
          <p className="text-gray-400">Test your REST API endpoint with a simple JSON array input.</p>
        </header>

        {/* API URL Input */}
        <div className="space-y-2">
          <label htmlFor="api-url" className="text-sm font-medium text-gray-300">
            API URL
          </label>
          <input
            id="api-url"
            type="text"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition text-sm"
            placeholder="e.g., https://your-domain.com/bfhl"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="input-array" className="text-sm font-medium text-gray-300">
              JSON Array Input
            </label>
            <textarea
              id="input-array"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition font-mono"
              rows="5"
              placeholder='Example: ["a", "1", "334", "4", "R", "$"]'
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Send Request'}
          </button>
        </form>

        {error && (
          <div className="bg-red-900 text-red-300 p-4 rounded-lg border border-red-700">
            <p className="font-mono text-sm">{error}</p>
          </div>
        )}

        {response && (
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-gray-200">API Response</h2>
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs overflow-x-auto border border-gray-700">
              <pre>
                <span className="text-gray-400">{`{`}</span>
                {Object.entries(response).map(([key, value], index) => (
                  <div key={key} className="pl-4">
                    <span className="text-cyan-400">"{key}"</span>
                    <span className="text-gray-400">: </span>
                    {renderValue(value)}
                    {index < Object.keys(response).length - 1 ? <span className="text-gray-400">,</span> : ''}
                  </div>
                ))}
                <span className="text-gray-400">{`}`}</span>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
