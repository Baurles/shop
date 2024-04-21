"use client";

type Props = {
  setAddItem: () => void;
  setDeleteItem?: (id: number) => void;
};

export const BuyButton = ({ setAddItem }: Props) => {
  return (
    <>
      <button
        onClick={() => setAddItem()}
        className="text-white w-full flex justify-center items-center rounded-xl bg-black h-12"
      >
        Купить
      </button>
    </>
  );
};
