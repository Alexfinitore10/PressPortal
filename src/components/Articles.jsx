import React, { useState, useRef, useEffect } from 'react';

const InteractiveCard = ({ image, title, description, publishedDate, bodyPreview, tags = [], onTagClick }) => {
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setGlarePosition({ x: 50, y: 50 });
  };

  useEffect(() => {
    const card = cardRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }
    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const handleTagClick = (tag) => {
    if (onTagClick) {
      onTagClick(tag);
    }
  };

  // Assicuriamoci che tags sia sempre un array
  const tagsArray = Array.isArray(tags) ? tags : (typeof tags === 'string' ? tags.split(',').map(tag => tag.trim()) : []);

  return (
    /* <div
      ref={cardRef}
      className="relative flex flex-col md:w-[400px] bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl mx-4 my-6 border border-red-500" // Margini esterni aggiunti
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)`,
        }}
      />
      <div className="relative z-10 p-8 pb-20">
        <div className="flex justify-center mb-6">
          <img
            src={image}
            alt="Immagine articolo"
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <h3 className="text-xl font-medium text-gray-600 mb-4">{description}</h3>
        <p className="text-gray-500 mb-4">{publishedDate}</p>
        <p className="text-gray-700 mb-6">{bodyPreview}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white py-4 px-8 rounded-b-2xl z-20">
        <div className="flex flex-wrap gap-2 justify-end">
          {tagsArray.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-800 hover:text-white transition-colors duration-200"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div> */
    <>
      <div class="bg-white rounded-lg shadow-lg overflow-hidden p-6 flex flex-col">
        <div class="w-full h-40 mb-4 relative">
          <img
            src={image}
            alt="Immagine articolo"
            class="w-full h-full object-cover rounded-md"
          />
        </div>
      <div class="w-full mb-2">
        <h2 class="text-2xl font-semibold text-gray-800">
          {title}
        </h2>
      </div>

      <div class="w-full mb-4">
        <p class="text-gray-600 text-sm">
          {description}
        </p>
      </div>

      <div class="w-full">
        <p class="text-gray-500 text-xs">
          {publishedDate}
        </p>
      </div>
    </div>


    </>
  );
};

export default InteractiveCard;
