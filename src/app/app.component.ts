import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The dating APP';
  users:any;

  constructor(private accountSerive:AccountService )
  {

  }
  ngOnInit(){

    this.setCurrentUser();
  }

setCurrentUser()
{
  const user:User=JSON.parse(localStorage.getItem('user'));
  this.accountSerive.setCurrentUser(user);
}


}
