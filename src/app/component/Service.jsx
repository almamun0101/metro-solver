// components/ServicesSection.js

import { HiOutlinePencil, HiOutlineCode, HiOutlineVideoCamera, HiOutlineChartBar, HiOutlineLightBulb, HiOutlineSearch } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';

// Service data can be easily managed here
const services = [
  {
    icon: <HiOutlinePencil className="w-8 h-8 text-white" />,
    title: 'Graphic Design',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is effortless.',
  },
  {
    icon: <HiOutlineCode className="w-8 h-8 text-white" />,
    title: 'Web & Software Development',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
    highlighted: true, // This will apply the special border
  },
  {
    icon: <HiOutlineVideoCamera className="w-8 h-8 text-white" />,
    title: 'Multimedia & Video Editing',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineChartBar className="w-8 h-8 text-white" />,
    title: 'Digital Marketing',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-white" />,
    title: 'Creative Writing Solution',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineSearch className="w-8 h-8 text-white" />,
    title: 'SEO',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineChartBar className="w-8 h-8 text-white" />,
    title: 'Digital Marketing',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-white" />,
    title: 'Creative Writing Solution',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineSearch className="w-8 h-8 text-white" />,
    title: 'SEO',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineChartBar className="w-8 h-8 text-white" />,
    title: 'Digital Marketing',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-white" />,
    title: 'Creative Writing Solution',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineSearch className="w-8 h-8 text-white" />,
    title: 'SEO',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineChartBar className="w-8 h-8 text-white" />,
    title: 'Digital Marketing',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-white" />,
    title: 'Creative Writing Solution',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
  {
    icon: <HiOutlineSearch className="w-8 h-8 text-white" />,
    title: 'SEO',
    description: 'We are constantly growing or learning and improving. Enter your personal real estate sanctuary, where finding the ideal home is.',
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-[#0B0815] min-h-screen font-sans">
      <div className="container mx-auto px-4 py-16">
        {/* Optional Header from the image */}
        <div className="flex justify-between items-center mb-16">
          <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700 transition-colors duration-300">
            Get My 15% OFF
          </button>
          {/* Placeholder for user icon */}
          <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
        </div>

        {/* Main Services Section */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Enter your personal real estate sanctuary, where finding the ideal home is effortless and comfortable with our assistance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                bg-[#161228] p-8 rounded-2xl transition-all duration-300
                ${service.highlighted ? 'border-2 border-purple-500 shadow-lg shadow-purple-500/20' : 'border border-gray-800'}
                hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-2
              `}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6">
                {service.description}
              </p>
              <a href="#" className="text-purple-400 font-semibold flex items-center gap-2 hover:text-purple-300">
                Read More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;