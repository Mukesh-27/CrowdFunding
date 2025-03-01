import React from 'react';
import { useNavigate } from 'react-router-dom';
import Success from './Success';

const Landing = () => {
  const navigate = useNavigate();

  const handleNavigateToResources = () => {
    navigate('/resource-hub');
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen bg-[#FFF8F5] w-full">
        <div className="w-full h-full relative pt-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-12 gap-8 items-start py-16">
              {/* Left Column */}
              <div className="col-span-7 relative z-10">
                <div className="animate-slide-up opacity-0 [animation-delay:200ms]">
                  <h1 className="text-[6rem] font-bold text-[#1A1B1E] leading-[1.1] mb-8">
                    Unlock your
                    <br />
                    <span className="relative inline-block">
                      funding
                    </span>
                    <br />
                    potential
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                    Whatever your dream, the power to make it real lives on our platform. Join the biggest community of backers ready to bring your ideas to life.
                  </p>
                  <button 
                    onClick={handleNavigateToResources}
                    className="bg-[#1A1B1E] text-white px-10 py-5 text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all"
                  >
                    Lets go
                  </button>
                </div>
              </div>

              {/* Right Column with Images and Blobs */}
              <div className="col-span-5 relative">
                <div className="relative h-[600px]">
                  {/* Blob Backgrounds */}
                  <div className="absolute -right-40 -top-20 w-[600px] h-[600px]">
                    {/* Purple Blob */}
                    <div 
                      className="absolute left-0 top-0 w-[400px] h-[400px] animate-blob"
                      style={{
                        background: '#DDB6FF',
                        borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
                        opacity: '0.7'
                      }}
                    />
                    {/* Green Blob */}
                    <div 
                      className="absolute right-0 top-0 w-[350px] h-[350px] animate-blob [animation-delay:2s]"
                      style={{
                        background: '#4ADE80',
                        borderRadius: '30% 70% 70% 30% / 40% 60% 40% 60%',
                        opacity: '0.7'
                      }}
                    />
                    {/* Yellow Blob */}
                    <div 
                      className="absolute left-20 bottom-0 w-[300px] h-[300px] animate-blob [animation-delay:4s]"
                      style={{
                        background: '#FFD43B',
                        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                        opacity: '0.7'
                      }}
                    />

                    {/* Images */}
                    <div className="relative z-10">
                      {/* Product Image */}
                      <div className="absolute right-20 top-10 w-[400px] h-[300px] rounded-2xl overflow-hidden shadow-lg animate-float">
                        <img 
                          src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1000&auto=format&fit=crop"
                          alt="Product"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Person Image */}
                      <div className="absolute left-10 bottom-20 w-[350px] h-[400px] rounded-2xl overflow-hidden shadow-lg animate-float [animation-delay:2s]">
                        <img 
                          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop"
                          alt="Creator"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create with Confidence Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-[#1A1B1E] mb-16 animate-slide-up opacity-0 [animation-delay:400ms]">
            Create with confidence
          </h2>
          
          <div className="grid grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-3xl bg-[#4ADE80] p-8 transform hover:scale-105 transition-all duration-300 animate-slide-up opacity-0 [animation-delay:600ms]">
              <h3 className="text-3xl font-bold text-[#1A1B1E] mb-4">
                23 million+ backers on platform
              </h3>
              <p className="text-[#1A1B1E] text-lg leading-relaxed">
                Connect with passionate, engaged backers who share your values and interests. You'll find your community here — people who get your vision and are excited to support it.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl bg-[#DDB6FF] p-8 transform hover:scale-105 transition-all duration-300 animate-slide-up opacity-0 [animation-delay:800ms]">
              <h3 className="text-3xl font-bold text-[#1A1B1E] mb-4">
                Creative independence
              </h3>
              <p className="text-[#1A1B1E] text-lg leading-relaxed">
                Create on your own terms. You'll always have complete creative control and ownership of every project you launch on our platform.
              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl bg-[#FFD43B] p-8 transform hover:scale-105 transition-all duration-300 animate-slide-up opacity-0 [animation-delay:1000ms]">
              <h3 className="text-3xl font-bold text-[#1A1B1E] mb-4">
                Empowering platform
              </h3>
              <p className="text-[#1A1B1E] text-lg leading-relaxed">
                We're here to help you succeed. Optimize your results with tools, tips, and support throughout the life of your project and beyond.
              </p>
            </div>
          </div>

          {/* Let's Create Button */}
          <div className="flex justify-center mt-16 animate-slide-up opacity-0 [animation-delay:1200ms]">
            <button className="bg-[#1A1B1E] text-white px-10 py-5 text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all">
              onClick={handleNavigateToResources}
              Let's create
            </button>
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <Success />

      {/* Creator Resources & Guides Section */}
      <div className="bg-gradient-to-br from-white via-[#FFF8F5] to-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up opacity-0 [animation-delay:200ms]">
            <h2 className="text-4xl font-bold text-[#1A1B1E] mb-4">
              Creator Resources & Guides
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to launch and manage a successful campaign
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Campaign Strategy Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up opacity-0 [animation-delay:400ms]">
              <div className="h-48 mb-6 overflow-hidden rounded-xl bg-gradient-to-r from-[#4ADE80] to-[#FFB4A2] p-[2px]">
                <div className="bg-white h-full w-full rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
                    alt="Campaign Strategy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1B1E] mb-4">Campaign Strategy</h3>
              <ul className="space-y-3 mb-6">
                {['Marketing Playbook', 'Audience Building Guide', 'Pricing Strategy Tips'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-[#4ADE80] text-white rounded-xl hover:bg-[#3ca368] transform hover:translate-y-[-2px] transition-all duration-300">
                Access Resources
              </button>
            </div>

            {/* Design & Branding Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up opacity-0 [animation-delay:600ms]">
              <div className="h-48 mb-6 overflow-hidden rounded-xl bg-gradient-to-r from-[#DDB6FF] to-[#4ADE80] p-[2px]">
                <div className="bg-white h-full w-full rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1000&auto=format&fit=crop"
                    alt="Design & Branding"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1B1E] mb-4">Design & Branding</h3>
              <ul className="space-y-3 mb-6">
                {['Brand Identity Guide', 'Visual Content Templates', 'Photography Tips'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-[#DDB6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-[#DDB6FF] text-white rounded-xl hover:bg-[#c49ee6] transform hover:translate-y-[-2px] transition-all duration-300">
                Access Resources
              </button>
            </div>

            {/* Legal & Compliance Card */}
            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up opacity-0 [animation-delay:800ms]">
              <div className="h-48 mb-6 overflow-hidden rounded-xl bg-gradient-to-r from-[#FFD43B] to-[#DDB6FF] p-[2px]">
                <div className="bg-white h-full w-full rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000&auto=format&fit=crop"
                    alt="Legal & Compliance"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#1A1B1E] mb-4">Legal & Compliance</h3>
              <ul className="space-y-3 mb-6">
                {['Legal Guidelines', 'Terms Template', 'Compliance Checklist'].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 text-[#FFD43B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-[#FFD43B] text-white rounded-xl hover:bg-[#e6bf35] transform hover:translate-y-[-2px] transition-all duration-300">
                Access Resources
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Creator Resource Hub Section */}
      <div className="bg-gradient-to-br from-white via-[#FFF8F5] to-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="col-span-6 relative z-10">
              <div className="animate-slide-up opacity-0 [animation-delay:200ms]">
                <h2 className="text-5xl font-bold text-[#1A1B1E] leading-tight mb-6">
                  Learn how to
                  <br />
                  get started.
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Everything you need to get your project off the ground, reach the right
                  people, build a marketing campaign, and see it through.
                </p>
                <button 
                  onClick={handleNavigateToResources}
                  className="bg-[#1A1B1E] text-white px-8 py-4 rounded-xl hover:bg-gray-800 transition-all transform hover:translate-x-2"
                >
                  Let's go
                </button>
              </div>
            </div>

            {/* Right Decorative Elements */}
            <div className="col-span-6 relative">
              <div className="relative h-[400px]">
                {/* Animated Shapes */}
                <div className="absolute right-0 top-0 w-[500px] h-[500px]">
                  {/* Coral Shape */}
                  <div 
                    className="absolute right-20 top-10 w-[300px] h-[300px] animate-float"
                    style={{
                      background: '#FFB4A2',
                      borderRadius: '70% 30% 50% 50% / 50% 50% 50% 50%',
                      opacity: '0.7'
                    }}
                  />
                  {/* Green Shape */}
                  <div 
                    className="absolute right-0 bottom-0 w-[350px] h-[350px] animate-float [animation-delay:1s]"
                    style={{
                      background: '#4ADE80',
                      borderRadius: '60% 40% 30% 70% / 40% 50% 60% 50%',
                      opacity: '0.7'
                    }}
                  />
                </div>

                {/* Join Community Card */}
                <div className="absolute bottom-0 right-20 w-[400px] bg-white rounded-2xl p-8 shadow-xl animate-float [animation-delay:2s]">
                  <h3 className="text-2xl font-bold text-[#1A1B1E] mb-4">
                    Join the Creator Community
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Be the first to know about product updates and enjoy monthly inspiration, 
                    guides & best practices.
                  </p>
                  <div className="flex gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter email address"
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-[#4ADE80]"
                    />
                    <button className="bg-[#1A1B1E] text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all whitespace-nowrap">
                      Sign me up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-br from-[#FFF8F5] via-white to-[#FFF8F5] py-24 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute right-0 top-0 w-[800px] h-[800px] -rotate-45 opacity-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-[#4ADE80]">
            <path d="M47.5,-61.5C59.8,-52.3,67.1,-35.5,71.3,-17.7C75.4,0.2,76.4,19.1,69.4,34.6C62.4,50.1,47.4,62.2,30.2,69.7C13,77.2,-6.4,80,-23.7,74.8C-41,69.6,-56.2,56.4,-65.4,39.8C-74.6,23.2,-77.8,3.2,-73.7,-15.3C-69.6,-33.8,-58.3,-50.8,-43.5,-59.4C-28.7,-68,-14.4,-68.2,2.1,-70.8C18.5,-73.4,37,-70.6,47.5,-61.5Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-[#1A1B1E] animate-slide-up opacity-0 [animation-delay:200ms]">
              Know the platform basics
            </h2>
            <a href="#" className="inline-flex items-center px-6 py-3 rounded-xl border-2 border-[#4ADE80] text-[#1A1B1E] hover:bg-[#4ADE80] hover:text-white transition-all duration-300 animate-slide-up opacity-0 [animation-delay:400ms]">
              Visit the Help Center
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "What can I use the platform to fund?",
                answer: "You can fund creative projects in various categories including technology, art, music, film, design, games, and more. Our platform supports innovative ideas that need community backing.",
                delay: "600ms"
              },
              {
                question: "Who can I get pledges from?",
                answer: "Our global community of backers includes millions of people who are passionate about bringing creative projects to life. Anyone around the world can support your project.",
                delay: "800ms"
              },
              {
                question: "How much work is it to run a project?",
                answer: "Running a project requires dedication and planning. You'll need to create compelling content, engage with backers, and manage your campaign. We provide tools and resources to help you succeed.",
                delay: "1000ms"
              },
              {
                question: "How do I get in touch with questions?",
                answer: "Our support team is here to help! You can reach us through our help center, email support, or community forums. We typically respond within 24 hours.",
                delay: "1200ms"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 animate-slide-up opacity-0"
                style={{ animationDelay: item.delay }}
              >
                <button className="w-full text-left px-8 py-6 focus:outline-none group">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-[#1A1B1E] group-hover:text-[#4ADE80] transition-colors">
                      {item.question}
                    </h3>
                    <span className="transform group-hover:rotate-180 transition-transform duration-300">
                      <svg className="w-6 h-6 text-[#4ADE80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </div>
                  <div className="mt-4 text-gray-600 hidden group-hover:block transition-all duration-300">
                    {item.answer}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}
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
          @keyframes float {
            0%, 100% { 
              transform: translateY(0) rotate(0deg); 
            }
            50% { 
              transform: translateY(-20px) rotate(2deg); 
            }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-blob {
            animation: blob 20s infinite linear;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }
          .animate-slide-up {
            animation: slideUp 0.8s ease-out forwards;
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
        `}
      </style>
    </div>
  );
};

export default Landing;
