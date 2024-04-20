"use client";

import { makeAutoObservable } from "mobx";

class CartStore {
  state = false;

  itemsArr = [
    {
      name: "Крутой Поиск",
      description: "Для дотки",
      price: 100,
      id: 1,
    },

    {
      name: "Крутой ПR",
      description: "Для дотки",
      price: 100,
      id: 2,
    },
  ];

  itemsCount = this.itemsArr.length;

  constructor() {
    makeAutoObservable(this);
  }

  setOpen = (state: boolean) => {
    this.state = state;
  };
  //
  setAddItem = () => {
    this.itemsArr.push({
      name: "adfR",
      description: "adf",
      price: 1200,
      id: 3,
    });
    this.itemsCount = this.itemsCount + 1;
  };
  //
  setDeleteItem = (id: number) => {
    this.itemsArr = this.itemsArr.filter((e) => e.id !== id);
    this.itemsCount = this.itemsCount - 1;
    // localStorage.
  };
}

export default new CartStore();
