import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faTag, faUsers, faBolt, faShip, faBook, faClock, faHeart } from '@fortawesome/free-solid-svg-icons';
import Rewardssec from './Rewardssec';
import Creatorspa from './Creatorspa';
import Faq from './Faq';
import Updates from './Update';
import Comments from './Comments';

const ProjectView = () => {
  const { projectId } = useParams(); // Get the project ID from the URL
  const navigate = useNavigate(); // Add this hook
  const [project, setProject] = useState({
    id: '1',
    title: 'Untitled Project',
    creator: 'Unknown Creator',
    image: 'https://via.placeholder.com/800x400',
    currentFunding: 30306,
    fundingGoal: 10000,
    daysLeft: 26,
    backers: 438,
    description: 'No description available.',
    category: 'Art',
    location: 'Austin, TX'
  });
  
  const [activeTab, setActiveTab] = useState('campaign');
  const [activeStorySection, setActiveStorySection] = useState(1);
  
  // Fetch project data based on projectId
  useEffect(() => {
    // This is where you would fetch the project data from your API
    // For now, we'll use a mock project
    const fetchProject = async () => {
      try {
        // Replace this with your actual API call
        // const response = await fetch(`/api/projects/${projectId}`);
        // const data = await response.json();
        // setProject(data);
        
        // Mock data for testing
        setProject({
          id: projectId,
          title: `Project ${projectId}`,
          creator: 'John Doe',
          image: 'https://via.placeholder.com/800x400',
          currentFunding: 5000,
          fundingGoal: 10000,
          daysLeft: 30,
          backers: 42,
          description: 'This is a sample project description. Replace this with actual project data from your API.',
          category: 'Art',
          location: 'Austin, TX'
        });
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };
    
    fetchProject();
  }, [projectId]);
  
  // Calculate percentage with safeguards
  const percentFunded = project.fundingGoal > 0 ? (project.currentFunding / project.fundingGoal) * 100 : 0;

  const storySections = {
    1: {
      title: "What is this?",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[400px] rounded-lg"
              src="https://www.youtube.com/embed/your-video-id"
              title="Project Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h3 className="text-2xl font-bold">Welcome to Our Project!</h3>
          <p className="text-lg text-gray-700">
            This is an innovative crowdfunding project that aims to revolutionize... [Your project description]
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-3">Key Features</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-3">Benefits</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Benefit 1</li>
                <li>Benefit 2</li>
                <li>Benefit 3</li>
              </ul>
            </div>
          </div>
        </motion.div>
      )
    },
    2: {
      title: "How Did I Make It?",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img 
              src="/path-to-making-process-image.jpg" 
              alt="Making Process" 
              className="rounded-lg shadow-md"
            />
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">The Creation Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Initial Concept</h4>
                    <p className="text-gray-600">Description of the initial concept phase...</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Development</h4>
                    <p className="text-gray-600">Details about the development process...</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="text-green-600 font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Final Product</h4>
                    <p className="text-gray-600">Information about the final product...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )
    },
    3: {
      title: "Reward Tiers + Prices",
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tier: "Early Bird",
                price: "$25",
                features: ["Feature 1", "Feature 2", "Feature 3"],
                highlight: false
              },
              {
                tier: "Premium",
                price: "$50",
                features: ["All Early Bird features", "Premium Feature 1", "Premium Feature 2"],
                highlight: true
              },
              {
                tier: "Collector's Edition",
                price: "$100",
                features: ["All Premium features", "Exclusive Feature 1", "Exclusive Feature 2"],
                highlight: false
              }
            ].map((tier, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg ${
                  tier.highlight 
                    ? 'bg-green-50 border-2 border-green-500' 
                    : 'bg-white border border-gray-200'
                }`}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-xl font-bold mb-2">{tier.tier}</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">{tier.price}</p>
                <ul className="space-y-2">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Select Reward
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )
    },
    // Add more sections following the same pattern...
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent z-10" />
        <motion.div 
          className="relative h-[70vh] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Project Info Overlay */}
        <div className="absolute inset-0 z-20">
          <div className="max-w-6xl mx-auto px-4 h-full flex flex-col justify-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white space-y-6 max-w-2xl"
            >
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-green-500 px-3 py-1 rounded-full">
                  <FontAwesomeIcon icon={faTag} className="mr-2" />
                  {project.category}
                </span>
                <span>
                  <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                  {project.location}
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-tight">{project.title}</h1>
              <p className="text-xl text-gray-200">{project.description}</p>

              {/* Creator Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                  <img src="https://via.placeholder.com/48" alt="Creator" />
                </div>
                <div>
                  <p className="text-gray-300">By {project.creator}</p>
                  <p className="text-sm text-gray-400">First-time creator</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Funding Stats */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md z-30"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-2">
                <h3 className="text-4xl font-bold text-green-600">
                  US$ {project.currentFunding.toLocaleString()}
                </h3>
                <p className="text-gray-600">pledged of US$ {project.fundingGoal.toLocaleString()} goal</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-4xl font-bold">
                  <FontAwesomeIcon icon={faUsers} className="text-3xl mr-2 text-blue-500" />
                  {project.backers}
                </h3>
                <p className="text-gray-600">backers</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-4xl font-bold">{project.daysLeft}</h3>
                <p className="text-gray-600">days to go</p>
              </div>

              <div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/payment/${projectId}`)}
                  className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
                >
                  Back this project
                </motion.button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6">
              <motion.div 
                className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <motion.div 
                  className="h-full bg-green-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min((project.currentFunding / project.fundingGoal) * 100, 100)}%` }}
                  transition={{ delay: 1.2, duration: 1 }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-white shadow-md z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            <motion.nav className="flex space-x-8 py-4">
              {[
                { id: 'campaign', label: 'Campaign', icon: faBolt },
                { id: 'rewards', label: 'Rewards', icon: faHeart },
                { id: 'creator', label: 'Creator', icon: faBook },
                { id: 'faq', label: 'FAQ', icon: faShip, count: '7' },
                { id: 'updates', label: 'Updates', icon: faClock, count: '1' },
                { id: 'comments', label: 'Comments', count: '42' },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                    activeTab === tab.id
                      ? 'bg-green-50 text-green-600 font-semibold'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FontAwesomeIcon icon={tab.icon} className="text-sm" />
                  <span>{tab.label}</span>
                  {tab.count && (
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                      {tab.count}
                    </span>
                  )}
                </motion.button>
              ))}
            </motion.nav>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content Column */}
          <div className="lg:col-span-2">
            {activeTab === 'campaign' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Story Navigation */}
                <div className="bg-white rounded-lg shadow-sm p-4">
                  <h2 className="text-2xl font-bold mb-4">Story</h2>
                  <div className="space-y-4">
                    {[
                      { id: 1, title: '⚡ What is this?' },
                      { id: 2, title: '⚡ How Did I Make It?' },
                      { id: 3, title: '⚡ Reward Tiers + Prices' },
                      { id: 4, title: '⚡ Stretch Goals (upgrades)' },
                      { id: 5, title: '⚡ A Little Boy with a Dream' },
                      { id: 6, title: '⚡ Funding' },
                      { id: 7, title: '⚡ Shipping Costs' },
                      { id: 8, title: '⚡ Book Production Timeline' },
                      { id: 9, title: '⚡ Myths Are Meant to Be Shared' },
                      { id: 10, title: '⚡ Sneak Peak 2026' },
                    ].map((item) => (
                      <motion.div
                        key={item.id}
                        className={`p-3 rounded-lg cursor-pointer transition-all ${
                          activeStorySection === item.id ? 'bg-green-50 text-green-600' : 'hover:bg-gray-50'
                        }`}
                        whileHover={{ x: 10 }}
                        onClick={() => setActiveStorySection(item.id)}
                      >
                        <span className="font-medium">{item.title}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Main Story Content */}
                <motion.div
                  className="bg-white rounded-lg shadow-sm p-6 space-y-6"
                  key={activeStorySection}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {storySections[activeStorySection]?.content || (
                    <div className="text-center py-8">
                      <p className="text-gray-500">Content coming soon...</p>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            )}
            {activeTab === 'rewards' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Rewardssec />
              </motion.div>
            )}
            {activeTab === 'creator' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3"
              >
                <Creatorspa />
              </motion.div>
            )}
            {activeTab === 'faq' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3"
              >
                <Faq />
              </motion.div>
            )}
            {activeTab === 'updates' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3"
              >
                <Updates />
              </motion.div>
            )}
            {activeTab === 'comments' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-3"
              >
                <Comments projectId={projectId} />
              </motion.div>
            )}
          </div>

          {/* Right Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="sticky top-24 space-y-6">
              {/* Support Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold mb-4">Support</h3>
                <motion.button
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Make a pledge without a reward
                </motion.button>
              </div>

              {/* Creator Card */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                      src="https://via.placeholder.com/64"
                      alt="Creator"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{project.creator}</h3>
                    <p className="text-gray-600">First created • 4 backed</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Hello there! I'm an award-winning Illustrator hoping to breath fresh life into the magic and mystery of ancient...
                </p>
                <button className="text-green-600 font-medium mt-2">See more</button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Similar Projects Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Similar projects to check out</h2>
            <motion.button
              whileHover={{ scale: 1.02 }}
              className="text-green-600 font-medium hover:text-green-700"
            >
              See more
            </motion.button>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Similar Project Card 1 */}
            <motion.div
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/400x300"
                  alt="ZAMANORA"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                    🌟 Project We Love
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src="https://via.placeholder.com/32" alt="Creator" />
                  </div>
                  <h3 className="font-bold text-lg">ZAMANORA: Ballad of the Witch</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">Eren Chronicles</p>
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <motion.div 
                      className="bg-green-600 h-1 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '75%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">26 days left</span>
                    <span className="font-medium">750% funded</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Similar Project Card 2 */}
            <motion.div
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/400x300"
                  alt="Anira & the Spirit of Magic"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                    🌟 Project We Love
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src="https://via.placeholder.com/32" alt="Creator" />
                  </div>
                  <h3 className="font-bold text-lg">Anira & the Spirit of Magic</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">Naomi VanDoren</p>
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <motion.div 
                      className="bg-green-600 h-1 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '113%' }}
                      transition={{ duration: 1, delay: 0.6 }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">22 days left</span>
                    <span className="font-medium">113% funded</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Similar Project Card 3 */}
            <motion.div
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/400x300"
                  alt="Cathedral"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                    🌟 Project We Love
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src="https://via.placeholder.com/32" alt="Creator" />
                  </div>
                  <h3 className="font-bold text-lg">Cathedral, an illustrated tale</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">Caurette</p>
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <motion.div 
                      className="bg-green-600 h-1 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '602%' }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">6 days left</span>
                    <span className="font-medium">602% funded</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Similar Project Card 4 */}
            <motion.div
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="relative">
                <img 
                  src="https://via.placeholder.com/400x300"
                  alt="The Heir Apparent"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm font-medium">
                    🌟 Project We Love
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src="https://via.placeholder.com/32" alt="Creator" />
                  </div>
                  <h3 className="font-bold text-lg">The Heir Apparent: A Fae Adventure</h3>
                </div>
                <p className="text-gray-600 text-sm mb-2">Megan Haskell</p>
                <div className="space-y-2">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <motion.div 
                      className="bg-green-600 h-1 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '145%' }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">5 days left</span>
                    <span className="font-medium">145% funded</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
