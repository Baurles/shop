import { FaTelegram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { SiYoutube } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

const Contacts = () => {
  return (
    <div className="w-48 flex justify-between ">
      <a href="https://web.telegram.org/k/" className="cursor-pointer">
        <FaTelegram size={20} />
      </a>
      <a href="https://vk.com/feed" className="cursor-pointer">
        <SlSocialVkontakte size={20} />
      </a>
      <a href="https://instagram.com/" className="cursor-pointer">
        <SiInstagram size={20} />
      </a>
      <a href="https://youtube.com/" className="cursor-pointer">
        <SiYoutube size={20} />
      </a>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="container border-solid border-black border-t-2 shadow-lg h-14 fixed bottom-0 bg-white text-black justify-center flex align-middle rounded-lg z-">
      <ul className="flex text-xs justify-between w-full pl-5 pr-5 align-middle self-center">
        <li className="w-48 text-center cursor-default">
          Адрес: ул.Пушкина,д.2
        </li>
        <Contacts />
        <li className="w-32 text-center bg-black cursor-pointer text-white rounded-lg">
          На карте
        </li>
      </ul>
    </div>
  );
};
