import React, { useState } from 'react';

const Story = () => {
  const [projectStory, setProjectStory] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoUpload = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!projectStory) {
      setError('Please provide a project story.');
      return;
    }
    setError('');
    // Logic to handle saving the project story
    alert('Project story saved successfully!');
    setSuccessMessage('Your project story has been saved!');
    // Reset fields if needed
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Introduce Your Project</h1>
      <p className="text-lg text-gray-600 mb-8">
        Tell people why they should be excited about your project. Get specific but be clear and brief.
      </p>

      <h2 className="text-3xl font-semibold text-gray-900 mb-4">Project Story</h2>
      <textarea
        placeholder="Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are."
        value={projectStory}
        onChange={(e) => setProjectStory(e.target.value)}
        className="border border-gray-300 rounded-lg p-4 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
        rows="6"
      />
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Images</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="border border-gray-300 rounded-lg p-4 w-full mb-4 cursor-pointer"
      />
      <p className="text-gray-500 text-sm mb-4">
        Upload an image that represents your project (optional).
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload a Video (optional)</h2>
      <input
        type="file"
        accept="video/*"
        onChange={handleVideoUpload}
        className="border border-gray-300 rounded-lg p-4 w-full mb-4 cursor-pointer"
      />
      <p className="text-gray-500 text-sm mb-4">
        Add a video that describes your project (optional).
      </p>

      <button
        onClick={handleSubmit}
        className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300"
      >
        Save Project Story
      </button>
    </div>
  );
};

export default Story;
