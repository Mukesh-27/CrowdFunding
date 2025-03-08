import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
    const navigate = useNavigate();
    const [userType, setUserType] = useState('backer'); // 'backer' or 'creator'
    const [formData, setFormData] = useState({
        email: '',
        password: '',
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
        console.log(`${userType} login form submitted:`, formData);
        // Add your login logic here based on userType
    };

    return (
        <div className="mt-20 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl"
            >
                <div className="text-center">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                        Welcome Back!
                    </motion.h2>
                    <p className="mt-2 text-gray-600">Sign in to continue your journey</p>
                </div>

                {/* User Type Toggle */}
                <div className="flex justify-center space-x-4 mb-6">
                    <button
                        onClick={() => setUserType('backer')}
                        className={`px-6 py-2 rounded-full transition-all ${
                            userType === 'backer' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        Backer
                    </button>
                    <button
                        onClick={() => setUserType('creator')}
                        className={`px-6 py-2 rounded-full transition-all ${
                            userType === 'creator' 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                    >
                        Creator
                    </button>
                </div>

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="space-y-4"
                    >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder={`Enter your ${userType} email`}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={formData.password}
                                onChange={handleInputChange}
                                className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link to="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <button
                            type="submit"
                            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-xl text-white ${
                                userType === 'backer' 
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800' 
                                : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
                            } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transform transition-all duration-150 hover:scale-[1.02]`}
                        >
                            Sign in as {userType.charAt(0).toUpperCase() + userType.slice(1)}
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center"
                    >
                        <p className="mt-2 text-sm text-gray-600">
                            Want to {userType === 'backer' ? 'support' : 'create'} projects?{' '}
                            <button
                                type="button"
                                onClick={() => setUserType(userType === 'backer' ? 'creator' : 'backer')}
                                className="font-medium text-blue-600 hover:text-blue-500"
                            >
                                Switch to {userType === 'backer' ? 'creator' : 'backer'} login
                            </button>
                        </p>
                    </motion.div>
                </form>

                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-4 text-center text-sm text-gray-600"
                >
                    Don't have an account?{' '}
                    <Link to={`/signup?type=${userType}`} className="font-medium text-blue-600 hover:text-blue-500">
                        Sign up now as a {userType}
                    </Link>
                </motion.p>
            </motion.div>
        </div>
    );
};

export default Login;