import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faImage, 
  faMoneyBill, 
  faGift, 
  faBook, 
  faUsers, 
  faCreditCard,
  faClipboard,
  faInfoCircle,
  faArrowRight,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import Confetti from 'react-confetti';
import Basics from './Basics';
import Campaign from './campaign';
import Funding from './Funding';
import Payment from './Payment';
import People from './People';
import Plan from './Plan';
import Projectimg from './Projectimg';
import Rewards from './Rewards';
import Story from './Story';
import Projectreview from './Projectreview';
import Promotion from './Promotion';

const Createpro = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [rulesAccepted, setRulesAccepted] = useState(false);
  const [activeSection, setActiveSection] = useState('basics');
  
  // State for checklist
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Have you defined your project goals?', completed: false },
    { id: 2, text: 'Is your budget realistic and detailed?', completed: false },
    { id: 3, text: 'Have you prepared your rewards for backers?', completed: false },
    { id: 4, text: 'Is your project story compelling and clear?', completed: false },
    { id: 5, text: 'Have you set a launch date?', completed: false },
  ]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleChecklistToggle = (id) => {
    setChecklist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completionPercentage = (checklist.filter(item => item.completed).length / checklist.length) * 100;

  const projectSteps = [
    {
      id: 'basics',
      title: 'Basics',
      icon: faImage,
      description: 'Name your project, upload an image or video, and establish your campaign details.',
      status: 'current'
    },
    {
      id: 'funding',
      title: 'Funding',
      icon: faMoneyBill,
      description: 'Build out a budget and calculate your financial goals.',
      status: 'upcoming'
    },
    {
      id: 'rewards',
      title: 'Rewards',
      icon: faGift,
      description: 'Set your rewards and shipping costs.',
      status: 'upcoming'
    },
    {
      id: 'story',
      title: 'Story',
      icon: faBook,
      description: 'Add a detailed project description and convey your risks and challenges.',
      status: 'upcoming'
    },
    {
      id: 'people',
      title: 'People',
      icon: faUsers,
      description: 'Edit your Kickstarter profile and add collaborators.',
      status: 'upcoming'
    },
    {
      id: 'payment',
      title: 'Payment',
      icon: faCreditCard,
      description: 'Verify details and link a bank account.',
      status: 'upcoming'
    },
    {
      id: 'review',
      title: 'Project Review',
      icon: faClipboard,
      description: "We'll check compliance with guidelines (1–3 days).",
      status: 'upcoming'
    },
    {
      id: 'promotion',
      title: 'Promotion', 
      description: 'Generate a project URL and activate a pre-launch page.',
      status: 'upcoming'
    }
  ];

  const rules = [
    {
      title: 'Create Something to Share',
      description: 'Projects must create something to share with others.'
    },
    {
      title: 'Be Honest and Clear',
      description: 'Projects must be honest and clearly presented.'
    },
    {
      title: 'No Charity Fundraising',
      description: "Projects can't fundraise for charity."
    },
    {
      title: 'No Equity Offering',
      description: "Projects can't offer equity."
    },
    {
      title: 'No Prohibited Items',
      description: "Projects can't involve prohibited items."
    }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'basics':
        return <Basics />;
      case 'campaign':
        return <Campaign />;
      case 'funding':
        return <Funding />;
      case 'payment':
        return <Payment />;
      case 'people':
        return <People />;
      case 'plan':
        return <Plan />;
      case 'projectimg':
        return <Projectimg />;
      case 'rewards':
        return <Rewards />;
      case 'story':
        return <Story />;
      case 'review':
        return <Projectreview />;
      case 'promotion':
        return <Promotion />;
      default:
        return <Basics />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
      
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Ready to Launch!
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You're about to join thousands of creators who have brought their ideas to life. Let's make something amazing together.
            </p>
          </div>
        </div>
      </div>

      {/* Rules Section */}
      {!rulesAccepted && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <FontAwesomeIcon icon={faInfoCircle} className="text-teal-500 mr-4" />
              Important Guidelines
            </h2>
            <div className="space-y-6">
              {rules.map((rule, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-teal-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{rule.title}</h3>
                    <p className="text-gray-600">{rule.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setRulesAccepted(true)}
              className="mt-8 w-full bg-teal-500 text-white py-4 px-8 rounded-xl font-semibold hover:bg-teal-600 transition-all duration-300 flex items-center justify-center group"
            >
              <span>I Understand</span>
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
              />
            </button>
          </div>
        </div>
      )}

      {/* Project Readiness Checklist */}
      {rulesAccepted && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <FontAwesomeIcon icon={faLightbulb} className="text-teal-500 mr-4" />
              Project Readiness Checklist
            </h2>
            <div className="mb-4">
              <p className="text-gray-600 mb-2">Completion: {completionPercentage.toFixed(0)}%</p>
              <div className="relative w-full h-2 bg-gray-200 rounded">
                <div
                  className="absolute h-full bg-teal-500 rounded"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
            <ul className="list-disc list-inside mb-4">
              {checklist.map((item) => (
                <li key={item.id} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => handleChecklistToggle(item.id)}
                    className="mr-2"
                  />
                  <span className={`transition duration-300 ${item.completed ? 'line-through text-gray-500' : ''}`}>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 mb-4">
              Make sure to review these points before launching your project!
            </p>
          </div>
        </div>
      )}

      {/* Steps Navigation */}
      {rulesAccepted && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Steps Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Project Overview</h3>
                <div className="space-y-4">
                  {projectSteps.map((step) => (
                    <button
                      key={step.id}
                      onClick={() => setActiveSection(step.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center ${
                        activeSection === step.id
                          ? 'bg-teal-50 text-teal-600'
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                    >
                      <FontAwesomeIcon icon={step.icon} className="mr-3" />
                      <span>{step.title}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {/* Render the active section */}
                {renderSection()}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Createpro;
