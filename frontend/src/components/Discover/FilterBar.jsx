import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  const categories = [
    'All', 'Technology', 'Art', 'Film', 'Games', 'Music', 'Design', 'Food'
  ];

  const sortOptions = [
    { value: 'trending', label: 'Trending' },
    { value: 'newest', label: 'Newest' },
    { value: 'most-funded', label: 'Most Funded' },
    { value: 'ending-soon', label: 'Ending Soon' }
  ];

  return (
    <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
      {/* Category Filter */}
      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
        className="px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all duration-200 hover:bg-white min-w-[120px]"
      >
        {categories.map(category => (
          <option key={category.toLowerCase()} value={category.toLowerCase()}>
            {category}
          </option>
        ))}
      </select>

      {/* Sort Filter */}
      <select
        value={filters.sort}
        onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
        className="px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all duration-200 hover:bg-white min-w-[140px]"
      >
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {/* Status Filters */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilters({ ...filters, status: 'all' })}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            filters.status === 'all'
              ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-700'
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilters({ ...filters, status: 'active' })}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            filters.status === 'active'
              ? 'bg-blue-600 text-white shadow-sm hover:bg-blue-700'
              : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
          }`}
        >
          Active
        </button>
      </div>
    </div>
  );
};

export default FilterBar; 