import React from "react";

const TopicHeader = ({Title}) => {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-4xl text-white">{Title}</h1>
      </div>
    </div>
  );
};

export default TopicHeader;
