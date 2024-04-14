"use client";
import { observer } from "mobx-react-lite";
import CartStore from "@/stores/cart-store";
import { CartModal } from "@/components/ui/Modal";
import { ShoppingCart } from "./../ui/buttons/HeaderButtons";

const cartState = CartStore;

export const ModalProvider = observer(() => {
  return (
    <>
      <li className="flex">
        <ShoppingCart {...cartState} />
        <div className="pt-1">{cartState.itemsCount}</div>
      </li>
    </>
  );
});

export const ModalProviderWindow = observer(() => {
  return <>{cartState.state ? <CartModal {...cartState} /> : null}</>;
});
