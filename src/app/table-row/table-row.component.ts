import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit {

  @Input() title:string | undefined;
  @Input() author:string | undefined;
  @Input() status!: string;

  constructor() {


  }

  ngOnInit(): void {
  }

}
