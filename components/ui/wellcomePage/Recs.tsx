import { BuyButtonProvider } from "@/components/providers/BuyProvider";

const ItemCard = () => {
  return (
    <div className="bg-black p-2 rounded-lg w-full h-full">
      <div className="bg-white flex items-center flex-col p-2 w-full h-full">
        <div className="flex w-full items-center h-3/4">
          <img className="w-3/4 h-full" src="" alt="" />
          <span className="text-lg">100$</span>
        </div>
        <div className="flex justify-center flex-col">
          <span className="text-2xl pt-2 pb-2">Оговаукампутер!</span>
        </div>
        <BuyButtonProvider />
      </div>
    </div>
  );
};
export const Recs = () => {
  return (
    <div className="container justify-center flex-col mt-4 h-[calc(100vh-9rem)] rounded-lg text-black bg-white flex">
      <div className="p-4 gap-1 w-full grid grid-rows-3 grid-cols-3 h-full">
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
        <ItemCard/>
      </div>
    </div>
  );
};
