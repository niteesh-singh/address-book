import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  myObj=[];
  
  addform = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    contact_no_type: new FormControl(''),
    contact_no: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(form) {
    if(localStorage.getItem('myObj')===null)
    {
     this.myObj = [];
    }
    else
    {
      this.myObj=JSON.parse(localStorage.getItem('myObj'));
    }
    console.log('Form submitted', form.value);
    this.myObj.push((form.value));
    console.log(JSON.stringify(this.myObj));
    localStorage.setItem('myObj', JSON.stringify(this.myObj));
  }

}
