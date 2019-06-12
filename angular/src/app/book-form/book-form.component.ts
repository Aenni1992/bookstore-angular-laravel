import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, FormControl} from '@angular/forms';
import {BookStoreService} from "../shares/book-store.service";
import {BookFactory} from "../shares/book-factory";
import {Book, Image} from "../shares/book";
import {BookFormErrorMessages} from "./book-form-error-messages";
import {BookValidators} from "../shares/book-validators";
import {Author} from "../shares/author";







@Component({
    selector: 'bs-book-form',
    templateUrl: './book-form.component.html'
})
export class BookFormComponent implements OnInit {
    bookForm: FormGroup;
    book = BookFactory.empty();
    errors: { [key: string]: string } = {};
    isUpdatingBook = false;
    images: FormArray;
    authors : Author[];

    constructor(private fb: FormBuilder, private bs: BookStoreService,
                private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        const isbn = this.route.snapshot.params['isbn'];
        if (isbn) {
            this.isUpdatingBook = true;
            this.bs.getSingle(isbn).subscribe(book => {
                this.book = book;
                this.getAuthors();
            });

        }
        this.initBook();
        this.getAuthors();

    }

    getAuthors() {
        this.bs.allAuthors().subscribe(res =>{
            this.authors = res;
            this.initBook();
            this.addCheckboxes();
        })
    }

    initBook() {
        this.buildThumbnailsArray();

        this.bookForm = this.fb.group({
            id: this.book.id,
            title: [this.book.title, Validators.required],
            subtitle: this.book.subtitle,
            isbn: [this.book.isbn, [
                Validators.required,
                //Validators.minLength(10),
                //Validators.maxLength(13)
                BookValidators.isbnFormat
            ]],
            description: this.book.description,
            rating: [this.book.rating,[
                Validators.min(0),
                Validators.max(10)
            ]],
            //authors: this.authors,
            images: this.images,
            published: new Date(this.book.published),
            authors: new FormArray([])
        });
        this.bookForm.statusChanges.subscribe(
            () => this.updateErrorMessages());
    }

    buildThumbnailsArray() {
        console.log(this.book.images);
        //if(this.book.images.length == 0){ //if new book had no images -> but no in edit mode
          //  this.book.images.push(new Image(0,'',''))
        //}
        this.images = this.fb.array(
            this.book.images.map(
                t => this.fb.group({
                    id: this.fb.control(t.id),
                    url: this.fb.control(t.url),
                    title: this.fb.control(t.title)
                })
            ), BookValidators.atLeastOneImage
        );
        console.log(this.images);
    }

    addThumbnailControl() {
        this.images.push(this.fb.group({ url: null, title: null }));
    }


    //löscht mir das Array an der stelle index
    removeThumbnailControl(index){
        this.images.removeAt(index);
    }

    private addCheckboxes() {
        this.authors.map((a, i) => {
            let control = new FormControl(this.containsAuthor(a) || (!this.isUpdatingBook && i === 0));
            (this.bookForm.controls.authors as FormArray).push(control);
        });
    }

    private containsAuthor(author) {
        let contains = false;
        this.book.authors.forEach(auth => {
            if (auth.id === author.id) {
                contains = true;
                return;
            }
        });
        return contains;
    }

    submitForm() {
        // filter empty values
        this.bookForm.value.images = this.bookForm.value.images.filter(thumbnail => thumbnail.url);

        const book: Book = BookFactory.fromObject(this.bookForm.value); //bekomme ich alle Value-Werte zurück
        //deep copy  - did not work without??  Images muss ich extra setzen
        book.images = this.bookForm.value.images;
        book.authors = this.bookForm.value.authors
            .map((v, i) => v ? this.authors[i].id : null)
            .filter(v => v !== null);
        console.log(book);

        if (this.isUpdatingBook) {
            this.bs.update(book).subscribe(res => {
                this.router.navigate(['../../books', book.isbn], { relativeTo: this.route });
            });
        } else {
            book.user_id = 1;// jsut for testing
            console.log(book)
            this.bs.create(book).subscribe(res => {
              //  this.book = BookFactory.empty();
              //  this.bookForm.reset(BookFactory.empty());
                this.router.navigate(['../books'], { relativeTo: this.route });
            });
        }
    }

    updateErrorMessages() {
        this.errors = {};
        for (const message of BookFormErrorMessages) {
            const control = this.bookForm.get(message.forControl);
            if (control &&
                control.dirty &&    //Ich habe changes gemacht im Formular, aber nicht gespeichert keinen korrekten Zustand
                control.invalid &&   //wenn es invalide ist würde die Fehlermeldung kommen
                control.errors[message.forValidator] &&
                !this.errors[message.forControl]) {
                this.errors[message.forControl] = message.text;
            }
        }
    }
}
