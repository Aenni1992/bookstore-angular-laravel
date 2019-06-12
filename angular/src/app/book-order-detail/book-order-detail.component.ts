import { Component, OnInit } from '@angular/core';
import {BookStoreService} from "../shares/book-store.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../shares/authentication.service";
import {Order} from "../shares/order";
import {Book} from "../shares/book";
import {BookOrderModel} from "../shares/book-order.model";
import {OrderService} from "../shares/order.service";
import {Status} from "../shares/status";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'bs-book-order-detail',
  templateUrl: './book-order-detail.component.html',
  styles: []
})
export class BookOrderDetailComponent implements OnInit {
  order:Order;
  books:Book [];
  stateForm: FormGroup;
  choosenState = 0;
  status: Status;

    constructor(
        private fb: FormBuilder,
        private bs : BookStoreService,
        private os:OrderService,
        private route : ActivatedRoute,
        public authService: AuthService
    ) {}



    ngOnInit() {
        const params = this.route.snapshot.params;
        this.os.getSingleOrder(params['id']).subscribe(b => {
            this.order = b;
            console.log(this.order);

            this.status = this.sortStatus(this.order.statuses)[0];

            this.stateForm = this.fb.group({
                type: this.status.type,
                description: ''
            });
        });
    }

    updateStatus() {
        const status = new Status(0, this.order.id, new Date(), this.stateForm.value.description, this.stateForm.value.type);
        this.os.saveStatus(status, this.order.id).subscribe(res =>{
            console.log(res);
            this.status = status;
        })
    }

    sortStatus(status: Status[]) {
        return status.sort((a: Status, b: Status) =>
            +new Date(b['created_at']).getTime() - +new Date(a['created_at']).getTime()
        );

    }

  /*  getTotalAmount() {
        let amount = 0;
        this.order.books
            .forEach(book => amount += book['pivot']['amount']);
        return amount;
    }*/




}
