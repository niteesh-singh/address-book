import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  myObj=[];
  flag: boolean;
  
  addform = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    contact_no_type: new FormControl(''),
    contact_no: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]),
    dob: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  });

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('param', params)
      const id = +params.get('id');
      if(id) {
        this.getContact(id);
      }
    });
  }

  getContact(id) {
    console.log("heyy in edit");
    var data=localStorage.getItem(JSON.parse('myObj'));
    id=data[id];
    console.log(data);
    this.addform.patchValue({
      firstName: id.firstName,
      lastName: id.lastName,
      contact_no_type: id.contact_no_type,
      contact_no: id.contact_no,
      dob: id.dob,
      email: id.email
    });
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
    this.flag = true;
    console.log('Form submitted', form);
    this.myObj.push((form.value));
    console.log(JSON.stringify(this.myObj));
    localStorage.setItem('myObj', JSON.stringify(this.myObj));
    this.addform.reset();
  }
}
