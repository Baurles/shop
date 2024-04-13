"use client";

import { observer } from "mobx-react-lite";

type Props = {
  setAddItem: () => void;
  setDeleteItem?: (id: number) => void;
};

export const BuyButton = ({ setAddItem }: Props) => {
  return (
    <>
      <button
        onClick={() => setAddItem()}
        className="text-white w-full flex justify-center items-center rounded-b-xl bg-black h-20"
      >
        Купить
      </button>
    </>
  );
};
