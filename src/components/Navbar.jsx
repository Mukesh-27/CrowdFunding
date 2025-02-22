import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navigationIcons = {
    explore: "fas fa-compass",
    startProject: "fas fa-rocket",
    aboutUs: "fas fa-info-circle",
    blog: "fas fa-blog",
    search: "fas fa-search",
    userAccount: "fas fa-user-circle",
    signIn: "fas fa-sign-in-alt",
    createAccount: "fas fa-user-plus"
};

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    
    const scrollToSection = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowAccountMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        setShowAccountMenu(false);
    }, [location.pathname]);

    const handleSearch = () => {
        console.log("Searching for:", searchQuery);
    };

    const handleAccountClick = () => {
        setShowAccountMenu(!showAccountMenu);
    };

    return (
        <nav className="fixed top-0 w-full bg-white z-50 transition-all duration-300 shadow-sm py-4">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center space-x-8">
                    <Link 
                        to="/" 
                        className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 hover:scale-105"
                    >
                        FUNDIFY
                    </Link>
                    <div className="hidden md:flex space-x-4">
                        <button 
                            onClick={() => scrollToSection('explore-categories')}
                            className="text-gray-600 hover:text-blue-600 whitespace-nowrap !rounded-button transition-all duration-300 hover:scale-105 hover:shadow-md px-4 py-2"
                        >
                            <i className={navigationIcons.explore + " mr-2"}></i>
                            Explore
                        </button>
                        <button 
                            onClick={() => scrollToSection('start-project')}
                            className="text-gray-600 hover:text-blue-600 whitespace-nowrap !rounded-button transition-all duration-300 hover:scale-105 hover:shadow-md px-4 py-2"
                        >
                            <i className={navigationIcons.startProject + " mr-2"}></i>
                            Start a Project
                        </button>
                        <button 
                            onClick={() => scrollToSection('about-section')}
                            className="text-gray-600 hover:text-blue-600 whitespace-nowrap !rounded-button transition-all duration-300 hover:scale-105 hover:shadow-md px-4 py-2"
                        >
                            <i className={navigationIcons.aboutUs + " mr-2"}></i>
                            About Us
                        </button>
                        <button 
                            onClick={() => scrollToSection('blog-section')}
                            className="text-gray-600 hover:text-blue-600 whitespace-nowrap !rounded-button transition-all duration-300 hover:scale-105 hover:shadow-md px-4 py-2"
                        >
                            <i className={navigationIcons.blog + " mr-2"}></i>
                            Blog
                        </button>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search all projects..."
                            className="w-64 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-blue-500 text-sm transition-all duration-300 hover:shadow-md"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-label="Search projects"
                        />
                        <button
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors duration-200 p-2"
                            onClick={handleSearch}
                            aria-label="Search"
                        >
                            <i className={navigationIcons.search}></i>
                        </button>
                    </div>
                    <div className="relative" ref={menuRef}>
                        <button 
                            className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 !rounded-button"
                            onClick={handleAccountClick}
                        >
                            <i className="fas fa-user-circle text-xl"></i>
                            <span className="hidden md:inline">Account</span>
                        </button>
                        {showAccountMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50">
                                <Link
                                    to="/login"
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                    onClick={() => setShowAccountMenu(false)}
                                >
                                    <i className={navigationIcons.signIn + " mr-2"}></i>
                                    Log In
                                </Link>
                                <Link
                                    to="/signup"
                                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                    onClick={() => setShowAccountMenu(false)}
                                >
                                    <i className={navigationIcons.createAccount + " mr-2"}></i>
                                    Create Account
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
