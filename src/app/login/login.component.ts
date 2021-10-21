import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  usuario: Usuario;
  title = 'Login';
  invalidLogin = false;

  constructor(private router: Router,
    private authenticationService: AuthenticationService) { 
    this.usuario = new Usuario();}

  ngOnInit(): void {
  }

  login(): void{
    (this.authenticationService.login(this.usuario.username, this.usuario.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );
  }
}
