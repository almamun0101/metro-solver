"use client";
import { useState } from "react";
import { ChevronDown, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Lottie from "lottie-react";
export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="container mx-auto">

    <nav className="flex items-center justify-between px-8 py-4  text-white">
      {/* Left Logo */}
      <div className="flex items-center">
        <div className="flex items-center">
          <div className="w-12 h-12">
            <img
              src="animations/logo_frame.gif"
              alt="Logo"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>

      {/* Middle Nav Menu */}
      <div className="bg-[#120021]/60 backdrop-blur-lg rounded-full px-6 py-2 flex items-center gap-8 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        <button className="px- py- rounded-full border border-[#9b4dff] bg-gradient-to-r from-[#6c2dcf] to-[#b374ff] text-white font-medium hover:opacity-90 transition">
          <div className="px-10 rounded-full py-2 bg-[#11001f] h-full">Home</div>
        </button>
        <button className="hover:text-[#b374ff] transition">About us</button>

        <div className="relative">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="flex items-center gap-1 hover:text-[#b374ff] transition"
          >
            Services <ChevronDown size={16} />
          </button>

          {servicesOpen && (
            <div className="absolute left-0 top-8 w-40 bg-[#1c012d] rounded-xl shadow-lg py-2 z-50">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-[#2a024a] transition"
              >
                Web Design
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-[#2a024a] transition"
              >
                Development
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-[#2a024a] transition"
              >
                Marketing
              </a>
            </div>
          )}
        </div>

        <button className="hover:text-[#b374ff] transition">White label</button>
        <button className="hover:text-[#b374ff] transition">Contact us</button>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-[#1c012d] rounded-full flex items-center justify-center hover:bg-[#2a024a] transition">
          <ShoppingCart size={20} />
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden border border-[#2e0a4f]">
          <Image
            src="/avatar.png" // replace with your avatar
            alt="User"
            width={40}
            height={40}
          />
        </div>
      </div>
    </nav>
    </div>
  );
}
