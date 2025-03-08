import React, { useState } from 'react';

const Payment = () => {
  const [email, setEmail] = useState('mukeshprajani93@gmail.com');
  const [projectType, setProjectType] = useState('individual');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProjectTypeChange = (e) => {
    setProjectType(e.target.value);
  };

  const sendVerificationEmail = () => {
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // Logic to send verification email
    alert('Verification email sent to ' + email);
    setSuccessMessage('Verification email sent successfully!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Verify Your Details and Link a Bank Account</h1>
      <p className="text-lg text-gray-600 mb-8">
        Confirm who's raising funds and receiving them if this project reaches its funding goal. Double-check your information—you agree the details you provide are true and acknowledge they can't be changed once submitted.
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Email</h2>
        <p className="text-gray-600 mb-4">
          Confirm the email address we should use for correspondence about this project.
        </p>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="border border-gray-300 rounded-lg p-4 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
          placeholder="Enter your email"
        />
        <p className="text-gray-500 mb-4">
          If the incorrect email is shown here, <a href="#" className="text-teal-500 underline">update it on your account.</a>
        </p>
        <button
          onClick={sendVerificationEmail}
          className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200"
        >
          Send verification email
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Project Type</h2>
        <p className="text-gray-600 mb-4">
          Select "Individual" if you're raising and receiving funds for this project in your own name. Select "Business" or "Nonprofit" if you're raising and receiving funds for this project on behalf of an entity that you own or are an executive of, with authorization to represent.
        </p>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            name="projectType"
            value="individual"
            checked={projectType === 'individual'}
            onChange={handleProjectTypeChange}
            className="mr-2"
          />
          <label className="text-gray-700">Individual</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            name="projectType"
            value="business"
            checked={projectType === 'business'}
            onChange={handleProjectTypeChange}
            className="mr-2"
          />
          <label className="text-gray-700">Business</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            name="projectType"
            value="nonprofit"
            checked={projectType === 'nonprofit'}
            onChange={handleProjectTypeChange}
            className="mr-2"
          />
          <label className="text-gray-700">Nonprofit</label>
        </div>
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
          Complete the above steps to unlock this section
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Project Verification</h2>
        <p className="text-gray-600 mb-4">
          You'll be redirected to Stripe, our payment processor, to provide your age, location, tax information, and other details. Projects raising funds for a business or nonprofit will require similar information, along with details about the entity's owners and directors.
        </p>
        <p className="text-gray-600 mb-4">
          By proceeding, you certify that the details you provide are true.
        </p>
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-200">
          Complete the above steps to unlock this section
        </button>
      </div>
    </div>
  );
};

export default Payment;
