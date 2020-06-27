import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {
  localData: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.localData = JSON.parse(localStorage.getItem('myObj'));
    console.log('data', this.localData)
  }

  removeContact(e) {
    this.localData.splice(e,1);
    localStorage.setItem('myObj',JSON.stringify(this.localData));
    console.log('item>>', this.localData);
  }

  editContact(e) {
    this.router.navigate(['/edit', e]);
    console.log('edit item works', e);
  }

}
