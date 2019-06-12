import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Book } from '../shares/book';
import {BookStoreService} from "../shares/book-store.service";
import {BookOrderModel} from "../shares/book-order.model";
import {AuthService} from "../shares/authentication.service";


@Component({
  selector: 'bs-book-list',
  templateUrl: './book-list.component.html',
  styles: []
})

export class BookListComponent implements OnInit {
  books:Book[];


  constructor(private bs:BookStoreService, public authService:AuthService) { }  //Independence Injection

    ngOnInit() {
    this.bs.getAll().subscribe(res => this.books = res);
    }

    addToBasket(book:Book) {
        // Add item to local storage


        // Local storage holen ==> return string
        const basketString = localStorage.getItem('basket');
        // wenn was da
        // umwandeln

        const basket:BookOrderModel[] = basketString && basketString.length > 0 ? JSON.parse(basketString) : [];

        // hier array

        let existingOrderItem = basket.find((bookOrderModel:BookOrderModel) => bookOrderModel.book.isbn === book.isbn);
        // schauen ob bookorder mit bookid existiert wenn ja amount erhöhen sonst appenden

        if (existingOrderItem) {
            existingOrderItem.amount += 1;
        } else {
            basket.push({book: book, amount: 1})
        }

        const newBasketString = JSON.stringify(basket);
        // zurückspeichern
        localStorage.setItem('basket', newBasketString)
    }
}
