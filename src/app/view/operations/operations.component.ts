import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  myObj=[];
  flag: boolean;
  editId:any;
  addform = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]),
    contact_no_type: new FormControl('Office'),
    contact_no: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]),
    dob: new FormControl('', [Validators.required, Validators.pattern('^(0[1-9]|1[0-9]|2[0-9]|3[0,1])([/+-])(0[1-9]|1[0-2])([/+-])(19|20)[0-9]{2}$')]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), Validators.maxLength(30)])
  });

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log('param', params)
      if(params.get('id')){
      const id = +params.get('id');
      this.editId=id;
      this.getContact(id);
    }
    else
    {
      this.editId='';
    }
    console.log("edit id is", this.editId);
    });
  }

  getContact(id) {
    console.log("id is",id)
    console.log("heyy in edit");
    var data=localStorage.getItem(('myObj'));
   // id=data[id];
   var contactData=(JSON.parse(data));
  
 
   id=contactData[id];
   
   console.log(id);
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
    if(this.editId!=='')
    {
      this.myObj.splice(this.editId,1);
      this.myObj.splice(this.editId, 0, form.value);
    }
    else
    {
    this.myObj.push((form.value));
    }
    localStorage.setItem('myObj', JSON.stringify(this.myObj));
    this.addform.reset();
    this.router.navigate(['/list']);
  }
}
