import React from 'react';
import { motion } from 'framer-motion';

const TrustedSection = () => {
    const features = [
        {
            id: 1,
            icon: "fas fa-shield-alt",
            title: "Secure Payments",
            description: "Industry-leading security measures to protect your transactions"
        },
        {
            id: 2,
            icon: "fas fa-users",
            title: "Active Community",
            description: "Connect with millions of backers and creators worldwide"
        },
        {
            id: 3,
            icon: "fas fa-headset",
            title: "24/7 Support",
            description: "Expert support team ready to help you succeed"
        }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2 
                        className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Trusted by Millions
                    </motion.h2>
                    <motion.p 
                        className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Join our thriving global community where innovation meets support, and dreams become reality
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={feature.id}
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                            whileHover={{ 
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <i className={`${feature.icon} text-4xl text-blue-600 mb-4`}></i>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustedSection;
