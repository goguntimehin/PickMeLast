import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSourse = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSourse.asObservable();

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
  changeMessage(show: boolean) {
    this.messageSourse.next(show);
  }
}
