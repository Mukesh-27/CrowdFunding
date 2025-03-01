import React from 'react';

const ExploreCategories = () => {
    const categories = [
        {
            icon: "fas fa-microchip",
            title: "Technology",
            projects: "2,451 Projects"
        },
        {
            icon: "fas fa-palette",
            title: "Arts & Culture",
            projects: "1,832 Projects"
        },
        {
            icon: "fas fa-gamepad",
            title: "Games",
            projects: "1,654 Projects"
        },
        {
            icon: "fas fa-film",
            title: "Film & Video",
            projects: "1,243 Projects"
        },
        {
            icon: "fas fa-music",
            title: "Music",
            projects: "987 Projects"
        },
        {
            icon: "fas fa-pencil-ruler",
            title: "Design",
            projects: "876 Projects"
        }
    ];

    return (
        <div id="explore-categories" className="bg-gradient-to-b from-white to-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    Explore Categories
                </h2>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Discover innovative projects across different categories and be part of something extraordinary
                </p>

                <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {categories.map((category, index) => (
                        <button 
                            key={index}
                            className="p-8 rounded-2xl transition-all duration-300 text-center group hover:shadow-xl transform hover:-translate-y-1 bg-white text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 !rounded-button"
                        >
                            <i className={`${category.icon} text-4xl mb-6 text-blue-600 group-hover:text-purple-600`}></i>
                            <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
                            <p className="text-sm opacity-80">{category.projects}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExploreCategories;
