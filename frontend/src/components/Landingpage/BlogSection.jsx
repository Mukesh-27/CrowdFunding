import React from 'react';
import { motion } from 'framer-motion';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            image: "https://readdy.ai/api/search-image?query=group of diverse people brainstorming in modern creative office space professional business environment natural lighting&width=400&height=250&orientation=landscape&flag=76aa3cfa7038f6f563477dc8ec56121b",
            date: "February 18, 2025",
            title: "10 Essential Tips for Crowdfunding Success",
            description: "Learn the key strategies that successful creators use to exceed their funding goals...",
            alt: "Crowdfunding Tips"
        },
        {
            id: 2,
            image: "https://readdy.ai/api/search-image?query=innovative tech product presentation in modern showroom professional lighting minimal design&width=400&height=250&orientation=landscape&flag=2df5dc30b21f8327ec3108311ff94405",
            date: "February 15, 2025",
            title: "From Idea to Market: A Success Story",
            description: "Discover how one startup transformed their innovative concept into a market-ready product...",
            alt: "Innovation Story"
        },
        {
            id: 3,
            image: "https://readdy.ai/api/search-image?query=creative team working on digital art project modern studio environment professional lighting&width=400&height=250&orientation=landscape&flag=5f90cc3f6d4c8c3c900bbacef4810284",
            date: "February 12, 2025",
            title: "Building Community Through Creativity",
            description: "How creative projects are bringing people together and making a lasting impact...",
            alt: "Community Impact"
        }
    ];

    return (
        <div id="blog-section" className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2 
                    className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Latest from Our Blog
                </motion.h2>
                
                <motion.p 
                    className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Insights, success stories, and crowdfunding tips
                </motion.p>

                <div className="grid md:grid-cols-3 gap-10">
                    {blogPosts.map((post, index) => (
                        <motion.div 
                            key={post.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                        >
                            <div className="relative overflow-hidden">
                                <img 
                                    src={post.image} 
                                    alt={post.alt}
                                    className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                                />
                            </div>
                            
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">
                                    {post.date}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {post.description}
                                </p>
                                <button className="text-blue-600 hover:text-blue-700 font-semibold !rounded-button group flex items-center">
                                    Read More 
                                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogSection;
