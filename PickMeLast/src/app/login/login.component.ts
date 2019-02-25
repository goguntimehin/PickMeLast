import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DataService} from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  show: boolean;

  constructor(private formBuilder: FormBuilder, private data: DataService) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
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
