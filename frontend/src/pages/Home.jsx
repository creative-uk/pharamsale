import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Header2 from './Header2';
import Footer from './Footer';
import image1 from '../assets/image-1.png';
import image2 from '../assets/image-2.png';
import image3 from '../assets/image-3.png';
import image4 from '../assets/image-4.png';
import image5 from '../assets/image-5.png';

// Sample data for categories
const categories = [
  { id: 1, image: image1, text: 'Food & Nutraceuticals' },
  { id: 2, image: image2, text: 'Packaging Components' },
  { id: 3, image: image3, text: 'Excipients' },
  { id: 4, image: image4, text: 'Pharmaceuticals' },
  { id: 5, image: image5, text: 'Lab Equipment' },
  { id: 6, image: image1, text: 'Food & Nutraceuticals' },
  { id: 7, image: image2, text: 'Packaging Components' },
  { id: 8, image: image3, text: 'Excipients' },
  { id: 9, image: image4, text: 'Pharmaceuticals' },
];

const CategoriesCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 5;

  // Handler for navigation arrows
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, categories.length - visibleItems)
    );
  };

  return (
    <div className="flex items-center justify-between py-8">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        disabled={startIndex === 0}
        className="text-[#0EBBC6] hover:bg-gray-200 p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaChevronLeft size={30} />
      </button>

      {/* Carousel Content */}
      <div className="flex overflow-hidden w-full space-x-4 justify-center">
        {categories.slice(startIndex, startIndex + visibleItems).map((category) => (
          <div
            key={category.id}
            className="flex-shrink-0 w-1/5 text-center bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img 
              src={category.image} 
              alt={category.text} 
              className="w-full h-32 object-cover" 
              style={{ objectFit: 'cover' }} 
            />
            <p className="text-black font-medium py-2">{category.text}</p>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        disabled={startIndex + visibleItems >= categories.length}
        className="text-[#0EBBC6] hover:bg-gray-200 p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <FaChevronRight size={30} />
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Header2 />
      <div className="px-8 mt-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">Categories</h2>
        <CategoriesCarousel />
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
