const LoginForms = ({ value, help }: { value: string; help: string }) => {
  return (
    <div className="flex flex-col  items-center">
      <span className="pb-2 cursor-default">{value}</span>
      <input className="pl-2 border-black border-2 rounded-lg" />
      <span className="text-xs self-start cursor-pointer pt-1">{help}</span>
    </div>
  );
};

const LoginButton = () => {
  return <button className="w-full h-12 bg-black text-white">Войти</button>;
};

export default function Login() {
  return (
    <div className="container flex fixed justify-end z-30 mt-20 pr-4">
      <div className="h-96 border-solid border-black border-2  z-30 w-1/4 bg-white rounded-lg">
        <div className="w-full rounded-lg h-full shadow-2xl text-black p-2">
          <div
            className="w-full h-full flex  items-center justify-between
            flex-col border-solid border-2 rounded-lg border-black"
          >
            <span className="text-lg cursor-default font-bold">
              Авторизация
            </span>
            <div className="flex flex-col gap-4">
              <LoginForms value={"Логин"} help={"Нет учётной записи?"} />
              <LoginForms value={"Пароль"} help={"Забыли пароль?"} />
            </div>
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
}
