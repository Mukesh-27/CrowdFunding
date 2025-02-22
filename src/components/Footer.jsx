import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const socialLinks = [
        { id: 1, icon: "fab fa-twitter", label: "Twitter" },
        { id: 2, icon: "fab fa-facebook", label: "Facebook" },
        { id: 3, icon: "fab fa-instagram", label: "Instagram" },
        { id: 4, icon: "fab fa-linkedin", label: "LinkedIn" }
    ];

    const resources = [
        { id: 1, text: "How it Works" },
        { id: 2, text: "Creator Handbook" },
        { id: 3, text: "Success Stories" }
    ];

    const support = [
        { id: 1, text: "Help Center" },
        { id: 2, text: "Contact Us" },
        { id: 3, text: "Trust & Safety" }
    ];

    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-xl font-bold mb-4">FUNDIFY</h3>
                        <p className="text-gray-400">
                            Empowering creators to bring their projects to life.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h4 className="font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2">
                            {resources.map(item => (
                                <li key={item.id}>
                                    <button className="text-gray-400 hover:text-white transition-colors duration-300 !rounded-button">
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            {support.map(item => (
                                <li key={item.id}>
                                    <button className="text-gray-400 hover:text-white transition-colors duration-300 !rounded-button">
                                        {item.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <h4 className="font-semibold mb-4">Stay Connected</h4>
                        <div className="flex space-x-4">
                            {socialLinks.map(social => (
                                <button 
                                    key={social.id}
                                    className="text-gray-400 hover:text-white text-xl transition-colors duration-300 !rounded-button"
                                    aria-label={social.label}
                                >
                                    <i className={social.icon}></i>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
                <motion.div 
                    className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <p>© 2025 FUNDIFY. All rights reserved.</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
