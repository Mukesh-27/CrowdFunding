import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faInfoCircle, faArrowLeft, faCreditCard, faLock, faGift } from '@fortawesome/free-solid-svg-icons';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Payment1 = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [pledgeAmount, setPledgeAmount] = useState(10);
  const [selectedShipCountry, setSelectedShipCountry] = useState('India');
  const [showInfo, setShowInfo] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showFAQ, setShowFAQ] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [email, setEmail] = useState('');
  const [rememberPayment, setRememberPayment] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showPaymentSection, setShowPaymentSection] = useState(false);

  // Fetch project details
  const [project, setProject] = useState(null);
  useEffect(() => {
    // Mock fetch project data
    setProject({
      title: "Ancient Hellas Illustrated Book",
      creator: "Tyler Miles Lockett",
      image: "https://via.placeholder.com/400x300"
    });
  }, [projectId]);

  const rewards = [
    {
      id: 1,
      title: "📜 MORTAL TIER 📜",
      price: 5,
      backers: 1,
      description: "2 Hi-Res Digital Wallpapers of my 'Ancient Hellas' map and 'Athena' Illustrations 📜 A 'Blessed by the patrons' Thank you message for supporting the project.",
      includes: [
        { quantity: 2, item: "digital illustration" }
      ],
      estimatedDelivery: "Apr 2025",
      image: "https://via.placeholder.com/400x300",
      shipping: "Digital Reward - No Shipping"
    },
    {
      id: 2,
      title: "🏺 HERO TIER 🏺",
      price: 25,
      backers: 15,
      description: "Get the physical book plus all digital rewards! Be among the first to explore the mythical world through our beautifully illustrated pages.",
      includes: [
        { quantity: 1, item: "hardcover book" },
        { quantity: 2, item: "digital wallpapers" },
        { quantity: 1, item: "thank you message" }
      ],
      estimatedDelivery: "Apr 2025",
      image: "https://via.placeholder.com/400x300",
      shipping: "Ships worldwide"
    }
  ];

  const faqs = [
    { q: "How do I pledge?", a: "Select a reward tier or enter a pledge amount, then follow the payment instructions." },
    { q: "When is my card charged?", a: "Your card will only be charged if the project reaches its funding goal." },
    { q: "What if the project doesn't reach its goal?", a: "If the project doesn't reach its goal, you won't be charged." }
  ];

  const validateForm = () => {
    if (!cardNumber.match(/^\d{16}$/)) {
      toast.error('Please enter a valid 16-digit card number');
      return false;
    }
    if (!expiryDate.match(/^(0[1-9]|1[0-2])\/([0-9]{2})$/)) {
      toast.error('Please enter a valid expiry date (MM/YY)');
      return false;
    }
    if (!securityCode.match(/^\d{3}$/)) {
      toast.error('Please enter a valid 3-digit security code');
      return false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (!termsAccepted) {
      toast.error('Please accept the terms and conditions');
      return false;
    }
    return true;
  };

  const handlePledge = async () => {
    if (!validateForm()) return;
    
    setIsProcessing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real application, you would send this data to your backend
      const paymentData = {
        cardNumber,
        expiryDate,
        securityCode,
        email,
        pledgeAmount,
        projectId,
        rememberPayment,
        selectedReward
      };
      console.log('Payment Data:', paymentData);
      
      toast.success('Thank you for your pledge! You will receive a confirmation email shortly.');
      navigate(`/project/${projectId}`);
    } catch (error) {
      console.error('Payment error:', error);
      toast.error('Failed to process pledge. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handlePledgeClick = () => {
    setShowPaymentSection(true);
    // Smooth scroll to payment section
    document.getElementById('payment-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <motion.button
          onClick={() => {
            if (showPaymentSection) {
              setShowPaymentSection(false);
            } else {
              navigate(`/project/${projectId}`);
            }
          }}
          className="mb-8 text-gray-600 hover:text-gray-900 flex items-center group"
          whileHover={{ x: -5 }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2 group-hover:transform group-hover:-translate-x-1 transition-transform" />
          {showPaymentSection ? 'Back to rewards' : 'Back to project'}
        </motion.button>

        {/* Project Header */}
        {project && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm p-6 mb-8"
          >
            <div className="flex items-center space-x-4">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-gray-600">by {project.creator}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Navigation Breadcrumb */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center space-x-4 text-gray-600 mb-8"
        >
          {['Rewards', 'Add-ons', 'Payment'].map((step, index) => (
            <React.Fragment key={step}>
              <motion.div
                variants={itemVariants}
                className={`flex items-center ${
                  index === 2 ? 'text-green-600 font-semibold' : ''
                }`}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === 2 ? 'bg-green-100' : 'bg-gray-100'
                }`}>
                  {index + 1}
                </span>
                <span className="ml-2">{step}</span>
              </motion.div>
              {index < 2 && (
                <motion.span 
                  variants={itemVariants}
                  className="text-gray-400"
                >
                  →
                </motion.span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Main Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-sm p-8"
        >
          {!showPaymentSection ? (
            <>
              <motion.h1 variants={itemVariants} className="text-3xl font-bold mb-6">
                Select your reward
              </motion.h1>
              <motion.p variants={itemVariants} className="text-gray-600 mb-8">
                Pick which reward you&apos;d like to pledge for
              </motion.p>

              {/* Pledge Without Reward */}
              <motion.div
                variants={itemVariants}
                className="border border-gray-200 rounded-lg p-6 mb-8 hover:border-green-500 transition-colors"
              >
                <h2 className="text-xl font-semibold mb-2">Pledge without a reward</h2>
                <p className="text-gray-600 mb-4">Support the project for no reward, just because it speaks to you.</p>
                
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={pledgeAmount}
                      onChange={(e) => setPledgeAmount(Number(e.target.value))}
                      className="pl-8 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      min="1"
                    />
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex flex-col">
                      <button 
                        onClick={() => setPledgeAmount(prev => prev + 1)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FontAwesomeIcon icon={faChevronUp} size="xs" />
                      </button>
                      <button 
                        onClick={() => setPledgeAmount(prev => Math.max(1, prev - 1))}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <FontAwesomeIcon icon={faChevronDown} size="xs" />
                      </button>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handlePledgeClick}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                  >
                    <FontAwesomeIcon icon={faCreditCard} />
                    <span>Continue to payment</span>
                  </motion.button>
                </div>
              </motion.div>

              {/* Available Rewards */}
              <motion.div variants={itemVariants} className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Available rewards</h2>
                  <div className="relative">
                    <select
                      value={selectedShipCountry}
                      onChange={(e) => setSelectedShipCountry(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="India">Ships to India</option>
                      <option value="US">Ships to United States</option>
                      <option value="UK">Ships to United Kingdom</option>
                    </select>
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <FontAwesomeIcon icon={faChevronDown} className="text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Reward Cards */}
                <div className="space-y-6">
                  {rewards.map((reward) => (
                    <motion.div
                      key={reward.id}
                      variants={itemVariants}
                      className={`border rounded-lg p-6 transition-all ${
                        selectedReward === reward.id 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-gray-200 hover:border-green-500'
                      }`}
                      onClick={() => setSelectedReward(reward.id)}
                    >
                      <div className="flex space-x-6">
                        <div className="w-1/3">
                          <motion.img 
                            src={reward.image} 
                            alt={reward.title}
                            className="w-full h-48 object-cover rounded-lg"
                            whileHover={{ scale: 1.05 }}
                          />
                        </div>
                        <div className="w-2/3">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-bold">{reward.title}</h3>
                            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                              {reward.shipping}
                            </span>
                          </div>
                          <p className="text-2xl font-bold text-green-600 mt-2">${reward.price}</p>
                          <p className="text-gray-600 mb-4">{reward.backers} {reward.backers === 1 ? 'backer' : 'backers'}</p>
                          <p className="text-gray-700 mb-4">{reward.description}</p>
                          
                          <div className="mb-4">
                            <h4 className="font-semibold mb-2 flex items-center">
                              <FontAwesomeIcon icon={faGift} className="mr-2 text-green-600" />
                              Includes
                            </h4>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {reward.includes.map((item, index) => (
                                <li key={index}>
                                  {item.quantity} × {item.item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="text-gray-600">
                            <p>Estimated delivery</p>
                            <p className="font-semibold">{reward.estimatedDelivery}</p>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setPledgeAmount(reward.price);
                              handlePledge();
                            }}
                            disabled={isProcessing}
                            className={`mt-4 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 ${
                              isProcessing ? 'opacity-75 cursor-not-allowed' : ''
                            }`}
                          >
                            <FontAwesomeIcon icon={faCreditCard} />
                            <span>Pledge ${reward.price}</span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </>
          ) : (
            <div id="payment-section">
              {/* Confirm Payment Method */}
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-3xl font-bold mb-6">Confirm your payment method</h2>
                <p className="text-gray-600 mb-4">
                  We won&apos;t charge you at this time. If the project reaches its funding goal, your payment method will
                  be charged when the campaign ends. You&apos;ll receive a confirmation email at{' '}
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="inline-block border-b border-gray-300 focus:border-green-500 focus:outline-none px-2"
                  />{' '}
                  when your pledge is successfully processed.
                </p>

                <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                  <h3 className="text-xl font-bold">Payment</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2">Card number</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={cardNumber}
                          onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                          maxLength="19"
                          placeholder="1234 1234 1234 1234"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                        <img
                          src="/discover-card.png"
                          alt="Discover"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 h-6"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 mb-2">Expiration date</label>
                        <input
                          type="text"
                          value={expiryDate}
                          onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                          placeholder="MM/YY"
                          maxLength="5"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-2">Security code</label>
                        <input
                          type="password"
                          value={securityCode}
                          onChange={(e) => setSecurityCode(e.target.value.slice(0, 3))}
                          placeholder="CVC"
                          maxLength="3"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Country</label>
                    <select
                      value={selectedShipCountry}
                      onChange={(e) => setSelectedShipCountry(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="India">India</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember-payment"
                      checked={rememberPayment}
                      onChange={(e) => setRememberPayment(e.target.checked)}
                      className="rounded text-green-600 focus:ring-green-500"
                    />
                    <label htmlFor="remember-payment" className="text-gray-700">
                      Remember this payment method
                    </label>
                  </div>
                </div>

                {/* Summary and Confirmation */}
                <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-700">Pledge without a reward</span>
                    <span className="font-bold">${pledgeAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-t border-gray-200">
                    <span className="font-bold text-lg">Total amount</span>
                    <span className="font-bold text-lg">${pledgeAmount.toFixed(2)}</span>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 rounded text-green-600 focus:ring-green-500"
                      />
                      <label htmlFor="terms" className="text-gray-600 text-sm">
                        I understand that rewards or reimbursements aren&apos;t guaranteed by either Kickstarter or the creator.
                      </label>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handlePledge}
                      disabled={isProcessing}
                      className={`w-full bg-green-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors ${
                        isProcessing ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isProcessing ? (
                        <div className="flex items-center justify-center space-x-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        'Pledge'
                      )}
                    </motion.button>

                    <p className="text-sm text-gray-600 mt-4">
                      By submitting your pledge, you agree to our Terms of Use and Privacy Policy.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* FAQ Section - only show in payment view */}
          {showPaymentSection && (
            <>
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => setShowFAQ(showFAQ === index ? null : index)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                      >
                        <span className="font-medium">{faq.q}</span>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className={`transform transition-transform ${
                            showFAQ === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {showFAQ === index && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 py-4 bg-gray-50 text-gray-600">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Information Notice */}
              <motion.div
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={faLock} className="text-gray-500 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Secure Pledge Process</h3>
                    <p className="text-gray-600">
                      Your pledge will support an ambitious creative project. 
                      Your card will only be charged if the project reaches its funding goal. 
                      All pledges include our standard 30-day refund policy.
                    </p>
                    <button 
                      onClick={() => setShowInfo(!showInfo)}
                      className="text-green-600 font-medium mt-2 hover:text-green-700 flex items-center"
                    >
                      <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                      Learn more about accountability
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Payment1;
