"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Sale = () => {
  const firstText = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const style = firstText.current && getComputedStyle(firstText.current);
  });

  return (
    <div className="container justify-center overflow-hidden flex-col h-1/2 rounded-lg text-black bg-white flex">
      <div ref={firstText} className="text-[0px]">
        <span className="flex justify-center text-5xl ">АКЦИИ!</span>
      </div>
    </div>
  );
};
