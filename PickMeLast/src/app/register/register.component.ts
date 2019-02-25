import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  messageForm: FormGroup;
  submitted = false;
  success = false;
  show: boolean;

  constructor(private formBuilder: FormBuilder, private data: DataService) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
    this.data.currentMessage.subscribe(show => this.show = show);
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    this.success = true;
    this.newMessage(this.success);
  }

  newMessage(show: boolean) {
    this.data.changeMessage(show);
  }

}
