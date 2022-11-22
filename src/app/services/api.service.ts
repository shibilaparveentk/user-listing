import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  search = new BehaviorSubject("")

  constructor(private api: HttpClient) { }

  //1.get all user list
  getAllUserList() {
    return this.api.get('https://dummyjson.com/users')
  }
  //2.get single user detail
  viewuser(userid: any) {
    return this.api.get('https://dummyjson.com/users/' + userid)
  }
}
