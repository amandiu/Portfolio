import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import Nav_Link from "../NavLink/Nav_Link";
import { Link } from "react-router";

// import { Link } from "react-router-dom";
{
  /* <Link to='/'>Home</Link>
     <Link to='/about'>About Us</Link>
     <Link to='/user'>Blog</Link> */
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { path: "/", name: "Home", id: 1 },
    { path: "/services", name: "Services", id: 2 },
    { path: "/about", name: "About Me", id: 3 },
    { path: "/Skills", name: "Skills", id: 4 },
    { path: "/project", name: "Project", id: 5 },
    { path: "/contact", name: "Contact Me", id: 6 },

    
  ];

  return (
    <nav
      className="flex pt-4 shadow-white md:pl-16 md:pr-16 pb-2  
    mx-auto justify-between items-center font-bold text-slate-50 
    text-lg"
    >
      <div
        className="mr-5 md:hidden text-3xl "
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open === true ? (
          <IoCloseSharp></IoCloseSharp>
        ) : (
          <RiMenu2Fill></RiMenu2Fill>
        )}
      </div>
      <div>
        <Link to="/"><img
          className="rounded-full h-14 w-14 drop-shadow-lg hover:drop-shadow-xl"
          src="../../../public/Logo for Md.Amanullah.png"
          alt="#"
        /></Link>
      </div>
      <ul
        className={`md:flex top-[70px] px-5 py-3 justify-center absolute md:static left-12 duration-1000
        ${open ? "bottom-2" : "-top-96"}
        `}
      >
        {routes.map((route) => (
          <Nav_Link key={route.id} route={route}></Nav_Link>
        ))}
      </ul>
      <div>
        <Link to='/contact'
          className="text-xl px-5 rounded-md py-1 font-bold bg-[#22c55e]
                         hover:bg-[#059862] "
        >
          <u>Hire Me</u>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
