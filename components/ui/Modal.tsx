"use client";
import { observer } from "mobx-react-lite";
import { BuyButton } from "./buttons/BuyButton";
import CartStore from "@/stores/cart-store";

interface ItemsType {
  name: string;
  description: string;
  price: number;
  picture?: string;
  id: number;
}

const CartItem = (item: ItemsType) => {
  return (
    <div className="flex mb-10 w-full h-fit">
      <div className=" gap-2 flex justify-start w-3/4 h-full">
        <img className="w-24 h-24" src={item.picture} alt="" />
        <div className="w-1/2">
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      </div>
      <div className="flex justify-center items-center w-1/4">
        <span className="text-black text-2xl w-1/4 h-full">{item.price}$</span>
      </div>
    </div>
  );
};

const CartHead = () => {
  return (
    <>
      <span className="text-black font-bold text-3xl border-b-2 border-black">
        Корзина
      </span>
      <div className="text-black text-xl shadow-lg border-b-2 border-black flex w-full justify-between mt-4 pl-28 pr-16">
        <p>Товар</p>
        <p>Цена</p>
      </div>
    </>
  );
};

const dummyItem: ItemsType = {
  name: "Крутой Поиск",
  description: "Для дотки",
  price: 100,
  id: 1,
};

const dummyItem2: ItemsType = {
  name: "Крутой Поиск",
  description: "Для дотки",
  price: 100,
  id: 2,
};

const dummyArr = [dummyItem, dummyItem2];

const CartList = ({ itemsArr }: { itemsArr: ItemsType[] }) => {
  return (
    <div className="w-full mt-2 no-scrollbar overflow-scroll scroll-smooth  h-full p-4 text-black">
      {itemsArr.map((obj) => {
        return <CartItem key={obj.id} {...obj} />;
      })}
    </div>
  );
};

type Props = {
  setOpen: (state: boolean) => void;
};

// Доделать стейт для модалки

export const CartModal = ({ setOpen }: Props) => {
  return (
    <div className=" container w-screen before:w-screen before:fixed before:h-screen before:bg-black before:content-[''] before::z-20 before:opacity-30 flex flex-col fixed h-screen z-20">
      <div
        onClick={() => setOpen(false)}
        className="w-1/2 rounded-xl flex flex-col items-center justify-start pt-4 bg-white m-auto z-20 h-[calc((100vh-9rem)/1.5)] "
      >
        <CartHead />
        <CartList itemsArr={dummyArr} />
        <BuyButton />
      </div>
    </div>
  );
};
