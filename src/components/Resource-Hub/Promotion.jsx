import React, { useState } from 'react';

const Promotion = () => {
  const [email, setEmail] = useState('');
  const [socialMedia, setSocialMedia] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSocialMediaChange = (e) => {
    setSocialMedia(e.target.value);
  };

  const handleSubmit = () => {
    if (!email || !socialMedia) {
      setError('Please fill in both fields.');
      return;
    }
    setError('');
    // Logic to handle promotion submission
    alert(`Promotion details submitted:\nEmail: ${email}\nSocial Media: ${socialMedia}`);
    setSuccessMessage('Promotion details submitted successfully!');
    // Reset fields if needed
    setEmail('');
    setSocialMedia('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Promotion</h1>
      <p className="text-lg text-gray-600 mb-8">
        Learn how to effectively promote your project to reach your funding goals.
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Promote Your Project</h2>
        <p className="text-gray-600 mb-4">
          Share your project with your network and beyond. Use the tools below to help spread the word.
        </p>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-800 mb-2">Your Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold text-gray-800 mb-2">Social Media Link</label>
          <input
            type="text"
            value={socialMedia}
            onChange={handleSocialMediaChange}
            className="border border-gray-300 rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            placeholder="Enter your social media link"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
        >
          Submit Promotion Details
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Tips for Promotion</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Share your project on social media platforms.</li>
          <li>Engage with your audience through updates and comments.</li>
          <li>Consider creating a promotional video to showcase your project.</li>
          <li>Reach out to influencers or bloggers in your niche.</li>
        </ul>
        <p className="text-gray-600">
          Remember, the more you promote your project, the better your chances of reaching your funding goal!
        </p>
      </div>
    </div>
  );
};

export default Promotion;
