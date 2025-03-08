import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "When will the book be shipped to customers?",
      answer: "The book is scheduled to be shipped to customers in April 2025. We have carefully planned our production timeline to ensure high-quality printing and timely delivery. International shipping may take additional time depending on your location."
    },
    {
      id: 2,
      question: "Is shipping included? And if not, how much will it cost?",
      answer: "Shipping costs are not included in the pledge amounts. Shipping costs will vary depending on your location:\n- US: $5\n- Canada: $10\n- International: $15-25\nExact shipping costs will be collected through BackerKit after the campaign ends."
    },
    {
      id: 3,
      question: "I've seen SO many Greek mythology books before—why should I back this one?",
      answer: "Our book offers a unique perspective with original illustrations, deep research into authentic sources, and a modern interpretation that stays true to the classical myths. We combine artistic excellence with historical accuracy to create something truly special."
    },
    {
      id: 4,
      question: "Does your book stay true to the ancient Greek sources?",
      answer: "Yes, absolutely! We've conducted extensive research using primary sources and worked with classical scholars to ensure accuracy. While we've made the stories accessible to modern readers, we maintain the authenticity of the original myths."
    },
    {
      id: 5,
      question: "Why should I buy this when I can just look up myths online for free?",
      answer: "Our book offers unique hand-drawn illustrations, expert curation, and a carefully crafted narrative that brings these myths to life. You're not just getting information—you're getting an artistic interpretation and a beautiful physical object that will last generations."
    },
    {
      id: 6,
      question: "I like mythology, but I'm not an expert. Is this book too complex for me?",
      answer: "Not at all! We've designed this book to be accessible to mythology enthusiasts of all levels. While we maintain historical accuracy, the stories are told in an engaging, easy-to-follow style with helpful context and beautiful illustrations to enhance understanding."
    },
    {
      id: 7,
      question: "How do I know this book will actually be high quality and worth my money?",
      answer: "We're committed to producing a premium quality book. You can see examples of our work and production standards in the campaign updates. We're working with top-tier printers and using high-quality materials. Plus, our track record and previous successful projects demonstrate our commitment to excellence."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-sm p-8"
      >
        <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-4">
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={false}
            >
              <motion.button
                className={`w-full px-6 py-4 flex items-center justify-between text-left transition-colors ${
                  openQuestion === faq.id ? 'bg-green-50' : 'hover:bg-gray-50'
                }`}
                onClick={() => setOpenQuestion(openQuestion === faq.id ? null : faq.id)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openQuestion === faq.id ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FontAwesomeIcon 
                    icon={faChevronRight} 
                    className={`transform transition-colors ${
                      openQuestion === faq.id ? 'text-green-600' : 'text-gray-400'
                    }`}
                  />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openQuestion === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200"
                  >
                    <div className="px-6 py-4 bg-white">
                      <motion.p
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-700 whitespace-pre-line"
                      >
                        {faq.answer}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Please contact our support team.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
          >
            Contact Support
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Faq;
