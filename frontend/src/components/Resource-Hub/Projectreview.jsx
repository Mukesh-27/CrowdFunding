import React, { useState } from 'react';

const ProjectReview = () => {
  const [projectDetails, setProjectDetails] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    setProjectDetails(e.target.value);
  };

  const handleSubmit = () => {
    if (!projectDetails) {
      setError('Please provide project details for review.');
      return;
    }
    setError('');
    // Logic to handle saving project details
    alert('Project details submitted for review!');
    setSuccessMessage('Your project details have been submitted successfully!');
    setProjectDetails(''); // Reset input if needed
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Project Review</h1>
      <p className="text-lg text-gray-600 mb-8">
        We'll check compliance with guidelines (1–3 days). Make sure your project meets all requirements to avoid delays.
      </p>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Review Process</h2>
        <p className="text-gray-600 mb-4">
          Your project will be reviewed by our team to ensure it meets our guidelines. Here's what you can expect:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Compliance with Kickstarter's rules and regulations.</li>
          <li>Clarity and transparency in your project description.</li>
          <li>Feasibility of your project goals and timeline.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          If your project is approved, you will receive a notification, and you can proceed to launch your campaign.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Submit Project Details</h2>
        <p className="text-gray-600 mb-4">
          To ensure a smooth review process, please provide detailed information about your project.
        </p>
        <textarea
          placeholder="Describe your project, its goals, and any challenges you anticipate..."
          value={projectDetails}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg p-4 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
          rows="6"
        />
        <button
          onClick={handleSubmit}
          className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
        >
          Submit for Review
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Tips for a Successful Review</h2>
        <p className="text-gray-600 mb-4">
          To ensure a smooth review process, consider the following tips:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Provide detailed information about your project.</li>
          <li>Be honest about your goals and challenges.</li>
          <li>Include visuals to help convey your message.</li>
        </ul>
        <p className="text-gray-600 mb-4">
          Remember, a well-prepared project is more likely to succeed!
        </p>
      </div>
    </div>
  );
};

export default ProjectReview;
