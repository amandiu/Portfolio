import React from "react";
import { NavLink, Link } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center mt-10 text-[#edecec] font-bold rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <NavLink to='/about' className="link link-hover">About Me</NavLink>
          <NavLink to='/project' className="link link-hover">Project</NavLink>
          <NavLink to='/skills' className="link link-hover">Skills</NavLink>
          <NavLink to='/contact' className="link link-hover">Contact Me</NavLink>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <NavLink to=''>
             <img className="h-6 w-6" src="../../../public/linkedin (1).png" alt="#" />
            </NavLink>
            <NavLink>
              <img className="h-6 w-6" src="../../../public/telegram (1).png" alt="#" />
            </NavLink>
            <NavLink>
              <img className="h-6 w-6" src="../../../public/facebook (1).png" alt="#" />
            </NavLink>
            <NavLink>
              <img className="h-6 w-6" src="../../../public/github.png" alt="#" />
            </NavLink>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by Md.
            Amanullah Akon.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
