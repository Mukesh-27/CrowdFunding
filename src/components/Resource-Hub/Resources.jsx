import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faRocket, faPlayCircle, faArrowRight, faChevronDown, faSyncAlt, faTimes, faChess, faPenFancy, faBullseye, faChartLine, faUsers, faLightbulb, faCog, faRocket as faRocketSolid } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const navigate = useNavigate();

  // State management
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [filters, setFilters] = useState({
    sort: 'Most Popular',
    category: 'All Categories',
    status: 'All Status',
    date: 'Last 30 days'
  });
  const [selectedResource, setSelectedResource] = useState(null);

  // Add new state for active tab
  const [activeTab, setActiveTab] = useState('Prep');

  // Dropdown options
  const dropdownOptions = {
    sort: ['Most Popular', 'Newest First', 'Oldest First', 'Most Viewed'],
    category: ['All Categories', 'Technology', 'Art', 'Design', 'Film', 'Games'],
    status: ['All Status', 'Active', 'Completed', 'Upcoming'],
    date: ['Last 30 days', 'Last 3 months', 'Last 6 months', 'Last year', 'All time']
  };

  // Tab content data
  const tabContent = {
    Prep: {
      title: "Prepare Your Campaign",
      description: "Get your project ready for success with our comprehensive preparation tools and guides.",
      cards: [
        {
          icon: faChess,
          title: "Campaign Strategy",
          description: "Build a solid foundation with our proven campaign strategies",
          delay: "0ms"
        },
        {
          icon: faPenFancy,
          title: "Content Creation",
          description: "Create compelling content that resonates with your audience",
          delay: "200ms"
        },
        {
          icon: faBullseye,
          title: "Goal Setting",
          description: "Set realistic and achievable funding goals",
          delay: "400ms"
        }
      ]
    },
    Fund: {
      title: "Fund Your Project",
      description: "Launch and manage your fundraising campaign with expert tools and guidance.",
      cards: [
        {
          icon: faChartLine,
          title: "Marketing Strategy",
          description: "Reach and engage your target audience effectively",
          delay: "0ms"
        },
        {
          icon: faUsers,
          title: "Community Building",
          description: "Build and nurture your backer community",
          delay: "200ms"
        },
        {
          icon: faRocketSolid,
          title: "Launch Planning",
          description: "Plan and execute a successful campaign launch",
          delay: "400ms"
        }
      ]
    },
    Manage: {
      title: "Manage Your Campaign",
      description: "Keep your campaign on track with powerful management tools and insights.",
      cards: [
        {
          icon: faCog,
          title: "Campaign Dashboard",
          description: "Track and analyze your campaign performance",
          delay: "0ms"
        },
        {
          icon: faUsers,
          title: "Backer Management",
          description: "Efficiently manage backer communications and rewards",
          delay: "200ms"
        },
        {
          icon: faChartLine,
          title: "Progress Tracking",
          description: "Monitor milestones and adjust strategies",
          delay: "400ms"
        }
      ]
    },
    Grow: {
      title: "Grow Your Success",
      description: "Scale your success and prepare for future campaigns.",
      cards: [
        {
          icon: faLightbulb,
          title: "Innovation Strategy",
          description: "Develop new ideas and expand your reach",
          delay: "0ms"
        },
        {
          icon: faChartLine,
          title: "Growth Analytics",
          description: "Analyze data to inform future campaigns",
          delay: "200ms"
        },
        {
          icon: faUsers,
          title: "Community Scaling",
          description: "Expand and strengthen your community",
          delay: "400ms"
        }
      ]
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle dropdown toggle
  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  // Handle option selection
  const handleOptionSelect = (dropdownName, option) => {
    setFilters(prev => ({ ...prev, [dropdownName]: option }));
    setActiveDropdown(null);
  };

  // Reset filters
  const resetFilters = () => {
    setFilters({
      sort: 'Most Popular',
      category: 'All Categories',
      status: 'All Status',
      date: 'Last 30 days'
    });
  };

  const tabs = ['Prep', 'Fund', 'Manage', 'Grow'];
  const resources = [
    {
      title: '10 Ways to Level Up Your Campaign Page',
      image: '/campaign-level-up.svg',
      bgColor: 'bg-[#4361EE]',
      link: '#',
      delay: '200ms',
      description: 'Learn proven strategies to make your campaign stand out',
      category: 'Design',
      status: 'Active',
      date: '2024-03-15',
      views: 1500
    },
    {
      title: 'How to Craft a Compelling Pre-Launch Page',
      image: '/pre-launch.svg',
      bgColor: 'bg-[#4ADE80]',
      link: '#',
      delay: '400ms',
      description: 'Build anticipation before your big launch',
      category: 'Technology',
      status: 'Upcoming',
      date: '2024-03-10',
      views: 2000
    },
    {
      title: '10 Crowdfunding Tips from Superbackers',
      image: '/crowdfunding-tips.svg',
      bgColor: 'bg-[#1A1B1E]',
      link: '#',
      delay: '600ms',
      description: 'Expert insights from experienced backers',
      category: 'Art',
      status: 'Completed',
      date: '2024-02-15',
      views: 3000
    },
    {
      title: 'How to Set the Right Funding Goal',
      image: '/funding-goal.svg',
      bgColor: 'bg-[#4ADE80]',
      link: '#',
      delay: '800ms',
      description: 'Calculate and set achievable funding targets',
      category: 'Games',
      status: 'Active',
      date: '2024-03-01',
      views: 1800
    }
  ];

  // Add filtering logic
  const getFilteredResources = () => {
    let filtered = [...resources];

    // Apply category filter
    if (filters.category !== 'All Categories') {
      filtered = filtered.filter(resource => resource.category === filters.category);
    }

    // Apply status filter
    if (filters.status !== 'All Status') {
      filtered = filtered.filter(resource => resource.status === filters.status);
    }

    // Apply date filter
    const today = new Date();
    const thirtyDaysAgo = new Date(today.setDate(today.getDate() - 30));
    const threeMonthsAgo = new Date(today.setMonth(today.getMonth() - 3));
    const sixMonthsAgo = new Date(today.setMonth(today.getMonth() - 6));
    const oneYearAgo = new Date(today.setFullYear(today.getFullYear() - 1));

    switch (filters.date) {
      case 'Last 30 days':
        filtered = filtered.filter(resource => new Date(resource.date) >= thirtyDaysAgo);
        break;
      case 'Last 3 months':
        filtered = filtered.filter(resource => new Date(resource.date) >= threeMonthsAgo);
        break;
      case 'Last 6 months':
        filtered = filtered.filter(resource => new Date(resource.date) >= sixMonthsAgo);
        break;
      case 'Last year':
        filtered = filtered.filter(resource => new Date(resource.date) >= oneYearAgo);
        break;
      // 'All time' doesn't need filtering
    }

    // Apply sorting
    switch (filters.sort) {
      case 'Most Popular':
        filtered.sort((a, b) => b.views - a.views);
        break;
      case 'Newest First':
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'Oldest First':
        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'Most Viewed':
        filtered.sort((a, b) => b.views - a.views);
        break;
    }

    return filtered;
  };

  const handleCreateProject = () => {
    navigate('/create-project');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4ADE80]/10 via-white to-[#4361EE]/10 py-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-20 w-[600px] h-[600px]">
          <div 
            className="absolute left-0 top-0 w-[400px] h-[400px] animate-blob"
            style={{
              background: '#DDB6FF',
              borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
              opacity: '0.1'
            }}
          />
          <div 
            className="absolute right-0 top-0 w-[350px] h-[350px] animate-blob [animation-delay:2s]"
            style={{
              background: '#4ADE80',
              borderRadius: '30% 70% 70% 30% / 40% 60% 40% 60%',
              opacity: '0.1'
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-[#1A1B1E] transition-all duration-1000 opacity-100 translate-x-0">
            <div className="relative">
              <div className="absolute -top-12 left-0 flex items-center gap-2 animate-pulse">
                <span className="px-4 py-1 bg-teal-500/20 rounded-full text-teal-600 text-sm font-semibold">
                  <FontAwesomeIcon icon={faStarHalfAlt} className="mr-2" />
                  New Creator Platform
                </span>
                <span className="px-4 py-1 bg-emerald-500/20 rounded-full text-emerald-600 text-sm font-semibold">
                  <FontAwesomeIcon icon={faRocket} className="mr-2" />
                  Launch in Minutes
                </span>
              </div>
              <h2 className="text-7xl font-bold mb-8 leading-tight">
                <div className="overflow-hidden">
                  <span className="block transform transition-all hover:scale-105 duration-300 animate-float" style={{ animationDelay: '0s' }}>
                    Dream.
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block transform transition-all hover:scale-105 duration-300 animate-float" style={{ animationDelay: '0.2s' }}>
                    Create.
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span className="block transform transition-all hover:scale-105 duration-300 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 text-transparent bg-clip-text animate-float" style={{ animationDelay: '0.4s' }}>
                    Succeed.
                  </span>
                </div>
          </h2>
              <p className="text-xl mb-8 leading-relaxed opacity-90">
                Join thousands of successful creators who turned their ideas into reality. Our platform provides everything you need to launch, fund, and grow your creative projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button 
                  onClick={handleCreateProject}
                  className="group px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 font-semibold rounded-xl whitespace-nowrap relative overflow-hidden"
                >
                  <span className="relative z-10">Create Project</span>
                  
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button className="group px-8 py-4 bg-[#1A1B1E]/10 backdrop-blur-sm border-2 border-[#1A1B1E]/30 text-[#1A1B1E] hover:bg-[#1A1B1E]/20 transition-all duration-300 transform hover:scale-105 font-semibold rounded-xl whitespace-nowrap flex items-center justify-center">
                  <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
                  <span>See Success Stories</span>
                </button>
              </div>
              <div className="mt-12 flex items-center space-x-8">
                <div className="flex -space-x-4">
                  <img src="https://readdy.ai/api/search-image?width=100&height=100&orientation=squarish&flag=bd55dcdd357ee01cd96c7ac55b22e775" alt="Creator" className="w-12 h-12 rounded-full border-2 border-[#1A1B1E]" />
                  <img src="https://readdy.ai/api/search-image?width=100&height=100&orientation=squarish&flag=2067d643c3d087a882373818f9299d03" alt="Creator" className="w-12 h-12 rounded-full border-2 border-[#1A1B1E]" />
                  <img src="https://readdy.ai/api/search-image?width=100&height=100&orientation=squarish&flag=9ba51bafb87002ab8134a24a527877fc" alt="Creator" className="w-12 h-12 rounded-full border-2 border-[#1A1B1E]" />
                </div>
                <div className="text-sm">
                  <p className="font-semibold">Joined by 50,000+ creators</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, index) => (
                      <FontAwesomeIcon key={index} icon={faStar} className="text-yellow-400" />
                    ))}
                    <span className="ml-2 opacity-80">4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Laptop Image */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-[4/3] animate-float-slow transform hover:scale-105 transition-transform duration-500">
              {/* Laptop Frame */}
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Screen Content */}
                <div className="absolute inset-[5%] rounded-lg overflow-hidden bg-gradient-to-br from-teal-500 to-emerald-500">
                  <img 
                    src="/src/assets/creators.png" 
                    alt="Creator Dashboard"
                    className="w-full h-full object-cover opacity-90"
                  />
                  {/* Overlay Stats */}
                  <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4">
                    <div className="text-white text-sm">
                      <div className="flex items-center gap-2 mb-2">
                        <FontAwesomeIcon icon={faChartLine} className="text-teal-300" />
                        <span>Campaign Progress: 85%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faUsers} className="text-emerald-300" />
                        <span>1.2k Backers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-400/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-400/20 rounded-full blur-xl animate-pulse-slow [animation-delay:1s]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Get Started Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-white to-emerald-50/50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl animate-blob [animation-delay:2s]"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-blob [animation-delay:4s]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10 animate-fade-up">
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Ready to get started?
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Join the thousands of innovators and entrepreneurs securing funding on our platform. Start your free project draft today and explore all the tools you need to turn your vision into reality.
              </p>
              
              {/* Stats Section */}
              <div className="mt-16 grid grid-cols-3 gap-8">
                <div className="transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">50K+</div>
                  <div className="text-gray-600 mt-2">Active Projects</div>
                </div>
                <div className="transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">$100M+</div>
                  <div className="text-gray-600 mt-2">Funds Raised</div>
                </div>
                <div className="transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">95%</div>
                  <div className="text-gray-600 mt-2">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Right Content - Animated Lightbulb */}
            <div className="relative z-10">
              <div className="relative w-full aspect-square">
                {/* Large Lightbulb */}
                <div className="absolute inset-0 flex items-center justify-center animate-float-slow">
                  <div className="w-64 h-64 bg-yellow-400 rounded-full opacity-20 animate-pulse-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-48 h-48 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zM9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z"/>
                    </svg>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-teal-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-12 h-12 bg-emerald-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-cyan-400 rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center gap-6">
            {Object.entries(dropdownOptions).map(([key, options]) => (
              <div key={key} className="flex items-center gap-4 relative dropdown-container">
                <span className="font-medium text-gray-700">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                <div className="relative">
                  <button 
                    onClick={() => toggleDropdown(key)}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg flex items-center gap-2 hover:border-teal-500 transition-all !rounded-button whitespace-nowrap"
                  >
                    <span className="text-gray-700">{filters[key]}</span>
                    <FontAwesomeIcon 
                      icon={faChevronDown} 
                      className={`text-gray-400 text-sm transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {activeDropdown === key && (
                    <div className="absolute z-50 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                      {options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleOptionSelect(key, option)}
                          className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-700"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Reset Filters Button */}
            <button 
              onClick={resetFilters}
              className="ml-auto px-4 py-2 bg-teal-50 text-teal-600 rounded-lg flex items-center gap-2 hover:bg-teal-100 transition-all !rounded-button whitespace-nowrap"
            >
              <FontAwesomeIcon icon={faSyncAlt} className="mr-2" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 animate-slide-up opacity-0 [animation-delay:400ms]">
          <div className="flex space-x-12 border-b border-gray-200 relative">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-4 text-lg font-medium transition-all duration-300 relative ${
                  tab === activeTab
                    ? 'text-[#1A1B1E]'
                    : 'text-gray-500 hover:text-[#1A1B1E]'
                }`}
              >
                {tab}
                {tab === activeTab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#1A1B1E] animate-slide-right"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content Section */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="animate-fade-up">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {tabContent[activeTab].title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {tabContent[activeTab].description}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tabContent[activeTab].cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ animationDelay: card.delay }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-lg flex items-center justify-center mb-6">
                    <FontAwesomeIcon icon={card.icon} className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                  <p className="text-gray-600">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Title and CTA */}
        <div className="flex justify-between items-center mb-8 animate-slide-up opacity-0 [animation-delay:600ms]">
          <h3 className="text-3xl font-bold text-[#1A1B1E] relative">
            Build a winning campaign
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#4ADE80] rounded-full"></div>
          </h3>
          <button className="bg-[#1A1B1E] text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:translate-x-2 flex items-center space-x-2">
            <span>More Prep Tips</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {getFilteredResources().map((resource, index) => (
            <div
              key={index}
              onClick={() => setSelectedResource(resource)}
              className={`${resource.bgColor} rounded-2xl p-8 hover:scale-105 transition-all duration-300 animate-slide-up opacity-0 cursor-pointer`}
              style={{ animationDelay: resource.delay }}
            >
              <h4 className="text-2xl font-bold text-white mb-4">
                {resource.title}
              </h4>
              <p className="text-white/90 text-base leading-relaxed mb-4">
                {resource.description}
              </p>
              <div className="flex items-center justify-between text-white/80 text-sm">
                <span>{resource.category}</span>
                <span>{new Date(resource.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Resource Modal */}
        {selectedResource && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{selectedResource.title}</h3>
                  <button
                    onClick={() => setSelectedResource(null)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-xl" />
                  </button>
                </div>
                <div className={`${selectedResource.bgColor} rounded-xl p-8 mb-6`}>
                  <p className="text-white text-lg leading-relaxed mb-4">
                    {selectedResource.description}
                  </p>
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold text-xl">Key Takeaways:</h4>
                    <ul className="text-white/90 space-y-2 list-disc pl-5">
                      <li>Understanding your target audience</li>
                      <li>Creating compelling campaign content</li>
                      <li>Setting realistic funding goals</li>
                      <li>Building an engaged community</li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedResource(null)}
                    className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors mr-4"
                  >
                    Close
                  </button>
                  <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
                    Read Full Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Inspiration Section */}
        <div className="bg-gradient-to-br from-gray-50 to-teal-50 py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 animate-fade-up">
              <span className="inline-block px-4 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold mb-4">
                <FontAwesomeIcon icon={faStar} className="mr-2" />
                Discover Creativity
              </span>
              <h3 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent mb-6">
                Get Inspired
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Unlock your creative potential with our curated resources and vibrant community of creators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Left Image Card */}
              <div className="group relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl animate-fade-up">
                <img 
                  src="https://static.readdy.ai/image/93416ac9d466f5c46eb665d7ccf1284f/b61f0c83c55bfcf07cfc6df5a681c9ac.png" 
                  alt="Creative Inspiration" 
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end backdrop-blur-sm group-hover:backdrop-blur-0">
                  <div className="p-10">
                    <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                      <span className="inline-block px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm font-semibold mb-4">
                        <FontAwesomeIcon icon={faBullseye} className="mr-2" />
                        Featured Opportunity
                      </span>
                      <h4 className="text-3xl font-bold text-white mb-4">Open Calls for Creators</h4>
                      <p className="text-white/90 text-lg leading-relaxed mb-6">
                        Transform your creative vision into reality. Join our community of innovators and showcase your unique projects to a global audience of passionate creators and supporters.
                      </p>
                      <button className="group/btn px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg hover:bg-white hover:text-teal-600 transition-all duration-300 !rounded-button whitespace-nowrap flex items-center gap-3">
                        Explore Open Calls
                        <FontAwesomeIcon icon={faArrowRight} className="transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Content Cards */}
              <div className="space-y-8 animate-fade-up">
                {/* Creative Resources Card */}
                <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100/50">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                      <FontAwesomeIcon icon={faLightbulb} className="text-3xl text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-1">Creative Resources</h4>
                      <p className="text-teal-600">Tools for your creative journey</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    Access our expertly curated collection of resources, comprehensive guides, and professional tools designed to transform your creative vision into reality.
                  </p>
                  <div className="flex flex-wrap gap-4 mb-8">
                    <span className="group/tag px-6 py-3 bg-teal-50 rounded-full text-teal-700 font-medium hover:bg-teal-100 transition-colors duration-300 flex items-center gap-2">
                      <FontAwesomeIcon icon={faPenFancy} className="text-teal-500" />
                      Guides
                    </span>
                    <span className="group/tag px-6 py-3 bg-emerald-50 rounded-full text-emerald-700 font-medium hover:bg-emerald-100 transition-colors duration-300 flex items-center gap-2">
                      <FontAwesomeIcon icon={faChartLine} className="text-emerald-500" />
                      Templates
                    </span>
                    <span className="group/tag px-6 py-3 bg-cyan-50 rounded-full text-cyan-700 font-medium hover:bg-cyan-100 transition-colors duration-300 flex items-center gap-2">
                      <FontAwesomeIcon icon={faPlayCircle} className="text-cyan-500" />
                      Tutorials
                    </span>
                  </div>
                  <button className="group/btn w-full px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 !rounded-button whitespace-nowrap flex items-center justify-center gap-3">
                    Explore Resources
                    <FontAwesomeIcon icon={faArrowRight} className="transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>

                {/* Community Spotlight Card */}
                <div className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100/50">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                      <FontAwesomeIcon icon={faUsers} className="text-3xl text-white" />
                </div>
                <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-1">Community Spotlight</h4>
                      <p className="text-blue-600">Connect & Grow Together</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    Join a thriving community of passionate creators, share your creative journey, and draw inspiration from countless success stories that showcase the power of collaboration.
                  </p>
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">50K+</div>
                      <div className="text-sm text-blue-600">Creators</div>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-indigo-600 mb-1">1.2M+</div>
                      <div className="text-sm text-indigo-600">Projects</div>
                    </div>
                    <div className="bg-violet-50 p-4 rounded-xl text-center">
                      <div className="text-2xl font-bold text-violet-600 mb-1">98%</div>
                      <div className="text-sm text-violet-600">Success Rate</div>
                    </div>
                  </div>
                  <button className="group/btn w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:shadow-lg transition-all duration-300 !rounded-button whitespace-nowrap flex items-center justify-center gap-3">
                    Join the Community
                    <FontAwesomeIcon icon={faArrowRight} className="transform group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { 
              transform: translate(0, 0) scale(1) rotate(0deg); 
            }
            33% { 
              transform: translate(20px, -20px) scale(1.1) rotate(120deg); 
            }
            66% { 
              transform: translate(-20px, 20px) scale(0.9) rotate(240deg); 
            }
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes slideRight {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
          @keyframes float {
            0%, 100% {
              transform: translateY(0) scale(1);
            }
            50% {
              transform: translateY(-10px) scale(1.02);
            }
          }
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes floatSlow {
            0%, 100% {
              transform: translate(0, 0) rotate(0deg);
            }
            25% {
              transform: translate(5px, -5px) rotate(1deg);
            }
            75% {
              transform: translate(-5px, 5px) rotate(-1deg);
            }
          }
          @keyframes pulseSlow {
            0%, 100% {
              opacity: 0.2;
            }
            50% {
              opacity: 0.4;
            }
          }
          .animate-blob {
            animation: blob 20s infinite linear;
          }
          .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
          }
          .animate-slide-right {
            animation: slideRight 0.3s ease-out forwards;
            transform-origin: left;
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .animate-fade-up {
            animation: fadeUp 0.6s ease-out forwards;
          }
          .animate-float-slow {
            animation: floatSlow 8s ease-in-out infinite;
          }
          .animate-pulse-slow {
            animation: pulseSlow 4s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Resources;
