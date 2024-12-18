import React from "react";
import TopicHeader from "../TopicHeader/TopicHeader";
import SubHeader from "../SubHeader/SubHeader";

const Services = () => {
  return (
    <div className="md:px-16">
      <TopicHeader Title="🛠️ Services"></TopicHeader>
      <SubHeader subTitle="What I Do..!!"></SubHeader>
      <ul className=" grid md:grid-cols-2 py-4 gap-2  text-green-400">
        <li className="flex gap-2 items-center">
          <div className="bg-white mt-1 rounded-full h-2 w-2"></div> 🖥️ Web
          Development: Responsive, modern websites with HTML, CSS, JS, React.
        </li>
        <li className="flex gap-2 items-center">
          <div className="bg-white mt-1 rounded-full h-2 w-2"></div> 🎨
          Frontend: Interactive, sleek UIs with React.js and Vue.js.
        </li>
        <li className="flex gap-2 items-center">
          <div className="bg-white mt-1 rounded-full h-2 w-2"></div> ⚙️ Backend:
          Scalable APIs and server logic using Node.js.
        </li>
        {/* <li className="flex gap-2 items-center">
          <div className="bg-white mt-1 rounded-full h-2 w-2"></div> 🛒 E-commerce:
          Full-featured online stores with secure payments.
        </li> */}
        <li className="flex gap-2 items-center">
          <div className="bg-white mt-1 rounded-full h-2 w-2"></div> ⚡
          Optimization: Faster, SEO-friendly websites.
        </li>
        <li className="flex gap-2 items-center">
          <div className="bg-white mt-1 rounded-full h-2 w-2"></div> 🛠️
          Maintenance: Reliable updates and support.
        </li>
      </ul>
    </div>
  );
};

export default Services;
