"use client";

import Login from "@/components/ui/Login";
import { observer } from "mobx-react-lite";
import LoginStore from "@/stores/login-store";
import { Contacts } from "@components/ui/buttons/HeaderButtons";

const loginState = LoginStore;

export const LoginProvider = observer(() => {
  return <> {loginState.state ? <Login /> : null}</>;
});

export const LoginButtonProvider = observer(() => {
  return (
    <li className="cursor-pointer">
      <Contacts {...loginState} />
    </li>
  );
});
