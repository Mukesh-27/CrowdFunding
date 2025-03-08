import React from 'react';

const Plan = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Milestones</h1>
      <p className="text-lg text-gray-600 mb-8">
        Read through the different stages of product development and mark what you've completed so far. Be honest about your progress. 
        These milestones give you a sense of what we and your backers expect at each stage of the project.
      </p>
      <p className="text-gray-600 mb-8">
        You won't be able to edit them after you launch your project.
      </p>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Idea</h2>
        <p className="text-gray-600 mb-4">
          You know your product's purpose and have thought about what you'll need to make it. Backer support will let you finish your research, and decide if this is a project you can and want to bring to life.
        </p>
        
        <h3 className="font-semibold text-gray-800 mb-2">What you should have:</h3>
        <ul className="list-disc list-inside mb-4">
          <li>A detailed description of your product idea</li>
          <li>A high-level development plan</li>
        </ul>

        <h3 className="font-semibold text-gray-800 mb-2">What we and your backers expect:</h3>
        <ul className="list-disc list-inside">
          <li>A business plan that includes:</li>
          <ul className="list-disc list-inside">
            <li>How this product solves a problem</li>
            <li>Who benefits from it</li>
            <li>Your budget and distribution plan</li>
            <li>Potential risks, including legal and regulatory risks</li>
            <li>Early sketches or mock-ups of your product</li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default Plan;
