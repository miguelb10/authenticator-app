import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public user: User = new User();
  public title: string = "Crear Usuario"
  public errors: string[];

  constructor(private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("test")
  }

  create(): void{
    console.log(this.user);
    this.userService.create(this.user)
      .subscribe(cliente => {
        this.router.navigate(['/'])
      },
      err => {
        this.errors = err.error.errors as string[];
        console.error('Código del error desde el backend: ' + err.status);
        console.error(err.error.errors);
      }
    );
  }

}
