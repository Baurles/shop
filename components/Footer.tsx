export const Footer = () => {
  return (
    <div className="container border-solid border-black border-t-2 shadow-lg h-14 fixed bottom-0 bg-white text-black justify-center flex align-middle rounded-lg z-">
      <ul className="flex text-xs justify-between w-full pl-5 pr-5 align-middle self-center">
        <li className="w-48 text-center">Адрес: Колотушкина.ул,д.2</li>
        <li className="w-48 text-center">Контакты</li>
        <li className="w-48 text-center">На карте</li>
      </ul>
    </div>
  );
};