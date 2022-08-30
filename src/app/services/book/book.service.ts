import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books :Array<any>;
  constructor() {

    this.books=[];


    for(let i=1;i<=10;i++){

        this.books.push({

          title:'Titre '+ i,
          author:'Auteur '+ i,
          status:'Libre'

        });


    }

   }

   /**
    * method pour changer le status pour tous
    * @param newStatus
    *
    *
    */

   switchAllBooksStatus(newStatus: string){

    for(const book of this.books){

      book.status = newStatus;
    }

   }




}
