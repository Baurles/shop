import { ModalProvider } from "./providers/ModalProvider";
import { Search } from "./ui/buttons/HeaderButtons";
import { LoginButtonProvider } from "./providers/LoginProvider";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="container border-solid border-black border-b-4 shadow-lg fixed w-full h-14 bg-white  justify-between flex align-middle rounded-lg z-30">
      <Link href="/">
        <h1 className="text-2xl font-extrabold text-black self-center p-4">
          SHOPSTER
        </h1>
      </Link>
      <div className="flex justify-center gap-20 aligne iddle pr-4 text-black">
        <Search />
        <ul className="flex justify-center align-middle m-auto gap-10">
          <LoginButtonProvider />
          <ModalProvider />
        </ul>
      </div>
    </div>
  );
};
