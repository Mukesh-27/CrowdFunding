import React from 'react';
import { motion } from 'framer-motion';

const Rewardssec = () => {
  const rewards = [
    {
      id: 1,
      tier: "MORTAL TIER",
      price: 5,
      itemsIncluded: 1,
      description: "2 Hi-Res Digital Wallpapers of my \"Ancient Hellas\" map and \"Athena\" Illustrations",
      message: "A \"Blessed by the patrons\" Thank you message for supporting the project.",
      backers: 1,
      estimatedDelivery: "Apr 2025",
      image: "https://via.placeholder.com/600x400" // Replace with your actual image
    },
    {
      id: 2,
      tier: "HERO TIER",
      price: 15,
      itemsIncluded: 1,
      description: "Digital copy of the book + Previous tier rewards",
      backers: 0,
      estimatedDelivery: "Apr 2025"
    },
    {
      id: 3,
      tier: "DEMIGOD TIER",
      price: 40,
      itemsIncluded: 2,
      description: "Physical copy of the book + Digital copy + Previous tier rewards",
      backers: 0,
      estimatedDelivery: "Apr 2025"
    },
    {
      id: 4,
      tier: "OLYMPIAN TIER",
      price: 55,
      itemsIncluded: 6,
      description: "Signed physical copy + Art prints + All previous rewards",
      backers: 0,
      estimatedDelivery: "Apr 2025"
    },
    {
      id: 5,
      tier: "TITAN TIER",
      price: 95,
      itemsIncluded: 6,
      description: "Collector's Edition + Art book + All previous rewards",
      backers: 0,
      estimatedDelivery: "Apr 2025"
    },
    {
      id: 6,
      tier: "PRIMORDIAL TIER",
      price: 800,
      itemsIncluded: 6,
      description: "Everything + Custom art commission + Special mention",
      backers: 0,
      estimatedDelivery: "Apr 2025"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Available rewards</h2>
      <div className="space-y-6">
        {rewards.map((reward) => (
          <motion.div
            key={reward.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
          >
            {reward.id === 1 && reward.image && (
              <div className="relative h-[300px] w-full">
                <img
                  src={reward.image}
                  alt={reward.tier}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{reward.tier}</h3>
                  <p className="text-lg">{reward.description}</p>
                </div>
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    {reward.tier}
                  </h3>
                  <p className="text-gray-600">
                    {reward.itemsIncluded} {reward.itemsIncluded === 1 ? 'item' : 'items'} included
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">${reward.price}</p>
                  <p className="text-sm text-gray-500">USD</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700">{reward.description}</p>
                {reward.message && (
                  <p className="text-gray-700">{reward.message}</p>
                )}
                
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Backers: {reward.backers}</span>
                  <span>•</span>
                  <span>Estimated delivery: {reward.estimatedDelivery}</span>
                </div>

                <motion.button
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Pledge US$ {reward.price}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Rewardssec;
