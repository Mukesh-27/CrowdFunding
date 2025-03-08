import React, { useState } from 'react';

const ProjectCateg = () => {
  const [primaryCategory, setPrimaryCategory] = useState('');
  const [primarySubcategory, setPrimarySubcategory] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Project Category</h1>
      <p className="text-lg text-gray-600 mb-8">
        Choose a primary category and subcategory to help backers find your project.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Primary Category</label>
            <select
              value={primaryCategory}
              onChange={(e) => setPrimaryCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            >
              <option value="">Select</option>
              <option value="Games">Games</option>
              <option value="Art">Art</option>
              <option value="Technology">Technology</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Primary Subcategory</label>
            <select
              value={primarySubcategory}
              onChange={(e) => setPrimarySubcategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            >
              <option value="">Select</option>
              <option value="Gaming Hardware">Gaming Hardware</option>
              <option value="Board Games">Board Games</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            >
              <option value="">Select</option>
              <option value="Publishing">Publishing</option>
              <option value="Film">Film</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-800 mb-2">Subcategory</label>
            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            >
              <option value="">Select</option>
              <option value="Nonfiction">Nonfiction</option>
              <option value="Fiction">Fiction</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Project Location</label>
        <input
          type="text"
          placeholder="Start typing your location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
        />
      </div>
    </div>
  );
};

export default ProjectCateg;
