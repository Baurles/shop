"use client";
import { makeAutoObservable } from "mobx";

class FooterStore {
  contactsState = true;

  constructor() {
    makeAutoObservable(this);
  }
  setContactsOpen = (state: boolean) => {
    this.contactsState = state;
  };
}

export default new FooterStore();
