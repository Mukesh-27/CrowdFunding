import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const SuccessStories = () => {
    const testimonials = [
        {
            id: 1,
            name: "Sarah Chen",
            role: "Tech Entrepreneur",
            image: "https://readdy.ai/api/search-image?query=professional headshot of a confident female tech entrepreneur in her 30s wearing business casual attire natural lighting studio setting&width=100&height=100&orientation=squarish&flag=6446f090bd3d6071676e6acd54f5c3f1",
            testimonial: "CrowdFund was instrumental in helping us launch our AI-powered sustainability platform. The community's support and feedback were invaluable in refining our product."
        },
        {
            id: 2,
            name: "Marcus Rodriguez",
            role: "Artist & Designer",
            image: "https://readdy.ai/api/search-image?query=professional headshot of a creative male artist in his 40s with glasses artistic environment natural lighting&width=100&height=100&orientation=squarish&flag=3cd33097bbcbfa248bdcaad06dd38343",
            testimonial: "The platform's reach helped me connect with art enthusiasts worldwide. My interactive art installation project exceeded its funding goal by 200%."
        },
        {
            id: 3,
            name: "Emily Zhang",
            role: "Game Developer",
            image: "https://readdy.ai/api/search-image?query=professional headshot of a young female game developer in her 20s casual tech office environment natural lighting&width=100&height=100&orientation=squarish&flag=4248e9162e796fbee721c8257b3af768",
            testimonial: "As an indie game developer, CrowdFund provided the perfect platform to build a community around our game. The support we received was overwhelming."
        }
    ];

    return (
        <div className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                    Success Stories
                </h2>
                <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
                    Hear from creators who brought their dreams to life through CrowdFund
                </p>

                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        reverseDirection: false,
                    }}
                    speed={1000}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="testimonials-swiper"
                >
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <SwiperSlide key={`${testimonial.id}-${index}`}>
                            <div className="bg-white p-8 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105">
                                <div className="flex items-center mb-6">
                                    <img 
                                        src={testimonial.image} 
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold text-lg">{testimonial.name}</h4>
                                        <p className="text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    &ldquo;{testimonial.testimonial}&rdquo;
                                </p>
                                <div className="mt-6 flex text-yellow-400">
                                    {[...Array(5)].map((_, index) => (
                                        <i key={index} className="fas fa-star"></i>
                                    ))}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SuccessStories;
