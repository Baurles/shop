"use client";
import { observer } from "mobx-react-lite";
import { BuyButton } from "../ui/buttons/BuyButton";
import CartStore from "@/stores/cart-store";

const addItem = CartStore;

export const BuyButtonProvider = observer(() => {
  return <BuyButton {...addItem} />;
});
