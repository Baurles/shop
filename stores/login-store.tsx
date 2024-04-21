"use client";
import { makeAutoObservable } from "mobx";

class LoginStore {
  state = false;

  constructor() {
    makeAutoObservable(this);
  }

  setOpen = (state: boolean) => {
    this.state = state;
  };
}
export default new LoginStore();
