import React from "react";
import { Link } from "react-router";
import Services from "../Services/Services";
import About from "../About/About";
import Skills from "../Skills/Skills";
import ContactMe from "../ContactMe/ContactMe";

const Home = () => {
  return (
    <div>
      <div className="ml-16 justify-between items-center grid md:grid-cols-2  mt-24">
        <div className="text-green-400 font-semibold">
          <h1 className="md:mt-[-200px] font-extrabold text-lg text-[#f0ac01]">
            Hi I am,
          </h1>
          <h1 className="">
            "A passionate Full Stack Developer skilled in building dynamic web
            and mobile applications using
            <span className="text-white ml-1 font-bold">
              JavaScript
              <span className="text-green-400\ font-extraboldbold"> / </span>
              React
              <span className="text-green-400\ font-extraboldbold"> / </span>
              React Native
              <span className="text-green-400\ font-extraboldbold"> / </span>
              Node.js and cutting-edge <br /> frameworks.
            </span>
            I bring ideas to life with clean code and innovative solutions."
          </h1>
          <h2 className="text-3xl text-white font-extrabold">
            Md. Amanullah Akon
          </h2>
          <h1 className="text-5xl mt-3 font-extrabold">Web Developer</h1>
          <div className="grid w-44 grid-cols-4 mt-10">
            <Link to="https://www.linkedin.com/in/md-amanullah-akon-b60780256/" className=" h-8 w-8 rounded-full bg-white">
              <img src="../../../public/linkedin (1).png" alt="Aman" />
            </Link>
            <Link to="https://www.instagram.com/md.amanull.52?igsh=Z3NneDhlYWR3cTlo" className=" h-8 w-8 rounded-full bg-white">
              <img src="../../../public/instagram (1).png" alt="Aman" />
            </Link>
            <Link to="https://web.facebook.com/md.amanull.52" className=" h-8 w-8 rounded-full bg-white">
              <img src="../../../public/facebook (1).png" alt="Aman" />
            </Link>
            <Link to="https://github.com/amandiu" className=" h-8 w-8 rounded-full bg-white">
              <img src="../../../public/github.png" alt="Aman" />
            </Link>
          </div>
          <div className="grid  md:grid-cols-2 gap-2 md:w-[60%] mt-10 text-white">
            <Link to='/contact'
              className="md:text-xl px-5 rounded-md py-1 font-bold bg-[#22c55e]
                         hover:bg-[#059862] "
            >
              Hire Me
            </Link>
            <button
              className="md:text-xl px-5 rounded-md py-1 font-bold bg-[#22c55e]
                         hover:bg-[#059862] "
            >
              Downloade CV
            </button>
          </div>
          <div className="md:w-[50%] text-center mt-16 rounded-xl justify-around items-center bg-slate-500 flex gap-2 px-5 py-2">
            <div className="">
              <p className="text-lg">1+</p>
              <p className="text-white text-xl">Experiences</p>
            </div>
            <div className="h-11 w-1 bg-slate-400"></div>
            <div>
              <p className="text-lg">1+</p>
              <p className="text-white text-xl">Projects</p>
            </div>
          </div>
        </div>
        <div className="mb-20 md:mt-0 mt-6">
          <img
            className="h-[500px] w-full md:h-[700px] md:w-[90%] "
            src="../../../public/peakpx.jpg"
            alt=""
          />
        </div>
      </div>
      <Services></Services>
      <About></About>
      <div className="mt-16">
        <Skills></Skills>
      </div>
      <div className="mt-16">
        <ContactMe></ContactMe>
      </div>
    </div>
  );
};

export default Home;
