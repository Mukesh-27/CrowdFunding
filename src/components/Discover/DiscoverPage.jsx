import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterBar from './FilterBar';
import ProjectCard from './ProjectCard';
import SearchResults from './SearchResults';

const DiscoverPage = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    sort: 'trending',
    status: 'all'
  });
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const projectsPerPage = 6;

  // Enhanced projects array with more diverse examples
  const projects = [
    {
      id: 1,
      title: "Eco-Friendly Water Bottle",
      category: "Technology",
      creator: "Green Solutions Inc",
      fundingGoal: 50000,
      currentFunding: 35000,
      daysLeft: 15,
      backers: 420,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
      description: "Revolutionary water bottle made from sustainable materials that breaks down naturally."
    },
    {
      id: 2,
      title: "Digital Art Collection - Future Cities",
      category: "Art",
      creator: "Sarah Chen",
      fundingGoal: 25000,
      currentFunding: 28000,
      daysLeft: 7,
      backers: 892,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
      description: "A collection of 50 unique digital artworks exploring future cityscapes in vibrant colors."
    },
    {
      id: 3,
      title: "Indie Game: Cosmic Adventures",
      category: "Games",
      creator: "Pixel Dreams Studio",
      fundingGoal: 75000,
      currentFunding: 45000,
      daysLeft: 21,
      backers: 1250,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      description: "An immersive 2D platformer with stunning visuals and original soundtrack."
    },
    {
      id: 4,
      title: "Artisanal Coffee Roaster",
      category: "Food",
      creator: "Coffee Culture Co.",
      fundingGoal: 30000,
      currentFunding: 12000,
      daysLeft: 25,
      backers: 180,
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      description: "Professional-grade coffee roaster for small batch, artisanal coffee roasting."
    },
    {
      id: 5,
      title: "Smart Home Garden System",
      category: "Technology",
      creator: "GreenTech Solutions",
      fundingGoal: 100000,
      currentFunding: 82000,
      daysLeft: 12,
      backers: 756,
      image: "https://images.unsplash.com/photo-1585400172949-b41256d86b89",
      description: "Automated indoor garden system with AI-powered plant care and monitoring."
    },
    {
      id: 6,
      title: "Documentary: Ocean Mysteries",
      category: "Film",
      creator: "Deep Blue Productions",
      fundingGoal: 150000,
      currentFunding: 98000,
      daysLeft: 30,
      backers: 1420,
      image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9",
      description: "A groundbreaking documentary exploring undiscovered marine life."
    },
    {
      id: 7,
      title: "Minimalist Desk Organizer",
      category: "Design",
      creator: "Modern Living Co.",
      fundingGoal: 15000,
      currentFunding: 11000,
      daysLeft: 18,
      backers: 345,
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103",
      description: "Sleek, modular desk organizer made from sustainable bamboo."
    },
    {
      id: 8,
      title: "Alternative Rock Album",
      category: "Music",
      creator: "The Night Owls",
      fundingGoal: 20000,
      currentFunding: 15800,
      daysLeft: 9,
      backers: 630,
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c",
      description: "Debut album featuring 12 original tracks recorded in analog studio."
    },
    {
      id: 9,
      title: "Smart Fitness Mirror",
      category: "Technology",
      creator: "FitTech Innovations",
      fundingGoal: 200000,
      currentFunding: 165000,
      daysLeft: 22,
      backers: 890,
      image: "https://images.unsplash.com/photo-1576678927484-cc907957088c",
      description: "Interactive fitness mirror with AI trainer and real-time feedback."
    },
    {
      id: 10,
      title: "Handcrafted Board Game",
      category: "Games",
      creator: "Tabletop Treasures",
      fundingGoal: 45000,
      currentFunding: 38000,
      daysLeft: 14,
      backers: 720,
      image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09",
      description: "Strategic board game with hand-painted miniatures and premium components."
    },
    {
      id: 11,
      title: "Sustainable Fashion Line",
      category: "Design",
      creator: "EcoChic Wear",
      fundingGoal: 60000,
      currentFunding: 42000,
      daysLeft: 19,
      backers: 385,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d",
      description: "Collection of eco-friendly clothing made from recycled materials."
    },
    {
      id: 12,
      title: "Gourmet Hot Sauce Collection",
      category: "Food",
      creator: "Spice Masters",
      fundingGoal: 12000,
      currentFunding: 9800,
      daysLeft: 11,
      backers: 410,
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
      description: "Set of 5 unique hot sauces crafted with exotic peppers and spices."
    }
  ];

  // Filter and search functionality
  useEffect(() => {
    let results = [...projects];

    // Apply category filter
    if (filters.category !== 'all') {
      results = results.filter(project => 
        project.category.toLowerCase() === filters.category.toLowerCase()
      );
    }

    // Apply status filter
    if (filters.status === 'active') {
      results = results.filter(project => project.daysLeft > 0);
    }

    // Apply search query
    if (searchQuery) {
      results = results.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply sorting
    switch (filters.sort) {
      case 'newest':
        results.sort((a, b) => b.id - a.id);
        break;
      case 'most-funded':
        results.sort((a, b) => b.currentFunding - a.currentFunding);
        break;
      case 'ending-soon':
        results.sort((a, b) => a.daysLeft - b.daysLeft);
        break;
      default: // 'trending'
        results.sort((a, b) => (b.currentFunding / b.fundingGoal) - (a.currentFunding / a.fundingGoal));
    }

    setFilteredProjects(results);
  }, [filters, searchQuery]);

  // Simulate loading delay
  const loadMoreProjects = useCallback(() => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      setPage(prev => prev + 1);
      setIsLoading(false);
    }, 800);
  }, []);

  // Get paginated projects
  const paginatedProjects = filteredProjects.slice(0, page * projectsPerPage);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && paginatedProjects.length < filteredProjects.length) {
          loadMoreProjects();
        }
      },
      { threshold: 0.1 }
    );

    const loadMoreButton = document.getElementById('load-more-trigger');
    if (loadMoreButton) {
      observer.observe(loadMoreButton);
    }

    return () => observer.disconnect();
  }, [isLoading, loadMoreProjects, paginatedProjects.length, filteredProjects.length]);

  return (
    <div className="pt-14 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Main Content */}
        <div className="space-y-4">
          {/* Filters Section */}
          <div className="sticky top-14 z-30 bg-gradient-to-b from-gray-50 pt-3 pb-4">
            <div className="bg-white rounded-lg shadow-sm p-3">
              <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
                {/* Search Bar */}
                <div className="relative w-full md:w-64 flex-shrink-0">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:border-blue-500 pr-10 bg-gray-50 hover:bg-white transition-all duration-200"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <i className="fas fa-search text-gray-400"></i>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block h-8 w-px bg-gray-200"></div>

                {/* Filters */}
                <div className="flex items-center gap-4 flex-1">
                  <FilterBar 
                    filters={filters} 
                    setFilters={setFilters} 
                  />
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block h-8 w-px bg-gray-200"></div>

                {/* View Toggle */}
                <div className="flex-shrink-0">
                  <SearchResults 
                    totalProjects={filteredProjects.length} 
                    viewMode={viewMode} 
                    setViewMode={setViewMode} 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Discover Amazing Projects
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Find and support innovative projects that are shaping the future.
            </p>
          </div>

          {/* Projects Grid/List with Smooth Animations */}
          <AnimatePresence mode="wait">
            <motion.div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {paginatedProjects.map((project) => (
                <motion.div key={project.id}>
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center py-8">
              <div className="loader">
                <div className="w-12 h-12 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600"></div>
              </div>
            </div>
          )}

          {/* Load More Trigger for Infinite Scroll */}
          {paginatedProjects.length < filteredProjects.length && (
            <div 
              id="load-more-trigger" 
              className="text-center mt-8"
            >
              <button 
                onClick={loadMoreProjects}
                disabled={isLoading}
                className={`
                  bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 
                  rounded-full text-sm font-medium transition-all duration-300 
                  hover:shadow-lg transform hover:scale-105
                  ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                {isLoading ? 'Loading...' : 'Load More Projects'}
              </button>
            </div>
          )}

          {/* No Results Message with Animation */}
          <AnimatePresence>
            {filteredProjects.length === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="text-center py-12"
              >
                <p className="text-gray-600 text-lg">No projects found matching your criteria.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DiscoverPage; 