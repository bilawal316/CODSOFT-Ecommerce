import React from "react";


const Navbar = () => {
  return (
    <div >
        <ul className="flex justify-center cursor-pointer  space-x-4 ">
            <li className="hover:text-red-500"> Home </li>
            <li className="hover:text-red-500"> About </li>
            <li className="hover:text-red-500"> Contact Us </li>
            </ul>        
    </div>
  );
};

export default Navbar;