import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="w-full">
      <div className="">
        <ul className="flex justify-between items-center w-full"> 
          <li className="py-5 px-5 ">
            <Link href="#">Budget Friendly</Link>
          </li>
          <li className="py-5 px-5 ">
            <Link href="#">No. 1 in Europe</Link>
          </li>
          <li className="py-5 px-5 ">
            <Link href="#">
              On yout first order <span className="px-5 py-2 bg-red-500 rounded-3xl">
                30% OFF
              </span>
            </Link>
          </li>
          <li className="py-5 px-5 ">
            <Link href="#">For All Products buy now get the offer</Link>
          </li>
          <li className="py-5 px-5 ">
            <Link href="#">User Friendky</Link>
          </li>
          <li className="py-5 px-5 ">
            <Link href="#">24/7 Services</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
