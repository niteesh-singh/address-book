import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  localData: any;

  constructor() { }

  ngOnInit(): void {
    this.localData = JSON.parse(localStorage.getItem('myObj'));
    console.log('data', this.localData)
  }

}
