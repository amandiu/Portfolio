import React from "react";
import TopicHeader from "../TopicHeader/TopicHeader";
import SubHeader from "../SubHeader/SubHeader";

const About = () => {
  return (
    <div className="mt-4 mb-4">
      <TopicHeader Title="🧑‍💻 About Me"></TopicHeader>
      {/* <div className="flex justify-center">
        <div className="w-[70%] h-[1px] mt-2 bg-slate-400"></div>
      </div> */}
      <div className="grid mt-[-20px] md:grid-cols-2">
        <div className="px-16 py-5 text-green-400 text-xl">
          <SubHeader subTitle="Biography"></SubHeader>
          <p>
            I am a passionate web developer and aspiring engineer with a
            Bachelor's degree in Computer Science and Engineering from Daffodil
            International University. I thrive on building dynamic,
            user-friendly web applications and enjoy both independent and
            collaborative projects. Driven by innovation, I am always eager to
            learn new technologies and apply them to impactful solutions.
          </p>
        </div>
        <div className="mt-5 ">
          <SubHeader subTitle="Information"></SubHeader>
          <div className="flex gap-7 mt-2 ml-[70px] md:ml-9">
            <div className="text-green-400 font-bold md:text-2xl">
              <h4 className="mb-2">NAME:</h4>
              <h4 className="mb-2">BIRTHDAY:</h4>
              <h4 className="mb-2">ADDRESS:</h4>
              <h4 className="mb-2">PHONE:</h4>
              <h4>EMAIL:</h4>
            </div>
            <div className="text-white font-bold md:text-2xl">
              <h4 className="mb-2">Md.Amanullah Akon</h4>
              <h4 className="mb-2">24 NOV 1999</h4>
              <h4 className="mb-2">Shimrail,Narayanganj,Dhaka</h4>
              <h4 className="mb-2">01740542888</h4>
              <h4>mdamanullahakon77@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
