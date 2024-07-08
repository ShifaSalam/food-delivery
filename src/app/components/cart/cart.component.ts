import { Component } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartitems: any = []

  cartTotal: any = 1000
  couponStatus: boolean = false
  couponCheckStatus: boolean = false


  offerClick() {
    this.couponStatus = true
  }

  getTotalAmount() {
    this.cartTotal = Math.ceil(this.cartitems.map((item: any) => item.totalPrice).reduce((t1: any, t2: any) => t1 + t2))
  }

  discount50() {
    this.couponCheckStatus = true
    const discount = Math.ceil(this.cartTotal-this.cartTotal * 0.5)
    this.cartTotal = discount
  }
  discount20() {
    this.couponCheckStatus = true
    const discount = Math.ceil(this.cartTotal-this.cartTotal * 0.2)
    this.cartTotal = discount
  }
  discount5() {
    this.couponCheckStatus = true
    const discount = Math.ceil(this.cartTotal -this.cartTotal* 0.05)
    this.cartTotal = discount
  }
}
