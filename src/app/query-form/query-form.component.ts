import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fire2Service } from '../services/fire2.service';

@Component({
  selector: 'query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss']
})

export class QueryFormComponent implements OnInit {

  queryForm: FormGroup;  

  constructor(private fb: FormBuilder, public fire2Service: Fire2Service){}

  onSubmit() {
    this.fire2Service.add(this.queryForm.value);
    this.queryForm.reset();
  }

  ngOnInit(): void {
	this.createForm();
  }

  createForm() {
	this.queryForm = this.fb.group({
      name: [ '', [Validators.required, Validators.minLength(1), Validators.maxLength(100)] ]
    });
  }

}
