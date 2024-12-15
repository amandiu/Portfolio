import React from "react";
import TopicHeader from "../TopicHeader/TopicHeader";
import Radio from "../Radio/Radio";
// import SubHeader from "../SubHeader/SubHeader";

const Skills = () => {
  return (
    <div>
      <TopicHeader Title="💻 Skills"></TopicHeader>
      <p className="px-16 text-lg text-green-400 text-center">
        People will ask how skilled you are, but remember — true skill comes
        from passion, continuous learning, and perseverance. Stay dedicated, and
        you’ll become the answer they seek!
      </p>
      <div className="grid md:grid-cols-3 px-16 gap-3 mt-4">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[20px] text-[#f06a01]">Programming Language</h3>
          <div className="w-[60%] h-[1px] mt-[3px]  bg-slate-400"></div>
          <div className="flex justify-between items-center grid-clo-2 mt-5 gap-5">
            <div className="ml-[-15px] text-xl text-white font-bold">
              <li className="list-disc">C++</li>
            </div>
            <div>
              <div className="flex gap-2 justify-center">
                <div className="h-4 w-4 rounded-full bg-[#f06a01]"></div>
                <div className="h-4 w-4 rounded-full bg-[#f06a01]"></div>
                <div className="h-4 w-4 rounded-full bg-[#f06a01]"></div>
                <div className="h-4 w-4 rounded-full bg-[#544734]"></div>
                <div className="h-4 w-4 rounded-full bg-[#544734]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[20px] text-center text-[#f06a01]">React</h3>
          <div className="w-[50%] h-[1px] mt-[3px]  bg-slate-400"></div>
          <div className="flex justify-between items-center grid-clo-2 mt-5 gap-5">
            <div className="ml-[-15px] text-xl text-white font-bold">
              <li className="list-disc">C++</li>
            </div>
            <div>
              <div className="flex gap-2 justify-center">
                <div className="h-4 w-4 rounded-full bg-[#f06a01]"></div>
                <div className="h-4 w-4 rounded-full bg-[#f06a01]"></div>
                <div className="h-4 w-4 rounded-full bg-[#f06a01]"></div>
                <div className="h-4 w-4 rounded-full bg-[#544734]"></div>
                <div className="h-4 w-4 rounded-full bg-[#544734]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h3 className="text-[20px] text-center text-[#f06a01]">
            React Native
          </h3>
          <div className="w-[50%] h-[1px]  mt-[3px] bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
