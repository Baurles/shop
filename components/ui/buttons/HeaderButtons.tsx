"use client";

import { CiShoppingCart } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";

type Props = {
  setOpen: (state: boolean) => void;
  state?: boolean;
};

export const ShoppingCart = ({ setOpen }: Props) => {
  return <CiShoppingCart onClick={() => setOpen(true)} size={30} />;
};

export const Contacts = ({ setOpen, state }: Props) => {
  return <RiContactsLine onClick={() => setOpen(!state)} size={30} />;
};

export const Search = () => {
  return (
    <>
      <input
        type="text"
        className="bg-black m-auto rounded-lg focus:w-96 text-white pl-2 "
        placeholder="Поиск"
      />
    </>
  );
};
