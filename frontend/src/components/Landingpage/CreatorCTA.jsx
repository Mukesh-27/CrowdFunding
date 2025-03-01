import React from 'react';
import { motion } from 'framer-motion'; 

const CreatorCTA = () => {
    return (
        <div id="start-project" className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10"
                        style={{
                            width: Math.random() * 100 + 50,
                            height: Math.random() * 100 + 50,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        initial={{
                            scale: 0,
                            opacity: 0,
                            x: Math.random() * 100 - 50,
                            y: Math.random() * 100 - 50,
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                            x: Math.random() * 100 - 50,
                            y: Math.random() * 100 - 50,
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                ))}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
                <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={`beam-${i}`}
                            className="absolute w-full h-[200px] bg-gradient-to-r from-blue-400/5 via-purple-400/10 to-transparent"
                            style={{
                                top: `${i * 30}%`,
                                transform: 'rotate(-45deg)',
                            }}
                            initial={{ x: '-100%' }}
                            animate={{ x: '200%' }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                delay: i * 2,
                                ease: "linear",
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 relative">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2 
                        className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Ready to Bring Your Idea to Life?
                    </motion.h2>

                    <motion.p 
                        className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Join thousands of successful creators who turned their vision into reality with CrowdFund
                    </motion.p>

                    <motion.button 
                        className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 !rounded-button whitespace-nowrap text-lg font-semibold"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start Your Project Today
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default CreatorCTA;
