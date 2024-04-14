"use client";

import { makeAutoObservable } from "mobx";

class SliderStore {
  offset = 0;
  constructor() {
    makeAutoObservable(this);
  }
  setOffsetRight=(current:number,width:number)=>{
    this.offset=current-width
    
  }
  setOffsetLeft=(current:number,width:number)=>{
    this.offset=current+width
    
  }
  setOffsetNull =()=>{
    this.offset=0
  }
  setOffsetMax=(width:number)=>{
    this.offset=2*width
  }
}

export default new SliderStore();
