"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import sliderStore from "@/stores/slider-store";
import { observer } from "mobx-react-lite";
import { useRef, useEffect } from "react";

const sliderOffset = sliderStore;

export const Spinner = observer(({ style,arrowStyle }: { arrowStyle:string,style: string }) => {
  let spinnerRef = useRef<HTMLInputElement>(null);

  const handleLeftArrowClick = () => {
    const style = spinnerRef.current && getComputedStyle(spinnerRef.current);

    if (style !== null) {
      if (sliderOffset.offset < 0) {
        sliderOffset.setOffsetLeft(
          sliderOffset.offset,
          Number(style.width.slice(0, 4))
        );
      } else {
        sliderOffset.setOffsetMax(-Number(style.width.slice(0, 4)));
      }
    }
  };
  const handleRightArrowClick = () => {
    const style = spinnerRef.current && getComputedStyle(spinnerRef.current);

    if (style !== null) {
      if (sliderOffset.offset > -2 * Number(style.width.slice(0, 4))) {
        sliderOffset.setOffsetRight(
          sliderOffset.offset,
          Number(style.width.slice(0, 4))
        );
      } else {
        sliderOffset.setOffsetNull();
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => handleRightArrowClick(), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={spinnerRef} className={style}>
      <div className={arrowStyle}>
        <FaChevronLeft size={20} onClick={handleLeftArrowClick} />
        <FaChevronRight size={20} onClick={handleRightArrowClick} />
      </div>

      <div
        style={{
          transform: `translateX(${sliderOffset.offset}px)`,
          transition: "translate",
          transitionProperty: "transform",
          transitionDuration: "800ms",
          transitionTimingFunction: "ease-in-out",
        }}
        className="flex w-full  h-full rounded-2xl items-center"
      >
        <div className="min-w-full rounded-2xl max-w-full h-full bg-yellow-100"></div>
        <div className="min-w-full rounded-2xl max-w-full h-full bg-green-200"></div>
        <div className="min-w-full rounded-2xl max-w-full h-full bg-blue-100"></div>
      </div>
    </div>
  );
});
