// components/TestimonialSection.jsx

import React from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'; // Using lucide-react for icons

// Define the data structure for the testimonials
const testimonials = [
  {
    id: 1,
    name: 'Katie Johnson',
    title: 'Founder of Strava',
    rating: 5,
    reviewSource: 'Google',
    reviewText: "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.",
    avatar: '/path/to/katie-johnson-avatar.jpg', // Replace with actual path
    sourceIcon: '🌟', // Using an emoji/text for the Google source icon
    isFeatured: false,
  },
  {
    id: 2,
    name: 'Wade Warren',
    title: 'Founder of Strava',
    rating: 4,
    reviewSource: 'Trustpilot',
    reviewText: "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the team and the work they did. I am sincerely grateful for the work and effort.",
    avatar: '/path/to/wade-warren-avatar.jpg', // Replace with actual path
    sourceIcon: '⭐', // Using an emoji/text for the Trustpilot source icon
    isFeatured: true, // This one is the featured/highlighted card
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    title: 'Founder of Strava',
    rating: 5,
    reviewSource: 'Google',
    reviewText: "Metro Solver with Mixer was the best solution. I am very satisfied with the team and the work they did. I am sincerely grateful for the work and effort.",
    avatar: '/path/to/jenny-wilson-avatar.jpg', // Replace with actual path
    sourceIcon: '🌟', // Using an emoji/text for the Google source icon
    isFeatured: false,
  },
];

// Helper component to render the stars
const Stars = ({ count, colorClass }) => (
  <div className="flex space-x-0.5">
    {Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < count ? colorClass : 'text-gray-600'}`}
        fill={i < count ? colorClass : 'none'}
        strokeWidth={0} // No border for the filled stars
      />
    ))}
  </div>
);

// Main component
const TestimonialSection = () => {
  // Utility for the main gradient/glow effect in the dark background
  const backgroundStyle = {
    // This is a simple approximation of the overall dark, purple-tinged background and border.
    backgroundColor: '#0a0a0d',
    backgroundImage: 'radial-gradient(at 50% 10%, #4a007d33, transparent 70%), linear-gradient(to top, #0a0a0d 0%, #15002a 100%)',
    border: '1px solid #2a004f',
  };

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 text-white" style={backgroundStyle}>
      <div className="max-w-6xl mx-auto">
        {/* Title and Description */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">What People Say</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Based on the description of Metro Solver and the image provided, here is a 6-step process that Metro Solver uses to scale a customer's business
          </p>
        </div>

        {/* Testimonial Cards Container */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              // Base Card Styles
              className={`p-6 sm:p-8 rounded-xl flex-1 max-w-sm w-full transition-all duration-300
                ${testimonial.isFeatured
                  // Featured Card Styles (Wade Warren)
                  ? 'bg-gradient-to-br from-[#4A007D] to-[#1F003C] shadow-2xl shadow-[#4A007D]/50 border border-[#6B00B9]'
                  // Regular Card Styles (Katie Johnson & Jenny Wilson)
                  : 'bg-black/40 border border-gray-800 backdrop-blur-sm'
                }
              `}
            >
              {/* Profile and Stars */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  {/* Stars Component */}
                  <Stars
                    count={testimonial.rating}
                    colorClass={testimonial.isFeatured ? 'text-green-400' : 'text-yellow-400'}
                  />
                </div>
              </div>

              {/* Name and Title */}
              <div className="mb-4">
                <p className="text-lg font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.title}</p>
              </div>

              {/* Review Text */}
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                "{testimonial.reviewText}"
              </p>

              {/* Review Source */}
              <div className="flex items-center text-sm">
                {/* Source Icon (using a placeholder for a complex image/logo) */}
                <span className="text-xl mr-2">{testimonial.sourceIcon}</span>
                <span className="font-semibold">{testimonial.reviewSource}</span>
                <span className="ml-2 text-gray-500">| Review by {testimonial.reviewSource.toLowerCase()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation/Slider Controls */}
        <div className="flex justify-center mt-12 space-x-4 relative">
            {/* The active small avatar indicator on top of the controls */}
            <div className="absolute -top-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white ring-4 ring-purple-500/50">
                    <img src={testimonials[1].avatar} alt="Wade Warren" className="w-full h-full object-cover"/>
                </div>
            </div>
            
            {/* Left Chevron Button */}
            <button className="p-3 rounded-full bg-black/50 border border-gray-700 hover:bg-black/70 transition">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            {/* Right Chevron Button */}
            <button className="p-3 rounded-full bg-black/50 border border-gray-700 hover:bg-black/70 transition">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;