import { Component, OnInit } from '@angular/core';
import {Book} from "../shares/book";
import {BookStoreService} from "../shares/book-store.service";
import {BookOrderModel} from "../shares/book-order.model";
import {BookFactory} from "../shares/book-factory";
import {Order} from "../shares/order";
import {AuthService} from "../shares/authentication.service";
import {OrderFactory} from "../shares/order-factory";
import {ActivatedRoute, Router} from "@angular/router";
import {OrderService} from "../shares/order.service";

@Component({
    selector: 'bs-book-basket',
    templateUrl: './book-basket.component.html',
    styles: []
})
export class BookBasketComponent implements OnInit {

    booksOrdered:BookOrderModel[] = [];
    bruttoPrice:number = 0;
    order:Order = OrderFactory.empty();
    total_amount:number = 0;

    book:Book = BookFactory.empty();

    constructor(private bs:BookStoreService, public as:AuthService, private route : ActivatedRoute,
                private router: Router, private os:OrderService) { }

    ngOnInit() {
        // holen aus localstorage
        // umwandeln in array
        const basketString = localStorage.getItem('basket');
        const basket:BookOrderModel[] = JSON.parse(basketString) || [];

        // array durchgehen
        // für jedes item
        basket.forEach((bookOrder:BookOrderModel) => {
            this.bs.getSingle(bookOrder.book.isbn).subscribe(
                bookDetails => {
                    this.booksOrdered.push({
                        //... hol mir die Daten vom Buch
                        book: bookDetails,
                        amount: bookOrder.amount
                    });

                    // Preis aufadieren
                     this.bruttoPrice += bookDetails.price;
                }


            );

        })

    }


    removeItemFromBasket(book:Book) {
        if (confirm('Buch wirklich löschen?')) {
            let index = -1;
            this.booksOrdered.forEach((orderItem, i) => {
               if (orderItem.book.isbn === book.isbn) index = i;
            });
            this.booksOrdered.splice(index, 1);

            const localState:BookOrderModel[] = this.booksOrdered.map((bookOrder:BookOrderModel) => ({
                book: bookOrder.book,
                amount: bookOrder.amount
            }));

            localStorage.setItem('basket', JSON.stringify(localState));
        }
    }

    increaseAmount(index){

       let amountBooks  = JSON.parse(localStorage.getItem('basket'));

        amountBooks[index].amount++;
        this.booksOrdered = Object.values(amountBooks);

        localStorage.setItem('basket', JSON.stringify(this.booksOrdered));

    }

    decreaseAmount(index){

        console.log(index);

        let amountBooks  = JSON.parse(localStorage.getItem('basket'));

        console.log(amountBooks);
        let currBook = amountBooks[index];
        if(currBook.amount > 1)
            currBook.amount--;
        this.booksOrdered = Object.values(amountBooks);
        console.log(this.booksOrdered);

        localStorage.setItem('basket', JSON.stringify(this.booksOrdered));

    }


    addToOrder(){ //order erstellen

        let id = 1;
        let order_item = [];


        let currentUser = this.as.getCurrentUserId();

        for(let item of this.booksOrdered){
            this.total_amount += item.book.price;
            //pushen die ISBN vom Book
            order_item.push({
                book_id: item.book.id,
                amount: item.amount,
                net_price: item.book.price
            });
            console.log(this.total_amount);
                    //Werte anschauen

        }
        let taxes = this.total_amount * 0.1;


        let date = new Date();
        // const order:Order = {id, currentUser, date, price, taxes, bookIds  };

        const addOrder:Order = OrderFactory.fromObject(id, currentUser, date, this.total_amount, taxes, order_item );

        console.log(addOrder);
        //in die Datenbank senden
        this.os.createOrder(addOrder).subscribe(res => {
            this.order = OrderFactory.empty();
            this.booksOrdered = [];
            localStorage.removeItem('basket');
        });
        console.log(addOrder);

    }

    checkLogin() {
        if (this.as.isLoggedIn()) {
          this.addToOrder();

        } else  {
            confirm('Bitte anmelden, um etwas zu bestellen.')
            this.router.navigate(['/login']);
        }
    }

}
/*const val = this.loginForm.value;
if (val.username && val.password) {
    this.authService.login(val.username, val.password).subscribe(res => {
        const resObj = res as Response;
        if (resObj.response === "success") {
            this.authService.setLocalStorage(resObj.result.token);
            this.router.navigateByUrl('/');

// Local storage holen ==> return string
const basketString = localStorage.getItem('basket');
// wenn was da
// umwandeln

const basket = basketString && basketString.length > 0 ? JSON.parse(basketString) : [];

// hier array

// schauen ob bookorder mit bookid existiert wenn ja amount erhöhen sonst appenden
basket.push({isbn: book.isbn, amount:1})

const newBasketString = JSON.stringify(basket);
// zurückspeichern
localStorage.setItem('basket', newBasketString)*/