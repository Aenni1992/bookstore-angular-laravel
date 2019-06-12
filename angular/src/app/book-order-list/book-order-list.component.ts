import { Component, OnInit } from '@angular/core';
import {Order} from "../shares/order";
import {OrderService} from "../shares/order.service";
import {AuthService} from "../shares/authentication.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'bs-book-order-list',
  templateUrl: './book-order-list.component.html',
  styles: []
})
export class BookOrderListComponent implements OnInit {

    orders:Order[] = [];
    users = [];
    selectedUser = {};

  constructor(private os:OrderService, private as:AuthService)

  {

  }

  ngOnInit() {
    if (this.as.isAdmin()){
    this.os.getAllOrders().subscribe(
      orders => {
          this.orders = this.sortOrders(orders);
          this.orders.forEach(order => {
              const user = order['user'];
              if (!this.checkIfUserExists(user)) {
                  this.users.push(user);
              }
          });
          this.selectedUser = this.users[0];
      });
    } else {
        //order ist das Ergebnis von subscribe und weise es zu this.orders zu
        this.os.getUserOrders().subscribe(orders => {
            this.orders = this.sortOrders(orders);
            console.log(this.orders);
        });
    }
  }

    checkIfUserExists(user) {
        let contained = false;
        this.users.forEach(u => {
            if (u.id === user.id) {
                contained = true;
                return;
            }
        });
        return contained;
    }

    sortOrders(orders) {
        return orders.sort((a, b) => +new Date(b['created_at']).getTime() - +new Date(a['created_at']).getTime());
    }

    isAdmin () {
        return this.as.isAdmin();
    }

    setSelectedUser(user) {
        this.selectedUser = user;
    }

    returnRightOrders() {
        if (this.isAdmin() && !isNullOrUndefined(this.selectedUser)) {
            // filter
            return this.orders.filter(order => order.user_id === this.selectedUser['id']);
        } else {
            return this.orders;
        }
    }


}
