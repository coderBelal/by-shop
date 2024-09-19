"use client"
import Link from 'next/link';
 
import { FC } from 'react';

const BottomNav: FC = () => {
 
 
  return (
    <nav className=" mx-auto max-w-7xl mt-9  rounded-2xl    bg-orange-500   text-white shadow-md">
      <ul className="flex justify-around p-4 text-white">
        <li className={`text-center   font-semibold   text-blue-600' : 'text-gray-600'}`}>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li className={`text-center font-semibold     text-gray-600'}`}>
          <Link href="/products">
            <p> All Products</p>
          </Link>
        </li>
        <li className={`text-center font-semibold     text-gray-600'}`}>
          <Link href="/checkout">
            <p>Check-Out</p>
          </Link>
        </li>
    
      </ul>
    </nav>
  );
};

export default BottomNav;
