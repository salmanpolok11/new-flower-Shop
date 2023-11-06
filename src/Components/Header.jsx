import { Link, NavLink } from "react-router-dom";
import { BsFillPersonFill , BsCartCheckFill } from  "react-icons/bs";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/"> Home </NavLink>
      </li>
      <li>
        <NavLink to="/shop"> Shop </NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog </NavLink>
      </li>
      <li>
        <NavLink to="/about"> About </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white text-black md:px-20 shadow-md ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white 
             first-line:rounded-box w-24"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className=" normal-case font-medium text-2xl md:text-3xl">
          <span className=" text-[#FF8F52] ">Flower </span>Shop
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end text-[#FF8F52] space-x-2 text-2xl px-3">
         <Link><BsFillPersonFill/></Link>
         <Link><BsCartCheckFill/></Link>
      </div>
    </div>
  );
};

export default Header;
