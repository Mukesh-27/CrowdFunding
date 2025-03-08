import React, { useState } from 'react';

const Funding = () => {
  const [goalAmount, setGoalAmount] = useState(0);
  const [launchDate, setLaunchDate] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = () => {
    if (goalAmount <= 0) {
      setError('Please enter a valid funding goal.');
      return;
    }
    if (!launchDate.day || !launchDate.month || !launchDate.year) {
      setError('Please select a valid launch date.');
      return;
    }
    setError('');
    setSuccessMessage('Funding details saved successfully!');
    // Logic to handle saving funding details can be added here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Funding Goal</h1>
      <p className="text-lg text-gray-600 mb-8">
        Set an achievable goal that covers what you need to complete your project.
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Goal Amount</label>
        <div className="flex items-center mb-4">
          <span className="text-lg font-semibold text-gray-800 mr-2">₹</span>
          <input
            type="number"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            placeholder="0"
          />
        </div>
        <p className="text-gray-500 text-sm">
          Funding is all-or-nothing. If you don't meet your goal, you won't receive any money.
        </p>
        <p className="text-teal-500 text-sm mt-2 cursor-pointer">
          Use our calculator to estimate total costs, including taxes and fees.
        </p>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">Target Launch Date (optional)</h1>
      <p className="text-lg text-gray-600 mb-8">
        We'll provide you with recommendations on when to complete steps that may take a few days to process.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Select Date</label>
        <div className="grid grid-cols-3 gap-4 mb-4">
          <input
            type="number"
            placeholder="DD"
            value={launchDate.day}
            onChange={(e) => setLaunchDate({ ...launchDate, day: e.target.value })}
            className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
          />
          <input
            type="number"
            placeholder="MM"
            value={launchDate.month}
            onChange={(e) => setLaunchDate({ ...launchDate, month: e.target.value })}
            className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
          />
          <input
            type="number"
            placeholder="YYYY"
            value={launchDate.year}
            onChange={(e) => setLaunchDate({ ...launchDate, year: e.target.value })}
            className="border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
          />
        </div>
        <p className="text-gray-500 text-sm">
          We'll recommend when you should confirm your identity and provide payment details.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Setting a target date won't automatically launch your project.
        </p>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300 mt-4"
      >
        Save Funding Details
      </button>
    </div>
  );
};

export default Funding;
