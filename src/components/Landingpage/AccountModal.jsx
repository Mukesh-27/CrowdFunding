import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobe, faRocket, faHandHoldingHeart, faCreditCard } from '@fortawesome/free-solid-svg-icons';

const AccountModal = () => {
    const [accountType, setAccountType] = useState('creator');
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        location: '',
        bio: '',
        website: '',
        newsletter: false,
        socialLinks: {
            twitter: '',
            instagram: '',
            linkedin: ''
        },
        // Backer specific fields
        paymentMethod: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        billingAddress: '',
        preferredCategories: [],
        notificationPreferences: {
            projectUpdates: true,
            newProjects: true,
            successfulFunding: true
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: checked
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: checked
            }));
        }
    };

    const handleCategoryChange = (category) => {
        setFormData(prev => ({
            ...prev,
            preferredCategories: prev.preferredCategories.includes(category)
                ? prev.preferredCategories.filter(c => c !== category)
                : [...prev.preferredCategories, category]
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        console.log('Form submitted:', formData);
        
        // Mock account creation date and stats
        const mockData = {
            ...formData,
            accountCreated: new Date(),
            lastLogin: new Date(),
            createdProjects: 0,
            backedProjects: 0
        };
        
        console.log('Account created with:', mockData);
    };

    const categories = [
        'Art', 'Comics', 'Crafts', 'Dance', 'Design', 'Fashion', 'Film & Video',
        'Food', 'Games', 'Journalism', 'Music', 'Photography', 'Publishing',
        'Technology', 'Theater'
    ];

    return (
        <div className="mt-25 min-h-[calc(100vh-4rem)] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl w-full space-y-6 bg-white p-8 rounded-2xl shadow-xl"
            >
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                    >
                        {accountType === 'creator' ? 'Create Your Creator Account' : 'Join as a Backer'}
                    </motion.h2>
                    <p className="mt-2 text-gray-600">
                        {accountType === 'creator' 
                            ? 'Join our community of innovators and bring your ideas to life'
                            : 'Support amazing projects and be part of something extraordinary'}
                    </p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Choose Account Type</h3>
                    <div className="grid grid-cols-2 gap-6">
                        {[
                            { type: 'creator', icon: faRocket, label: 'Creator' },
                            { type: 'backer', icon: faHandHoldingHeart, label: 'Backer' }
                        ].map(({ type, icon, label }) => (
                            <button
                                key={type}
                                className={`p-6 rounded-xl border-2 transition-all duration-200 flex flex-col items-center justify-center
                                    ${accountType === type 
                                        ? 'border-blue-600 bg-blue-50 text-blue-600' 
                                        : 'border-gray-200 hover:border-blue-400'}`}
                                onClick={() => setAccountType(type)}
                            >
                                <FontAwesomeIcon icon={icon} className="text-2xl mb-3" />
                                <div className="capitalize text-lg">{label}</div>
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
                        {/* Basic Information */}
                        <div className="col-span-2 grid grid-cols-2 gap-6">
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
                                    Username <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Choose a username"
                                    required
                                    value={formData.username}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="col-span-2 grid grid-cols-2 gap-6">
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
                                    Location <span className="text-red-500">*</span>
                                </label>
                                <div className="relative">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="text"
                                        name="location"
                                        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="e.g., Austin, TX"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        {accountType === 'creator' ? (
                            <>
                                {/* Creator specific fields */}
                                <div className="col-span-2">
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Bio <span className="text-gray-500">(Tell us about yourself)</span>
                                    </label>
                                    <textarea
                                        name="bio"
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Hello there! I'm a creator hoping to breathe fresh life into the magic and mystery of ancient mythology and classical literature."
                                        value={formData.bio}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>

                                <div className="col-span-2 grid grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Website
                                        </label>
                                        <div className="relative">
                                            <FontAwesomeIcon icon={faGlobe} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                            <input
                                                type="url"
                                                name="website"
                                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="https://your-website.com"
                                                value={formData.website}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 text-sm font-medium mb-2">
                                            Newsletter
                                        </label>
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="newsletter"
                                                id="newsletter"
                                                checked={formData.newsletter}
                                                onChange={handleCheckboxChange}
                                                className="rounded text-blue-600 focus:ring-blue-500"
                                            />
                                            <label htmlFor="newsletter" className="text-gray-600">
                                                Subscribe to my free email newsletter
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Backer specific fields */}
                                <div className="col-span-2">
                                    <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
                                    <div className="grid grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-gray-700 text-sm font-medium mb-2">
                                                Card Number <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <FontAwesomeIcon icon={faCreditCard} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                                <input
                                                    type="text"
                                                    name="cardNumber"
                                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="1234 5678 9012 3456"
                                                    required={accountType === 'backer'}
                                                    value={formData.cardNumber}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                                    Expiry Date <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="expiryDate"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="MM/YY"
                                                    required={accountType === 'backer'}
                                                    value={formData.expiryDate}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                                    CVV <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="password"
                                                    name="cvv"
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="123"
                                                    maxLength="3"
                                                    required={accountType === 'backer'}
                                                    value={formData.cvv}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-2">
                                    <label className="block text-gray-700 text-sm font-medium mb-2">
                                        Billing Address <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="billingAddress"
                                        rows="3"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Enter your complete billing address"
                                        required={accountType === 'backer'}
                                        value={formData.billingAddress}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>

                                <div className="col-span-2">
                                    <h3 className="text-lg font-semibold mb-4">Interests</h3>
                                    <div className="grid grid-cols-3 gap-3">
                                        {categories.map(category => (
                                            <label key={category} className="flex items-center space-x-2">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.preferredCategories.includes(category)}
                                                    onChange={() => handleCategoryChange(category)}
                                                    className="rounded text-blue-600 focus:ring-blue-500"
                                                />
                                                <span className="text-gray-700">{category}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="col-span-2">
                                    <h3 className="text-lg font-semibold mb-4">Notification Preferences</h3>
                                    <div className="space-y-3">
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="notificationPreferences.projectUpdates"
                                                checked={formData.notificationPreferences.projectUpdates}
                                                onChange={handleCheckboxChange}
                                                className="rounded text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="text-gray-700">Project Updates</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="notificationPreferences.newProjects"
                                                checked={formData.notificationPreferences.newProjects}
                                                onChange={handleCheckboxChange}
                                                className="rounded text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="text-gray-700">New Projects in Your Categories</span>
                                        </label>
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                name="notificationPreferences.successfulFunding"
                                                checked={formData.notificationPreferences.successfulFunding}
                                                onChange={handleCheckboxChange}
                                                className="rounded text-blue-600 focus:ring-blue-500"
                                            />
                                            <span className="text-gray-700">Successful Funding Notifications</span>
                                        </label>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Password */}
                        <div className="col-span-2 grid grid-cols-2 gap-6">
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
                </form>
            </motion.div>
        </div>
    );
};

export default AccountModal;
