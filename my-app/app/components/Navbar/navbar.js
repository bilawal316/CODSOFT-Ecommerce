"use client"
import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-between px-10 py-10">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
         <div className="flex flex-col items-center">
  <Link href="/">
  <div className="flex items-center">
  <Image
    src="/logo.jpg"
    alt="Logo"
    width={40}
    height={40}
    className="rounded-full hover:bg-hoverBg cursor-pointer"
  />
  <div className="ml-2 navButton">Dukandar <br/> Shandar</div>
</div>

  </Link>
</div>

          
        </motion.div>
        <motion.div
         initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        <ul className="flex cursor-pointer space-x-4">
          <li className="navButton">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="navButton">
            <Link href="/Products">
              Products
            </Link>
          </li>
          <li className="navButton">
            <Link href="/About">
              About
            </Link>
          </li>
          <li className="navButton">
            <Link href="/Contact">
              Contact Us
            </Link>
          </li>
        </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
