import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AccountModal = () => {
    const navigate = useNavigate();
    const [accountType, setAccountType] = useState('creator');
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="mt-25 min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl w-full space-y-6 bg-white p-8 rounded-2xl shadow-xl"
            >
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                        Create Account
                    </motion.h2>
                    <p className="mt-2 text-gray-600">Join our community of innovators</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Choose Account Type</h3>
                    <div className="grid grid-cols-3 gap-6">
                        {['creator', 'backer', 'admin'].map((type) => (
                            <button
                                key={type}
                                className={`p-6 rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center
                                    ${accountType === type 
                                        ? 'border-blue-600 bg-blue-50 text-blue-600' 
                                        : 'border-gray-200 hover:border-blue-400'}`}
                                onClick={() => setAccountType(type)}
                            >
                                <i className={`fas fa-${
                                    type === 'creator' ? 'rocket' :
                                    type === 'backer' ? 'hand-holding-heart' :
                                    'user-shield'
                                } text-2xl mb-3`}></i>
                                <div className="capitalize text-lg">{type}</div>
                            </button>
                        ))}
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your full name"
                                required
                                value={formData.fullName}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Create a password"
                                required
                                minLength={8}
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                Confirm Password <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Confirm your password"
                                required
                                minLength={8}
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="pt-4"
                    >
                        <button 
                            type="submit"
                            className="w-full py-4 px-6 border border-transparent rounded-xl text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-150 hover:scale-[1.02] text-lg"
                        >
                            Create Account
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            {['google', 'facebook', 'apple'].map((provider) => (
                                <button
                                    key={provider}
                                    type="button"
                                    className="w-full inline-flex justify-center py-3 px-4 rounded-xl border border-gray-300 bg-white hover:bg-gray-50 transform transition-all duration-150 hover:scale-[1.02]"
                                >
                                    <i className={`fab fa-${provider} text-xl text-gray-700`}></i>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </form>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-center text-gray-600"
                >
                    Already have an account?{' '}
                    <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">
                        Sign in
                    </Link>
                </motion.p>
            </motion.div>
        </div>
    );
};

export default AccountModal;
