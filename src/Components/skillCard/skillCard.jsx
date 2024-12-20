import React from "react";

const SkillCard = ({ value, name }) => {
  const totalCircles = 5;
  const circles = Array.from({ length: totalCircles }, (_, index) => (
    <span
      key={index}
      className={`inline-block h-4 w-4  rounded-full ${
        index < value ? "bg-green-500" : "bg-gray-300"
      }`}
    ></span>
  ));

  return (
    <div className="flex w-80 items-center justify-between shadow-md">
      <li className="list-disc">{name}</li>
      <div className="flex gap-1">{circles}</div>
    </div>
  );
};

export default SkillCard;
