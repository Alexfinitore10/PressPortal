import React, { useState, useRef, useEffect } from 'react';

const InteractiveCard = ({ immagine, titolo, descrizione }) => {
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

  return (
    <div
      ref={cardRef}
      className="relative w-full md:w-[300px] bg-white rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        boxShadow: `
          0 10px 30px -10px rgba(0, 0, 0, 0.3),
          ${rotateY / 5}px ${rotateX / 5}px 30px rgba(0, 0, 0, 0.2)
        `,
      }}
    >
      <div className="absolute inset-0" 
           style={{
             background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%)`
           }}
      />
      <div className="relative z-10 p-6">
        <div className="flex justify-center mb-4">
          <img src={immagine} alt="immagine" className="w-full h-48 object-cover rounded-xl shadow-md" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{titolo}</h2>
        <p className="text-gray-600">{descrizione}</p>
      </div>
    </div>
  );
};

export default InteractiveCard;