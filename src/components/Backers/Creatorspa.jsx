import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Creatorspa = () => {
  const creatorInfo = {
    name: "Tyler Miles Lockett",
    username: "tyler miles lockett",
    avatar: "https://via.placeholder.com/200", // Replace with actual creator image
    stats: {
      createdProjects: 1,
      backedProjects: 4,
      lastLogin: "Mar 8 2025",
      accountCreated: "Mar 2023"
    },
    bio: "Hello there! I'm Tyler Miles Lockett, an award winning Illustrator hoping to breath fresh life into the magic and mystery of ancient mythology and classical literature.",
    location: "Austin, TX",
    links: {
      newsletter: "https://linktr.ee/tylermileslockett",
      website: "linktr.ee/tylermileslockett"
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-sm p-8"
      >
        <h1 className="text-3xl font-bold mb-8">About the creator</h1>

        {/* Creator Profile Header */}
        <div className="flex items-start space-x-6 mb-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-32 h-32 rounded-full overflow-hidden"
          >
            <img
              src={creatorInfo.avatar}
              alt={creatorInfo.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{creatorInfo.name}</h2>
            <div className="flex items-center space-x-2 text-gray-600 mb-4">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {creatorInfo.username}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold">{creatorInfo.stats.createdProjects}</h3>
            <p className="text-gray-600">created project</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold">{creatorInfo.stats.backedProjects}</h3>
            <p className="text-gray-600">backed projects</p>
          </div>
          <div className="text-center">
            <h3 className="text-gray-700">{creatorInfo.stats.lastLogin}</h3>
            <p className="text-gray-600">last login</p>
          </div>
          <div className="text-center">
            <h3 className="text-gray-700">{creatorInfo.stats.accountCreated}</h3>
            <p className="text-gray-600">account created</p>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8">
          <p className="text-gray-700 text-lg leading-relaxed">
            {creatorInfo.bio}
          </p>
        </div>

        {/* Links and Location */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{creatorInfo.location}</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-700">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>follow my free email newsletter, Etsy print shop, and socials:</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-700">
            <FontAwesomeIcon icon={faLink} />
            <a 
              href={creatorInfo.links.website}
              className="text-green-600 hover:text-green-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {creatorInfo.links.website}
            </a>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex space-x-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
          >
            Message me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
          >
            {creatorInfo.links.website}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FontAwesomeIcon icon={faLocationDot} className="text-gray-700" />
          </motion.button>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8"
      >
        
        {/* Add your similar projects grid here */}
      </motion.div>
    </div>
  );
};

export default Creatorspa;
