import { Injectable } from '@angular/core';
import { ISanpham } from './isanpham';
import { ICart } from './icart';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root'})
export class CartService {
  constructor(  private h:HttpClient ) { }
  items: ICart[] = [];
  addToCart(sp: ISanpham) {    
    var c:ICart;
    c = { 
      sp: sp.id, 
      tensp: sp.tensp, 
      giasp: sp.giasp, 
      hinh: sp.hinh, 
      soluong:1 
    }
    this.items.push(c); 
  }
  getItems() { return this.items; }
  clearCart() { this.items = []; return this.items;}
}