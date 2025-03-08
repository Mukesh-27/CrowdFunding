import React, { useState } from 'react';

const Campaign = () => {
  const [durationType, setDurationType] = useState('fixed');
  const [duration, setDuration] = useState(30);
  const [latePledges, setLatePledges] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Campaign Duration</h1>
      <p className="text-lg text-gray-600 mb-8">
        Set a time limit for your campaign. You won't be able to change this after you launch.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-800 mb-2">Choose Duration Type</label>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="durationType"
              value="fixed"
              checked={durationType === 'fixed'}
              onChange={() => setDurationType('fixed')}
              className="mr-2"
            />
            <label className="text-gray-700">Fixed number of days (1-60)</label>
          </div>
          <div className="flex items-center mb-4">
            <input
              type="radio"
              name="durationType"
              value="specific"
              checked={durationType === 'specific'}
              onChange={() => setDurationType('specific')}
              className="mr-2"
            />
            <label className="text-gray-700">End on a specific date & time</label>
          </div>
          <p className="text-teal-500 text-sm">
            Campaigns that last 30 days or less are more likely to be successful. <a href="#" className="underline">Learn more...</a>
          </p>
        </div>

        {durationType === 'fixed' && (
          <div className="mb-6">
            <label className="block text-lg font-semibold text-gray-800 mb-2">Number of Days</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
              placeholder="30"
            />
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Late Pledges</h2>
        <p className="text-lg text-gray-600 mb-4">
          Backers can now continue to pledge to your project after it has successfully funded.
        </p>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            name="latePledges"
            checked={!latePledges}
            onChange={() => setLatePledges(false)}
            className="mr-2"
          />
          <label className="text-gray-700">No, don't enable Late Pledges</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            name="latePledges"
            checked={latePledges}
            onChange={() => setLatePledges(true)}
            className="mr-2"
          />
          <label className="text-gray-700">Yes, enable Late Pledges</label>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
