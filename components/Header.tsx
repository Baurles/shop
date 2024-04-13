"use client";
import CartStore from "@/stores/cart-store";
import { Contacts, ShoppingCart, Search } from "./ui/buttons/HeaderButtons";
import { observer } from "mobx-react-lite";
import { CartModal } from "@/components/ui/Modal";


const cartState = CartStore;

export const Header = observer(() => {
  return (
    <div className="container fixed w-full h-14 bg-white  justify-between flex align-middle rounded-lg z-30">
      {cartState.state ? <CartModal {...cartState} /> : null}
      <h1 className="text-2xl font-extrabold text-black self-center p-4">
        SHOPSTER
      </h1>
      <div className="flex justify-center gap-20 align-middle pr-4 text-black">
        <Search />
        <ul className="flex justify-center align-middle m-auto gap-10">
          <li>
            <Contacts />
          </li>
          <li className="flex">
            <ShoppingCart {...cartState} />
            <div className="pt-1">{cartState.itemsCount}</div>
          </li>
        </ul>
      </div>
    </div>
  );
});
