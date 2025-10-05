"use client";
import React from "react";
import Image from "next/image";
import {
  PlayCircle,
  PhoneCall,
  Settings,
  ClipboardCheck,
  Code,
  Package,
  CheckCircle2,
} from "lucide-react";

const Choose = () => {
  return (
    <section className="   lg:flex-row justify-center items-center bg-gradient-to-r from-[#1b002c] via-[#2b0049] to-[#000000] px-6 py-16 text-white font-sans">
      <div className=" container mx-auto grid grid-cols-2 w-full justify-between gap-0 ">
        <div className=" mb-10 lg:mb-0 lg:mr-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4">
            Why You <br />
            <span className="text-white">Choose Metro Solver?</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mb-8 ">
            We are constantly growing or learning and improving. Enter your
            personal real estate sanctuary, where finding the ideal home is
            effortless and comfortable with our assistance.
          </p>
          <button className="bg-gradient-to-r from-[#a855f7] to-[#6366f1] text-white px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition-transform">
            ✦ Book Now
          </button>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-10">
          <div className="bg-[#0f0f1a] px-8 py-4 rounded-full text-lg font-semibold shadow-md transform rotate-[-4deg] hover:rotate-0 transition-all duration-300 w-fit">
            Cancel Anytime
          </div>
          <div className="bg-gradient-to-r from-[#4c1d95] to-[#6d28d9] px-8 py-4 rounded-full text-lg font-semibold shadow-md transform rotate-[3deg] hover:rotate-0 transition-all duration-300 w-fit">
            24/7 Customer Service
          </div>
          <div className="bg-[#0f0f1a] px-8 py-4 rounded-full text-lg font-semibold shadow-md transform rotate-[-3deg] hover:rotate-0 transition-all duration-300 w-fit">
            Refers & Earn
          </div>
          <div className="bg-[#0f0f1a] px-8 py-4 rounded-full text-lg font-semibold shadow-md transform rotate-[2deg] hover:rotate-0 transition-all duration-300 w-fit">
            Money Back Guarantee
          </div>
        </div>
      </div>
      {/* Left Side */}

      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        {/* Video Section */}
        <div className="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/howworks.jpg" // replace with your image path
            alt="Team meeting"
            width={800}
            height={450}
            className="w-full h-auto rounded-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white p-4 rounded-full transition">
              <PlayCircle size={50} />
            </button>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="relative w-full flex flex-col items-center">
          <div className="relative w-full max-w-4xl flex flex-wrap justify-between items-center gap-6">
            {/* Left side */}
            <div className="flex flex-col gap-6">
              <StepCard icon={<Package />} title="Delivery and Support" />
              <StepCard icon={<ClipboardCheck />} title="Quality Assurance" />
              <StepCard icon={<Code />} title="Implement & Develop" />
            </div>

            {/* Center Circle */}
            <div className="relative flex items-center justify-center w-40 h-40 rounded-full bg-[#2d014d] border border-[#8B5CF6]/40 text-center">
              <div>
                <h3 className="text-lg font-semibold mb-1">How to Works?</h3>
                <div className="flex justify-center text-[#EAB308] text-sm">
                  <span>01–06</span>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex flex-col gap-6">
              <StepCard icon={<PhoneCall />} title="Book a Call" />
              <StepCard icon={<Settings />} title="Requirement Analysis" />
              <StepCard icon={<CheckCircle2 />} title="Service Customisation" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-10">
          <StatCard number="150+" label="Current Clients" />
          <StatCard number="25k+" label="Completed Projects" />
          <StatCard number="90+" label="Metro Solver Teams" />
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ icon, title }) => (
  <div className="flex items-center gap-3 bg-[#0B0220] hover:bg-[#1a0440] px-5 py-3 rounded-xl shadow-md transition">
    <div className="text-[#EAB308]">{icon}</div>
    <p className="text-sm font-medium">{title}</p>
  </div>
);

// Stat card component
const StatCard = ({ number, label }) => (
  <div className="bg-[#0B0220] rounded-xl py-6 shadow-md hover:bg-[#1a0440] transition">
    <h3 className="text-3xl font-bold text-[#EAB308] mb-1">{number}</h3>
    <p className="text-sm">{label}</p>
  </div>
);

export default Choose;
