import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../login/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Bienvenido!';

  constructor(
    public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.authenticationService.logOut();
  }
}
