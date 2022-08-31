import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BookService } from '../services/book/book.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges {


  nextStatus: string;
  @Input()
  id!: number;

  @Input() title: string | undefined;
  @Input() author: string | undefined;
  @Input() status!: string;


  constructor(private bookservice: BookService) {

    this.nextStatus= 'Libre';


  }

  ngOnChanges(): void{

    this.nextStatus= this.status==='Libre' ?'pris' : 'Libre';


  }

  ngOnInit(): void {


  }

  onclickSwitchStatus(newStatus: string) {

    console.log(newStatus);


    this.bookservice.switchStatus(+this.id, newStatus);
  }

}
