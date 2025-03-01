import React, { useState } from 'react';

const FeaturedProjects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const projects = [
        {
            id: 1,
            image: "https://readdy.ai/api/search-image?query=modern sleek smart home energy management system device with elegant design minimalist white background professional product photography high end tech&width=400&height=300&orientation=landscape&flag=c7f3fcb6f94c47f3410b9e123c6fa30d",
            title: "EcoTech Smart Home Energy System",
            description: "Revolutionary AI-powered system that reduces home energy consumption by 40%",
            raised: "$850,000 raised",
            progress: "85%",
            daysLeft: "15 days left",
            backers: "3240 backers",
            fullDescription: "The EcoTech Smart Home Energy System is a revolutionary solution that combines AI technology with advanced energy management. Our system learns from your daily habits and automatically optimizes energy usage, resulting in up to 40% reduction in energy consumption. Perfect for environmentally conscious homeowners looking to reduce their carbon footprint while saving on energy bills.",
            features: [
                "AI-powered energy optimization",
                "Real-time energy monitoring",
                "Smart device integration",
                "Mobile app control",
                "Energy usage analytics"
            ],
            creator: "EcoTech Innovations",
            category: "Technology",
            location: "San Francisco, CA"
        },
        {
            id: 2,
            image: "https://readdy.ai/api/search-image?query=futuristic quantum computing development board with blue light effects clean minimal background professional tech product&width=400&height=300&orientation=landscape&flag=c5af5383bf3780b706a056b05b7ad3bb",
            title: "Quantum Computing Development Kit",
            description: "Open-source toolkit for quantum computing research and development",
            raised: "$425,000 raised",
            progress: "85%",
            daysLeft: "21 days left",
            backers: "1876 backers",
            fullDescription: "The Quantum Computing Development Kit is an innovative open-source platform designed to accelerate quantum computing research and development. Our toolkit provides researchers, developers, and enthusiasts with the essential tools and resources needed to explore quantum computing concepts and build quantum applications.",
            features: [
                "Quantum circuit simulator",
                "Quantum algorithm library",
                "Interactive tutorials",
                "Development environment",
                "Community resources"
            ],
            creator: "Quantum Tech Labs",
            category: "Technology",
            location: "Boston, MA"
        },
        {
            id: 3,
            image: "https://readdy.ai/api/search-image?query=sustainable fashion collection made from recycled materials elegant minimal studio photography white background&width=400&height=300&orientation=landscape&flag=a1f33b4edd0f9ddb67e78fbf4370baa3",
            title: "Sustainable Fashion Collection",
            description: "Eco-friendly fashion line made from recycled ocean plastics",
            raised: "$180,000 raised",
            progress: "90%",
            daysLeft: "8 days left",
            backers: "942 backers",
            fullDescription: "Our Sustainable Fashion Collection represents a revolutionary approach to eco-friendly fashion. By transforming recycled ocean plastics into stylish, contemporary clothing, we're not just creating fashion – we're making a statement about sustainability. Each piece in our collection helps remove plastic waste from our oceans while providing you with comfortable, trendy clothing options.",
            features: [
                "100% recycled materials",
                "Ocean plastic transformation",
                "Sustainable production process",
                "Modern design aesthetic",
                "Eco-friendly packaging"
            ],
            creator: "EcoStyle Fashion",
            category: "Fashion",
            location: "Los Angeles, CA"
        }
    ];

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <div className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    Featured Projects
                </h2>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Groundbreaking ideas that are shaping the future
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project) => (
                        <div 
                            key={project.id} 
                            className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl cursor-pointer"
                            onClick={() => openModal(project)}
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.description}
                                </p>
                                <div className="mb-4">
                                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                                        <span>{project.raised}</span>
                                        <span>{project.progress}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-blue-600 rounded-full h-2" 
                                            style={{ width: project.progress }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-600">
                                        <i className="fas fa-clock mr-2"></i>
                                        {project.daysLeft}
                                    </div>
                                    <div className="text-sm text-gray-600">
                                        <i className="fas fa-user mr-2"></i>
                                        {project.backers}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {isModalOpen && selectedProject && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {selectedProject.title}
                                </h3>
                                <button 
                                    onClick={closeModal}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    <i className="fas fa-times text-xl"></i>
                                </button>
                            </div>
                            <div className="p-6">
                                <div className="rounded-xl overflow-hidden mb-6">
                                    <img 
                                        src={selectedProject.image} 
                                        alt={selectedProject.title}
                                        className="w-full h-[400px] object-cover"
                                    />
                                </div>
                                <div className="grid md:grid-cols-3 gap-6 mb-8">
                                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                                        <p className="text-sm text-gray-600">Raised</p>
                                        <p className="text-xl font-bold text-blue-600">{selectedProject.raised}</p>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                                        <p className="text-sm text-gray-600">Backers</p>
                                        <p className="text-xl font-bold text-blue-600">{selectedProject.backers}</p>
                                    </div>
                                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                                        <p className="text-sm text-gray-600">Time Left</p>
                                        <p className="text-xl font-bold text-blue-600">{selectedProject.daysLeft}</p>
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                                        <span>{selectedProject.raised}</span>
                                        <span>{selectedProject.progress}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div 
                                            className="bg-blue-600 rounded-full h-2" 
                                            style={{ width: selectedProject.progress }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">About this project</h4>
                                        <p className="text-gray-600">{selectedProject.fullDescription}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Key Features</h4>
                                        <ul className="list-disc list-inside text-gray-600">
                                            {selectedProject.features.map((feature, index) => (
                                                <li key={index}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-gray-600">
                                        <div>
                                            <p className="font-semibold">Creator</p>
                                            <p>{selectedProject.creator}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Category</p>
                                            <p>{selectedProject.category}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Location</p>
                                            <p>{selectedProject.location}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:shadow-xl transition-all duration-300 font-semibold">
                                        Back this Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FeaturedProjects;
