import React from 'react';

const SearchResults = ({ totalProjects, viewMode, setViewMode }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg border border-gray-200">
        <button 
          onClick={() => setViewMode('grid')}
          className={`p-2 rounded-lg transition-all duration-200 ${
            viewMode === 'grid' 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-gray-600 hover:text-blue-600'
          }`}
          aria-label="Grid view"
        >
          <i className="fas fa-th-large"></i>
        </button>
        <button 
          onClick={() => setViewMode('list')}
          className={`p-2 rounded-lg transition-all duration-200 ${
            viewMode === 'list' 
              ? 'bg-white text-blue-600 shadow-sm' 
              : 'text-gray-600 hover:text-blue-600'
          }`}
          aria-label="List view"
        >
          <i className="fas fa-list"></i>
        </button>
      </div>
    </div>
  );
};

export default SearchResults; 