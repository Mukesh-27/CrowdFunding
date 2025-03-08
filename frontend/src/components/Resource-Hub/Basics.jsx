import React, { useState } from 'react';

const Basics = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoUpload = (e) => {
    setVideo(e.target.files[0]);
  };

  const categories = [
    'Art',
    'Comics',
    'Crafts',
    'Dance',
    'Design',
    'Fashion',
    'Film & Video',
    'Food',
    'Games',
    'Journalism',
    'Music',
    'Photography',
    'Publishing',
    'Technology',
    'Theater',
  ];

  const subcategories = {
    Art: ['Painting', 'Sculpture', 'Photography'],
    Comics: ['Graphic Novels', 'Webcomics'],
    Crafts: ['Knitting', 'Woodworking'],
    Dance: ['Ballet', 'Hip Hop'],
    Design: ['Graphic Design', 'Interior Design'],
    // Add more subcategories as needed
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Start with the Basics</h1>
      <p className="text-lg text-gray-600 mb-8">
        Make it easy for people to learn about your project.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Project Title</h2>
        <p className="text-gray-600 mb-4">
          Write a clear, brief title and subtitle to help people quickly understand your project. Both will appear on your project and pre-launch pages.
        </p>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="The Community Microscope Kit"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
          />
          <p className="text-gray-500 text-sm mt-1">{title.length}/60</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subtitle</h2>
        <p className="text-gray-600 mb-4">
          Explore the invisible microscopic world around you with an affordable microscope kit you construct yourself.
        </p>
        
        <div className="mb-6">
          <textarea
            placeholder="Explore the invisible microscopic world around you..."
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            rows="4"
          />
          <p className="text-gray-500 text-sm mt-1">{subtitle.length}/135</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select Category</h2>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setSubcategory(''); // Reset subcategory when category changes
          }}
          className="border border-gray-300 rounded-lg p-4 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {category && (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select Subcategory</h2>
            <select
              value={subcategory}
              onChange={(e) => setSubcategory(e.target.value)}
              className="border border-gray-300 rounded-lg p-4 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200"
            >
              <option value="">Select a subcategory</option>
              {subcategory[category]?.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </>
        )}

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Images</h2>
        <p className="text-gray-600 mb-4">
          Add images that clearly represent your project. Choose images that look good at different sizes.
        </p>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border border-gray-300 rounded-lg p-4 w-full mb-4 cursor-pointer"
        />
        <p className="text-gray-500 text-sm mb-4">
          It must be a JPG, PNG, GIF, or WEBP, no larger than 50 MB.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload a Video (optional)</h2>
        <p className="text-gray-600 mb-4">
          Add a video that describes your project. Tell people what you're raising funds to do, how you plan to make it happen, and why you care about this project.
        </p>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="border border-gray-300 rounded-lg p-4 w-full mb-4 cursor-pointer"
        />
        <p className="text-gray-500 text-sm mb-4">
          It must be a MOV, MPEG, AVI, MP4, 3GP, WMV, or FLV, no larger than 5120 MB.
        </p>

        <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 transition duration-300">
          Save Basics
        </button>
      </div>
    </div>
  );
};

export default Basics;
