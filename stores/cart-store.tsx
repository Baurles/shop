"use client";

import { makeAutoObservable } from "mobx";

class CartStore {
  state = false;
  itemsCount = 10;
  
  constructor() {
    makeAutoObservable(this);
  }

  setOpen = (state: boolean) => {
    this.state = true;
  };
  setItemsCount = (itemsCount: number) => {
    this.itemsCount = ++itemsCount;
  };
}

export default CartStore;
