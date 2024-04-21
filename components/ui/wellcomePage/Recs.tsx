import { BuyButtonProvider } from "@/components/providers/BuyProvider";

const ItemCard = () => {
  return (
    <div className=" border-2 border-black cursor-pointer p-2 rounded-lg w-full h-full">
      <div className="bg-white flex items-center rounded-lg flex-col p-2 w-full h-full">
        <div className="flex w-full justify-center items-center h-full">
          <img className="w-3/4 h-full" src="" alt="" />
          <div className="w-1/4 flex flex-col justify-end h-full">
            <div className="flex justify-start h-3/4 flex-col ">
              <span className="cursor-pointer">Комплюхтер</span>
              <span className="text-lg cursor-default">100$</span>
            </div>
            <div className="pt-2 w-full ">
              <BuyButtonProvider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Recs = () => {
  return (
    <div className="container justify-center border-white border-l-2 border-r-2 flex-col mt-4 h-[calc(100vh-9rem)] rounded-2xl text-black bg-white flex">
      <div className="p-4 bg-black gap-1 w-full grid grid-rows-3 grid-cols-3 h-full">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
};
