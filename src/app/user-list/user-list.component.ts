import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  name = "USERS"
  userslist: any = []
  searchTerm = ""

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAllUserList()
      .subscribe((result: any) => {
        this.userslist = result.users
        console.log(result.users);
      })

    //to get searchterm
    this.apiService.search.subscribe((data) => {
      console.log(data);
      this.searchTerm = data
    })
  }
}
