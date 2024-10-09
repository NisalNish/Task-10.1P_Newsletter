import React, { useState } from 'react';
import axios from 'axios';
import './index.css';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    setMessage('');
    setError(false);

    try {
      //send payload to backend
      const response = await axios.post('http://localhost:5000/api/subscribe', { email });
      setMessage(response.data.message);
    } catch (error) {
      setError(true);
      setMessage('Subscription failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-400 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 max-w-md w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Sign Up For Our Daily Insider
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Get the latest updates delivered straight to your inbox.
        </p>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          placeholder="Enter your email"
          required
        />
        <button
          onClick={handleSubscribe}
          disabled={loading} // Disable button while loading
          className={`w-full py-2 px-4 rounded-md transition-all ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
        >
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
        {message && (
          <p className={`mt-4 text-center text-sm ${error ? 'text-red-500' : 'text-green-500'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default NewsletterSubscription;
