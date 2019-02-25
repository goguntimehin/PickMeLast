import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users;

  constructor(private data: DataService) { }


  getUsers() {
    this.data.getUsers().subscribe(data => {
        this.users = data;
        console.log(this.users);
      }
    );
  }
}
