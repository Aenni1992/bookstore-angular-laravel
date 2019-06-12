import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../shares/order";
import {BookStoreService} from "../shares/book-store.service";
import {Book} from "../shares/book";
import {OrderService} from "../shares/order.service";
import {Status} from "../shares/status";

@Component({
  selector: 'a.bs-book-order-item',
  templateUrl: './book-order.component.html',
  styles: []
})
export class BookOrderComponent implements OnInit {

    orders: Order[];
    books: Book[];

  @Input() order:Order;

  constructor(private os:OrderService) { }

  ngOnInit() {

      this.os.getAllOrders().subscribe(res => this.orders = res);
  }

    sortStatus(status: Status[]) {
        return status.sort((a: Status, b: Status) =>
            +new Date(b['created_at']).getTime() - +new Date(a['created_at']).getTime()
        );
    }

   /* getTotalAmount() {
        let amount = 0;
        this.order.books
            .forEach(book => amount += book['pivot']['amount']);
        return amount;
    }*/

}

/*getCurrentUserId()
{
    return Number.parseInt(localStorage.getItem('user'));
}*/