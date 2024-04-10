"use client";

import { CiShoppingCart } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";


type Props ={
  setOpen:(state:boolean)=>void;
}



export const ShoppingCart = ({setOpen}:Props) => {
  return <CiShoppingCart onClick={()=>setOpen(true)} size={30} />;
};

export const Contacts = () => {
  return <RiContactsLine size={30} />;
};

export const Search = () => {
  return (
    <>
      <input
        type="text"
        className="bg-black m-auto rounded-lg text-white pl-2 "
        placeholder="Поиск"
      />
    </>
  );
};
