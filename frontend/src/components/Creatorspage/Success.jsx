import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

const Success = () => {
  return (
    <div className="mb-16 bg-gradient-to-b from-white to-[#FFF8F5]">
      <div className="text-center mb-12 animate-slide-up opacity-0 [animation-delay:200ms]">
        <h2 className="text-3xl font-bold text-[#1A1B1E] mb-4">Success Stories</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how creators like you have turned their dreams into reality through our platform
        </p>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay, EffectCards]}
        className="mb-12 px-4"
      >
        <SwiperSlide>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1000&auto=format&fit=crop"
                alt="Success Story 1"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4ADE80]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#4ADE80]/10 to-transparent">
              <h3 className="text-xl font-semibold text-[#1A1B1E] mb-2">Creative Art Gallery</h3>
              <p className="text-gray-600 mb-4">
                "From a small studio to a thriving gallery. Our community helped us showcase artists from around the world!"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[#4ADE80] font-medium">$85,000 raised</span>
                <button className="text-sm text-[#4ADE80] hover:text-[#3ca368] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Read Full Story →
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop"
                alt="Success Story 2"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#DDB6FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#DDB6FF]/10 to-transparent">
              <h3 className="text-xl font-semibold text-[#1A1B1E] mb-2">Tech Innovation Hub</h3>
              <p className="text-gray-600 mb-4">
                "Our AI-powered solution found its first 1000 users through this amazing community of early adopters!"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[#DDB6FF] font-medium">$220,000 raised</span>
                <button className="text-sm text-[#DDB6FF] hover:text-[#c49ee6] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Read Full Story →
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 group">
            <div className="h-48 overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1556760544-74068565f05c?q=80&w=1000&auto=format&fit=crop"
                alt="Success Story 3"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFD43B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            </div>
            <div className="p-6 bg-gradient-to-br from-[#FFD43B]/10 to-transparent">
              <h3 className="text-xl font-semibold text-[#1A1B1E] mb-2">Sustainable Fashion</h3>
              <p className="text-gray-600 mb-4">
                "From concept to runway: Our eco-friendly fashion line is now in stores across 12 countries!"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[#FFD43B] font-medium">$180,000 raised</span>
                <button className="text-sm text-[#FFD43B] hover:text-[#e6bf35] font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Read Full Story →
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Success;
