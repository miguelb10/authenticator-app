import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../login/authentication.service';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService,
    private activatedRoute: ActivatedRoute,
    public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      }
    );
  }

}
