// Comments.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faHeart, faClock } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

const Comments = ({ projectId }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Dan Cole",
      avatar: "https://via.placeholder.com/40",
      content: "I've been looking for something like this for a very long time. So excited to use this to introduce my kids to mythology.",
      timeAgo: "about 5 hours ago",
      likes: 12,
      isLiked: false,
      replies: [
        {
          id: 101,
          author: "Tyler Miles Lockett",
          avatar: "https://via.placeholder.com/40",
          content: "Happy to hear it Dan! It's my goal to create an enchanting book that is treasured in families for generations!",
          timeAgo: "about 1 hour ago",
          isCreator: true,
          likes: 8,
          isLiked: false,
        }
      ]
    },
    {
      id: 2,
      author: "Molly",
      avatar: "https://via.placeholder.com/40",
      content: "As a long time fan of Tyler's work, I am thrilled to see this backed and funded!! Cannot wait for the book to get here and to watch your dreams come true 🥳",
      timeAgo: "about 10 hours ago",
      likes: 15,
      isLiked: false,
      replies: [
        {
          id: 201,
          author: "Tyler Miles Lockett",
          avatar: "https://via.placeholder.com/40",
          content: "What a sweet comment, thank you Molly! All you supporters here are making this possible, teamwork makes the dreamwork! xoxo",
          timeAgo: "about 10 hours ago",
          isCreator: true,
          likes: 10,
          isLiked: false,
        }
      ]
    }
  ]);

  // Add useEffect to fetch comments when projectId changes
  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Here you would fetch comments from your API using projectId
        // For now, we'll use the mock data already in state
        console.log(`Fetching comments for project ${projectId}`);
      } catch (error) {
        console.error('Error fetching comments:', error);
        toast.error('Failed to load comments');
      }
    };

    fetchComments();
  }, [projectId]);

  const [isBacker, setIsBacker] = useState(false); // This would come from your auth context
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyContent, setReplyContent] = useState('');

  const handleLike = (commentId, isReply = false, parentId = null) => {
    setComments(prevComments => {
      return prevComments.map(comment => {
        if (isReply) {
          if (comment.id === parentId) {
            return {
              ...comment,
              replies: comment.replies.map(reply => {
                if (reply.id === commentId) {
                  return {
                    ...reply,
                    likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                    isLiked: !reply.isLiked
                  };
                }
                return reply;
              })
            };
          }
          return comment;
        }
        
        if (comment.id === commentId) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked
          };
        }
        return comment;
      });
    });
  };

  const handleComment = () => {
    if (!isBacker) {
      toast.error('Only backers can post comments');
      return;
    }
    if (!newComment.trim()) {
      toast.error('Please write something before posting');
      return;
    }

    const newCommentObj = {
      id: Date.now(),
      author: "Current User", // This would come from your auth context
      avatar: "https://via.placeholder.com/40",
      content: newComment,
      timeAgo: "just now",
      likes: 0,
      isLiked: false,
      replies: []
    };

    setComments(prev => [newCommentObj, ...prev]);
    setNewComment('');
    toast.success('Comment posted successfully!');
  };

  const handleReply = (commentId) => {
    if (!isBacker) {
      toast.error('Only backers can post replies');
      return;
    }
    if (!replyContent.trim()) {
      toast.error('Please write something before posting');
      return;
    }

    const newReply = {
      id: Date.now(),
      author: "Current User", // This would come from your auth context
      avatar: "https://via.placeholder.com/40",
      content: replyContent,
      timeAgo: "just now",
      isCreator: false,
      likes: 0,
      isLiked: false
    };

    setComments(prevComments => {
      return prevComments.map(comment => {
        if (comment.id === commentId) {
          return {
            ...comment,
            replies: [...comment.replies, newReply]
          };
        }
        return comment;
      });
    });

    setReplyingTo(null);
    setReplyContent('');
    toast.success('Reply posted successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Backer Only Notice */}
      <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-600">
        Only backers can post comments.
      </div>

      {/* Comment Input */}
      {isBacker ? (
        <div className="space-y-4">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            rows="3"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleComment}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Post Comment
          </motion.button>
        </div>
      ) : (
        <div className="text-center p-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toast.error('Please back this project to comment')}
            className="bg-gray-100 text-gray-600 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Back this project to comment
          </motion.button>
        </div>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Main Comment */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-start space-x-4">
                <img
                  src={comment.avatar}
                  alt={comment.author}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">{comment.author}</span>
                    <span className="text-gray-500 text-sm">{comment.timeAgo}</span>
                  </div>
                  <p className="mt-2 text-gray-700">{comment.content}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleLike(comment.id)}
                      className={`flex items-center space-x-2 ${
                        comment.isLiked ? 'text-red-500' : 'text-gray-500'
                      }`}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                      <span>{comment.likes}</span>
                    </motion.button>
                    {isBacker && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setReplyingTo(comment.id)}
                        className="flex items-center space-x-2 text-gray-500"
                      >
                        <FontAwesomeIcon icon={faReply} />
                        <span>Reply</span>
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Reply Input */}
            <AnimatePresence>
              {replyingTo === comment.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-12 space-y-4"
                >
                  <textarea
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    placeholder="Write a reply..."
                    className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    rows="2"
                  />
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleReply(comment.id)}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Post Reply
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setReplyingTo(null)}
                      className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="ml-12 space-y-4">
                {comment.replies.map((reply) => (
                  <motion.div
                    key={reply.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-gray-50 rounded-lg p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <img
                        src={reply.avatar}
                        alt={reply.author}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{reply.author}</span>
                          {reply.isCreator && (
                            <span className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs">
                              Creator
                            </span>
                          )}
                          <span className="text-gray-500 text-sm">{reply.timeAgo}</span>
                        </div>
                        <p className="mt-2 text-gray-700">{reply.content}</p>
                        <div className="mt-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleLike(reply.id, true, comment.id)}
                            className={`flex items-center space-x-2 ${
                              reply.isLiked ? 'text-red-500' : 'text-gray-500'
                            }`}
                          >
                            <FontAwesomeIcon icon={faHeart} />
                            <span>{reply.likes}</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

Comments.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default Comments;