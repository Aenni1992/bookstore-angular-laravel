import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/internal/operators";
import {Order} from "./order";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    private api = "http://bookstore19.S1610456016.student.kwmhgb.at/api";

    constructor (private http: HttpClient){

    }

    getAllOrders() : Observable<Order[]> {
        return this.http.get(`${this.api}/orders`).pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    getSingleOrder(id) : Observable<Order>{
        return this.http.get(`${this.api}/order/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
    }
    //return this.books.find(book =>book.isbn == isbn);  //Error-Function
    //(book) =>{if(book.isbn === isbn){  //Variante wie ich wie ich die Error-Function auch schreiben kann
    //  return book
    //}}


    createOrder (order:Order) :Observable<any>{   //any --> irgendein Datentyp wird aufgerufen
        console.log(order);
        return this.http.post(`${this.api}/order`, order).
        pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    getUserOrders (): Observable<Order[]> {
        const userId = localStorage.getItem('userId');


        return this.http.get(`${this.api}/orderuser/${userId}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    saveStatus(status, id) : Observable<Order>{
        return this.http.post(`${this.api}/orderstatus/${id}`, status).
        pipe(retry(3)).pipe(catchError(this.errorHandler));
    }

    private errorHandler(error:Error | any): Observable<any>{
        return throwError(error);
    }

}
