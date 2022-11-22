import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userid: Number = 0
  userdetails: any = {}

  constructor(private activateRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((result) => {
      this.userid = result['id']
      console.log(result['id']);
    })
    this.apiService.viewuser(this.userid)
      .subscribe((result) => {
        this.userdetails = result
        console.log(this.userdetails);
      })
  }

}
