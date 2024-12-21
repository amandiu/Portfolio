import React, { useState } from "react";
import TopicHeader from "../TopicHeader/TopicHeader";
import SubHeader from "../SubHeader/SubHeader";

const handleFrom = (e) => {
  e.preventDefault();
  console.log(" Message for form");
  const handleNameInput = () => {
    console.log(e.target.Name.value);
  };
};

const ContactMe = () => {
  return (
    <div className="mt-10">
      <TopicHeader Title="📬 Contact Me"></TopicHeader>
      <SubHeader subTitle="Get In Touch"></SubHeader>
      <p className="px-16 text-lg text-green-400 text-center">
        Have a suggestion, project idea, or just want to connect? Fill out the
        form below — I’ll get back to you shortly!
      </p>
      <form onSubmit={handleFrom}>
        <div className="ml-24 mb-20 mr-24 border-[1px] rounded-lg border-green-500 mt-5">
          <div className="mt-4 py-5 flex-col flex justify-center items-center gap-4 ">
            <input
              onChange="handleNameInput()"
              className="px-5 py-3 w-[70%] border-[1px] rounded-lg border-green-500 "
              type="text"
              name="Name"
              placeholder="Name"
              id=""
            />
            <input
              className="px-5 py-3 w-[70%] border-[1px] rounded-lg border-green-500 "
              type="email"
              name="Email"
              placeholder="Email"
              id=""
            />
            <div className="flex gap-3 w-[70%]">
              <input
                className="px-5 py-3 w-[70%] border-[1px] rounded-lg border-green-500 "
                type="email"
                name="Email"
                placeholder="Email"
                id=""
              />
              <input
                className="px-5 py-3 w-[30%] border-[1px] rounded-lg border-green-500 "
                type="dropdown"
                name="gender"
                placeholder="gender"
                id=""
              />
            </div>
            <input
              className="px-5 py-3 w-[70%] h-[150px] border-[1px] rounded-lg border-green-500 "
              type="text"
              name="message"
              placeholder="Please write your message..."
              id=""
            />
            <button
              type="submit"
              className="border-[1px] border-green-400 w-[30%] h-[40px] rounded-lg font-extrabold bg-white text-xl text-green-400"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
