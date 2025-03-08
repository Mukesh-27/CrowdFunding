import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faHeart as faHeartSolid, faShare, faComment, faBell, faBellSlash } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-hot-toast';

const Updates = () => {
  // State management
  const [updates, setUpdates] = useState([
    {
      id: 1,
      title: "FULLY funded within the first hour! Woohoo!!",
      author: "Tyler Miles Lockett",
      authorRole: "Creator",
      date: "March 5, 2025",
      content: `
        <div class="space-y-6">
          <div class="relative w-full h-[400px] rounded-lg overflow-hidden">
            <img 
              src="https://via.placeholder.com/1200x600" 
              alt="Project Banner" 
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 text-white">
              <h3 class="text-2xl font-bold">FROM AWARD-WINNING ILLUSTRATOR TYLER MILES LOCKETT</h3>
              <p class="text-lg mt-2">Over 130 FULL-PAGE ILLUSTRATIONS!</p>
            </div>
          </div>
          <p class="text-lg text-gray-700 leading-relaxed">
            I am absolutely blown away by your incredible support! We hit our funding goal in less than an hour, 
            and the numbers just keep climbing. This is beyond my wildest dreams, and I cannot thank you enough 
            for believing in this project.
          </p>
          <div class="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 class="font-bold text-xl mb-4 text-green-800">What's Next?</h4>
            <ul class="space-y-3 text-green-700">
              <li class="flex items-start space-x-2">
                <span class="text-green-500 font-bold">•</span>
                <span>Stretch goals announcement coming soon!</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-green-500 font-bold">•</span>
                <span>Production timeline updates</span>
              </li>
              <li class="flex items-start space-x-2">
                <span class="text-green-500 font-bold">•</span>
                <span>Special behind-the-scenes content</span>
              </li>
            </ul>
          </div>
        </div>
      `,
      likes: 234,
      comments: 42,
      isLiked: false,
    },
    {
      id: 2,
      title: "WE FUNDED IN 1 HOUR!! THATS AMAZINGGGGG!!",
      author: "Tyler Miles Lockett",
      authorRole: "Creator",
      date: "March 5, 2025",
      content: `
        <div class="space-y-6">
          <h2 class="text-2xl font-bold text-gray-900">Hey everyone,</h2>
          
          <div class="bg-green-50 p-6 rounded-lg border border-green-200">
            <p class="text-xl font-bold text-green-800 mb-4">WE FUNDED IN 1 HOUR!! THATS AMAZINGGGGG!!</p>
          </div>

          <div class="prose max-w-none text-gray-700 space-y-6">
            <p class="text-lg">
              I just want to send a massive internet hug to all of you for jumping on my Kickstarter launch so quickly.
              Seeing the outpouring of support has been really emotional—I've been deep in the trenches building this
              book for years, and finally bringing it out of my little Smeagol/hermit cave into the light has been so
              uplifting. My precioussss!
            </p>

            <div class="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <p class="text-lg font-semibold text-yellow-800">
                As a reminder, anyone who pledges within the first 48 hours gets a
                <span class="font-bold"> $5 EARLY BIRD discount </span>
                OFF their pledge tier!
              </p>
            </div>

            <p class="text-lg">
              Please share this Kickstarter with your friends, family, mail carriers, and even that long-lost first-grade
              teacher—let's spread the word far and wide!
            </p>

            <div class="mt-8">
              <p class="text-lg font-medium">Riding this wave of glory together,</p>
              <p class="text-xl font-bold text-green-600">Tyler</p>
            </div>
          </div>
        </div>
      `,
      likes: 18,
      comments: 5,
      isLiked: false,
    }
  ]);

  const [isFollowing, setIsFollowing] = useState(false);
  const [showComments, setShowComments] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Handle like button click
  const handleLike = useCallback((updateId) => {
    setUpdates(prevUpdates => prevUpdates.map(update => {
      if (update.id === updateId) {
        return {
          ...update,
          likes: update.isLiked ? update.likes - 1 : update.likes + 1,
          isLiked: !update.isLiked
        };
      }
      return update;
    }));
  }, []);

  // Handle follow/unfollow
  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
    toast.success(isFollowing ? 'Unfollowed project updates' : 'Following project updates');
  };

  // Handle share
  const handleShare = async (updateId) => {
    try {
      const update = updates.find(u => u.id === updateId);
      if (navigator.share) {
        await navigator.share({
          title: update.title,
          text: `Check out this update: ${update.title}`,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support native sharing
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      }
    } catch (error) {
      toast.error('Failed to share update');
    }
  };

  // Handle comment section toggle
  const handleCommentToggle = (updateId) => {
    setShowComments(prev => ({
      ...prev,
      [updateId]: !prev[updateId]
    }));
  };

  // Load more updates
  const handleLoadMore = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPage(prev => prev + 1);
      // Here you would typically fetch more updates from your API
      toast.success('More updates loaded');
    } catch (error) {
      toast.error('Failed to load more updates');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Updates Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Project Updates</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleFollowToggle}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
              isFollowing 
                ? 'bg-green-100 text-green-600' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            <FontAwesomeIcon icon={isFollowing ? faBell : faBellSlash} />
            <span>{isFollowing ? 'Following' : 'Follow updates'}</span>
          </motion.button>
        </div>

        {/* Updates List */}
        <AnimatePresence>
          {updates.map((update) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {/* Update Header */}
              <div className="border-b border-gray-100 p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src="https://via.placeholder.com/48"
                      alt={update.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{update.title}</h2>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <span>{update.author}</span>
                      <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs">
                        {update.authorRole}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <FontAwesomeIcon icon={faClock} className="mr-1" />
                        {update.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Update Content */}
              <div className="p-6">
                <div 
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: update.content }}
                />
              </div>

              {/* Update Footer */}
              <div className="border-t border-gray-100 p-6">
                <div className="flex items-center space-x-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleLike(update.id)}
                    className={`flex items-center space-x-2 ${
                      update.isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
                    }`}
                  >
                    <FontAwesomeIcon icon={update.isLiked ? faHeartSolid : faHeartRegular} />
                    <span>{update.likes}</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCommentToggle(update.id)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-green-600"
                  >
                    <FontAwesomeIcon icon={faComment} />
                    <span>{update.comments}</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleShare(update.id)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-green-600"
                  >
                    <FontAwesomeIcon icon={faShare} />
                    <span>Share</span>
                  </motion.button>
                </div>

                {/* Comments Section */}
                <AnimatePresence>
                  {showComments[update.id] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 border-t border-gray-100 pt-6"
                    >
                      {/* Add your comments component here */}
                      <div className="space-y-4">
                        <textarea
                          placeholder="Write a comment..."
                          className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          rows="3"
                        />
                        <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                          Post Comment
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Load More Updates Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLoadMore}
          disabled={loading}
          className={`w-full py-4 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Loading...' : 'Load more updates'}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Updates;
