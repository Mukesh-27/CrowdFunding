import React from 'react';

const About = () => {
    return (
        <div id="about-section" className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full"></div>
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-50 rounded-full"></div>
                        <img 
                            src="https://readdy.ai/api/search-image?query=diverse team of creative professionals collaborating in modern office space with natural light streaming through windows professional corporate environment innovative workspace&width=600&height=400&orientation=landscape&flag=cb147a395255702b77f9567e79751f2e" 
                            alt="Our Team" 
                            className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            Empowering Innovators Since 2020
                        </h2>
                        
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            At CrowdFund, we believe in the power of collective support to bring revolutionary ideas to life. 
                            Our platform has become the bridge between visionary creators and passionate backers, 
                            fostering a community where innovation thrives and dreams become reality.
                        </p>
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <i className="fas fa-rocket text-3xl text-blue-600 mb-4"></i>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">15,000+</h3>
                                <p className="text-gray-600">Successful Projects</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <i className="fas fa-globe text-3xl text-blue-600 mb-4"></i>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">190+</h3>
                                <p className="text-gray-600">Countries Reached</p>
                            </div>
                        </div>
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-200 flex items-center space-x-2 !rounded-button whitespace-nowrap">
                            <span>Learn More About Us</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
