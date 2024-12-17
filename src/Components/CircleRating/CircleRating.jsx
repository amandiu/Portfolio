import React, { useState } from "react";

const CircleRating = ({ defaultRating, Language }) => {
  const [rating, setRating] = useState(defaultRating); // Default rating

  return (
    <div className="flex items-center justify-between w-80 ">
      <div className="ml-[-15px] text-xl text-white font-bold">
        <li className="list-disc">{Language}</li>
      </div>
      <div className="flex items-center">
        <div className="rating rating-lg rating-half">
          <input
            type="radio"
            name="circle-rating"
            className="rating-hidden"
            onChange={() => setRating(0)}
          />
          {[...Array(5)].map((_, i) => (
            <input
              key={i}
              type="radio"
              name="circle-rating"
              className="bg-orange-500 mask  mask-circle m-1"
              checked={rating === i + 1}
              onChange={() => setRating(i + 1)}
            />
          ))}
        </div>
        <div className="ml-4 text-lg font-bold">{rating} / 5</div>
      </div>
    </div>
  );
};

export default CircleRating;
