import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="bg-white/2">
        <ul className="flex justify-between items-center w-full text-white">
          <li className="py-4 flex  justify-between items-center gap-10">
            <Link href="#">Budget Friendly</Link>
            <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </li>
          <li className="py-4 flex  justify-between items-center gap-10">
            <Link href="#">No. 1 in Europe</Link>
             <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </li>
          <li className="py-4 flex  justify-between items-center gap-10">
            <Link href="#">
              On yout first order{" "}
            </Link>
              <span className="px-5 py-2 bg-red-500 rounded-3xl">30% OFF</span>
          </li>
          <li className="py-4 flex  justify-between items-center gap-10">
            <Link href="#">For All Products buy now get the offer</Link>
             <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </li>
          <li className="py-4 flex  justify-between items-center gap-10">
            <Link href="#">User Friendky</Link>
             <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </li>
          <li className="py-4 flex  justify-between items-center gap-10">
            <Link href="#">24/7 Services</Link>
             <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
