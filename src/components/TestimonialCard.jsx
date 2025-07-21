import React from 'react';

const TestimonialCard = ({ image, name, status, message1, message2, isWhite }) => {
  return (
    <div className={`p-10 font-[--font-barlow] ${isWhite ? "text-white" : "text-[#49556B]"}`}>
      
      {/* Top section with image and name/status */}
      <div className="flex mb-6">
        <img
          src={image}
          alt="testimonial"
          className="w-12 h-12 rounded-full border-2 border-opacity-10 object-cover"
        />

        <div className="ml-6">
          <p className="font-semibold text-base">{name}</p> {/* weight 600 */}
          <p className="text-base font-medium opacity-70">{status}</p> {/* weight 500 */}
        </div>
      </div>

      {/* Quote section */}
      <p className="text-xl font-semibold mb-3 leading-snug">{message1}</p> {/* weight 600 */}
      <p className="text-base font-medium opacity-90 leading-relaxed"> {`" ${message2} "`}</p> {/* weight 500 */}
    </div>
  );
};

export default TestimonialCard;