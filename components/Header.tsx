import { CiShoppingCart } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";

export const Header = () => {
  return (
    <div className="container fixed w-full h-14 bg-white  justify-between flex align-middle rounded-lg">
      <h1 className="text-2xl font-extrabold text-black self-center p-4">
        SHOPSTER
      </h1>
      <div className="flex justify-center gap-20 align-middle pr-4 text-black">
        <input
          type="text"
          className="bg-black m-auto rounded-lg text-white pl-2 "
          placeholder="Поиск"
        />
        <ul className="flex justify-center align-middle m-auto gap-10">
          <li>
            <RiContactsLine size={30} />
          </li>
          <li>
            <CiShoppingCart size={30} />
          </li>
        </ul>
      </div>
    </div>
  );
};
