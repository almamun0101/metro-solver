// components/WorkCard.js
import Image from 'next/image';

const WorkCard = ({ children, aspectRatio = 'aspect-w-16 aspect-h-9' }) => {
  return (
    <div className={`relative w-full rounded-2xl overflow-hidden bg-cardBg transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purpleAccent/20`}>
      {/* The children prop allows us to insert specific content for each card */}
      {children}
    </div>
  );
};

export default WorkCard;