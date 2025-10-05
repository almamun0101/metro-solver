"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Lottie from "lottie-react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/shadcn-io/marquee";
const brands = [
  "luminus",
  "brembo",
  "motorola",
  "luminus",
  "brembo",
  "luminus",
  "brembo",
  "motorola",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0012] to-[#15001f] text-white py-24 ">
      <div className="container">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Expert to <br />
              Digitalise Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a84eff] to-[#6f6bff]">
                Growth
              </span>
            </h1>

            <p className="text-gray-300 max-w-md">
              We are constantly growing or learning and improving. Enter your
              personal real estate sanctu’ary, where finding the ideal home is
              easy.
            </p>

            <button className="flex items-center gap-3 bg-gradient-to-r from-[#6c2dcf] to-[#b374ff] px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
              Explore Now <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Graphic */}
          <div className="relative flex justify-center items-center">
            <Lottie
              path="/animations/JSON.json" // ✅ Load directly from public folder
              loop={true}
              autoplay={true}
              className="w-200 h-100"
            />
          </div>
        </div>

        <div className="absolute z-999 bottom-20 right-10 bg-[#7d2fff] w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition">
          <img src="animations/bot.gif" alt="" />
        </div>
      </div>

      <MarqueeContent className="flex gap-6 bg-transparent mt-30">
        {brands.map((brand, index) => (
          <MarqueeItem key={index} className="flex-shrink-0">
            <div className="bg-[#1c012d]/70 rounded-2xl px-8 py-4 mx-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              <Image
                src={`/${brand}.svg`}
                alt={brand}
                width={100}
                height={40}
                className="opacity-90"
              />
            </div>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </section>
  );
}
