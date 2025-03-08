import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project = {} }) => {
  const navigate = useNavigate();
  
  // Destructure project with default values to prevent undefined errors
  const {
    id = '1',
    title = 'Untitled Project',
    creator = 'Unknown Creator',
    image = 'https://via.placeholder.com/300',
    currentFunding = 0,
    fundingGoal = 100,
    daysLeft = 0
  } = project;
  
  // Calculate percentage with safeguards
  const percentFunded = fundingGoal > 0 ? (currentFunding / fundingGoal) * 100 : 0;

  const handleCardClick = () => {
    navigate(`/project/${id}`); // Navigate to ProjectDetails with project ID
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer"
      whileHover={{ scale: 1.05 }}
      onClick={handleCardClick} // Handle click to navigate
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{creator}</p>
        <div className="mt-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{daysLeft} days left</span>
            <span className="text-sm font-bold text-green-600">{percentFunded.toFixed(0)}% funded</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <motion.div 
              className="bg-blue-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(percentFunded, 100)}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 