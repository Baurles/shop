"use client";
import { Spinner } from "@/components/ui/wellcomePage/Spinner";

export const ItemSpinner = () => {
  return (
    <div className="w-4/6 rounded-lg h-full flex flex-col bg-red-100">
      <Spinner
        arrowStyle={"flex absolute w-1/3 justify-between z-20"}
        style={
          "bg-white flex w-full overflow-hidden h-3/4 rounded-2xl  justify-center items-center"
        }
      />
      {/* <div className=" w-full overflow-hidden h-2/6">
        <div className="w-1/4 h-full flex gap-2">
          <div className="min-w-full max-w-full h-full p-4 bg-black"></div>
          <div className="min-w-full max-w-full h-full p-4 bg-black"></div>
          <div className="min-w-full max-w-full h-full p-4 bg-black"></div>
          <div className="min-w-full max-w-full h-full p-4 bg-black"></div>
          <div className="min-w-full max-w-full h-full p-4 bg-black"></div>
          <div className="min-w-full max-w-full h-full p-4 bg-black"></div>
        </div>
      </div> */}
    </div>
  );
};
