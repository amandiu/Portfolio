import React, { useState } from "react";
import TopicHeader from "../TopicHeader/TopicHeader";
import SubHeader from "../SubHeader/SubHeader";
import { Link } from "react-router";

// const [gender, setGender] = useState("");

const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other", value: "Other" },
];

const handleFrom = (e) => {
  e.preventDefault();
  console.log(" Message for form");

  console.log(e.target.Name.value);
  console.log(e.target.Email.value);
  console.log(e.target.PhoneNumber.value);
  console.log(e.target.message.value);
  // setGender(e.target.value);
  // console.log(gender);
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
              className="px-5 py-3 w-[70%] border-[1px] rounded-lg border-green-500 "
              type="text"
              name="Name"
              placeholder="Please Enter Your Full Name"
              id=""
            />
            <input
              className="px-5 py-3 w-[70%] border-[1px] rounded-lg border-green-500 "
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              id=""
            />
            <div className="flex gap-3 w-[70%]">
              <input
                className="px-5 py-3 w-[70%] border-[1px] rounded-lg border-green-500 "
                type="Number"
                name="PhoneNumber"
                placeholder="Phone Number Please"
                id=""
              />
              <div className="dropdown">
                <button className="flex btn btn-ghost text-lg font-medium text-white justify-between w-52 bg-green-500 rounded-lg">
                  Gender
                  <div className="w-5 h-5">
                    <img src="../../../public/arrow-down-sign-to-navigate.png" alt="" />
                  </div>
                </button>

                <ul
                  id="genderValu"
                  className="mt-3 menu dropdown-content bg-green-500 text-white text-lg font-semibold rounded-box z-[1] w-52 shadow"
                >
                  {genderOptions.map((gender) => (
                    <a className="hover:bg-green-300 px-2 py-1 hover:rounded-r-md hover:border-l-2">
                      {gender.value}
                    </a>
                  ))}
                </ul>
              </div>
              {/* <p>{gender}</p> */}
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
