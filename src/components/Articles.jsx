import React, { useState, useRef, useEffect } from 'react';

const InteractiveCard = ({ image, title, description, publishedDate, bodyPreview, tags = [], onTagClick }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;
    const mouseX = e.clientX - cardCenterX;
    const mouseY = e.clientY - cardCenterY;
    const rotateY = (mouseX / rect.width) * 10;
    const rotateX = -(mouseY / rect.height) * 10;
    setRotateX(rotateX);
    setRotateY(rotateY);
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
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
    onTagClick(tag);
  };

  return (
    <div
      ref={cardRef}
      className="relative w-full md:w-[400px] bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        boxShadow: `
          0 10px 30px -10px rgba(0, 0, 0, 0.3),
          ${rotateY / 5}px ${rotateX / 5}px 30px rgba(0, 0, 0, 0.2)
        `,
      }}
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
      <div className="absolute bottom-0 left-0 right-0 bg-white py-4 px-8 rounded-b-2xl">
        <div className="flex flex-wrap gap-2 justify-end">
          {tags.split(', ').map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-200"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveCard;
