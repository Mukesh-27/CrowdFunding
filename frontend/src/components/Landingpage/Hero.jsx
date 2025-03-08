import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    const handleLaunchProject = () => {
        navigate('/creators');
    };

    return (
        <div id ="explore-hero"className="pt-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
            <div className="absolute inset-0">
                <img 
                    src="https://readdy.ai/api/search-image?query=modern creative workspace with diverse group of people collaborating on innovative projects, soft natural lighting, minimalist design, subtle technology elements, perfect for crowdfunding platform hero section&width=1440&height=800&orientation=landscape&flag=4197237f1ba28198a81b8b0fc887fd56" 
                    alt="Crowdfunding Community" 
                    className="w-full h-full object-cover opacity-30"
                />
            </div>
            <div className="max-w-7xl mx-auto px-4 py-24 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative z-10">
                        <div className="inline-block px-6 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold mb-6">
                            Over $100M+ Raised in 2024
                        </div>
                        <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-8">
                            Fund Your Dreams with
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 block mt-2">
                                Global Support
                            </span>
                        </h1>
                        <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                            Join thousands of successful creators who turned their innovative ideas into reality. 
                            Our community of 2M+ backers is ready to support your next big project.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <button 
                                onClick={handleLaunchProject}
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 !rounded-button whitespace-nowrap text-lg font-semibold flex items-center justify-center"
                            >
                                <i className="fas fa-rocket mr-2"></i>
                                Launch Your Project
                            </button>
                            <button className="group px-8 py-4 bg-white text-gray-800 rounded-full hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1 !rounded-button whitespace-nowrap text-lg font-semibold flex items-center justify-center border-2 border-gray-200 hover:border-purple-200">
                                <i className="fas fa-search mr-2 group-hover:text-purple-600"></i>
                                Discover Projects
                            </button>
                        </div>
                        <div className="mt-12 flex items-center space-x-8">
                            <div className="flex -space-x-4">
                                <img 
                                    src="https://readdy.ai/api/search-image?query=professional headshot young diverse male entrepreneur confident smile natural lighting&width=100&height=100&orientation=squarish&flag=151995fe1144584c91500d1d2e7635c7" 
                                    alt="Backer 1" 
                                    className="w-12 h-12 rounded-full border-2 border-white"
                                />
                                <img 
                                    src="https://readdy.ai/api/search-image?query=professional headshot young asian female tech professional natural lighting&width=100&height=100&orientation=squarish&flag=b11e5578a9cc583e8fb231ae56047cf2" 
                                    alt="Backer 2" 
                                    className="w-12 h-12 rounded-full border-2 border-white"
                                />
                                <img 
                                    src="https://readdy.ai/api/search-image?query=professional headshot middle aged african american businessman natural lighting&width=100&height=100&orientation=squarish&flag=97f00dc221ab3a297573aafde50e62eb" 
                                    alt="Backer 3" 
                                    className="w-12 h-12 rounded-full border-2 border-white"
                                />
                                <div className="w-12 h-12 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-white text-sm font-semibold">
                                    2M+
                                </div>
                            </div>
                            <p className="text-gray-600">Join our global community of backers</p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl transform rotate-6 blur-2xl"></div>
                        <div className="relative bg-white p-6 rounded-3xl shadow-2xl">
                            <img 
                                src="https://readdy.ai/api/search-image?query=successful crowdfunding project showcase with modern tech product innovative design clean studio lighting professional photography&width=800&height=600&orientation=landscape&flag=8fa83e18c87f8eaac0d01cc4a1e3a011" 
                                alt="Successful Projects" 
                                className="rounded-2xl w-full h-[500px] object-cover mb-6"
                            />
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">15K+</div>
                                    <div className="text-sm text-gray-600">Projects Funded</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-600">$250M</div>
                                    <div className="text-sm text-gray-600">Total Raised</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">93%</div>
                                    <div className="text-sm text-gray-600">Success Rate</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
