"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export const Sale = () => {
  const firstText = useRef<HTMLInputElement>(null);
// Доделать
  useEffect(() => {
    const style = firstText.current && getComputedStyle(firstText.current);

    gsap.fromTo(
      firstText.current,
      { x: 0 },
      {
        x:
          -1 *
          (Number(style!.width.slice(0, 4)) -
            10 * Number(style!.columnGap.slice(0, 2))),
        ease: "none",
        duration: 5,
        repeat: -1,
      }
    );
  });

  return (
    <div className="container justify-center flex-col h-1/2 rounded-lg text-black bg-white flex">
      <div
        ref={firstText}
        className="w-full text-4xl items-center gap-10 flex justify-end h-full"
      >
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
        <p className="">АКЦИИ!</p>
      </div>
    </div>
  );
};
