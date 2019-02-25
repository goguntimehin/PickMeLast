import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  appTitle = 'HB Lab 4 Final';
  show:boolean;

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(show => this.show = show);
  }
}
