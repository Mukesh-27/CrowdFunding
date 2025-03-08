import React, { useState } from 'react';

const Projectimg = () => {
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleVideoUpload = (e) => {
    setVideo(e.target.files[0]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Project Image</h1>
      <p className="text-lg text-gray-600 mb-8">
        Add an image that clearly represents your project. Choose one that looks good at different sizes—this will appear on your project page.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Upload an Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="w-full border border-gray-300 rounded-lg p-4 mb-4 cursor-pointer"
        />
        <p className="text-gray-500 text-sm">
          Drop an image here, or select a file. It must be a JPG, PNG, GIF, or WEBP, no larger than 50 MB.
        </p>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-6">Project Video (optional)</h1>
      <p className="text-lg text-gray-600 mb-8">
        Add a video that describes your project. Tell people what you're raising funds to do, how you plan to make it happen, who you are, and why you care about this project.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <label className="block text-lg font-semibold text-gray-800 mb-2">Upload a Video</label>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="w-full border border-gray-300 rounded-lg p-4 mb-4 cursor-pointer"
        />
        <p className="text-gray-500 text-sm">
          Drop a video here, or select a file. It must be a MOV, MPEG, AVI, MP4, 3GP, WMV, or FLV, no larger than 5120 MB.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          80% of successful projects have a video. Make a great one, regardless of your budget.
        </p>
      </div>
    </div>
  );
};

export default Projectimg;
