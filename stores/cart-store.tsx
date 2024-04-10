"use client"

import { action, makeAutoObservable, makeObservable, observable } from "mobx";

class CartStore{
  state=false;

  constructor(){
    makeAutoObservable(this);
  }

  setOpen =(state:boolean)=>{
    this.state=true
  }
}

export default CartStore;