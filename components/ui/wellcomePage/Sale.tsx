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
      <div
        ref={firstText}
        className="w-full text-4xl items-center gap-10 flex justify-end h-full"
      >
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
      </div>
    </div>
  );
};
