import { Component } from '@angular/core';
import { BookService } from './services/book/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  books :Array<any>;

  constructor(private bookservice: BookService){

    this.books=this.bookservice.books;
  }
/**
 *
 * @param newStatus
 */

  onclickSwitchNewStatus(newStatus: string){

    this.bookservice.switchAllBooksStatus(newStatus);
  }


}
