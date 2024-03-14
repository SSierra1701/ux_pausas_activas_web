import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  showModal: boolean = false;

  constructor(private router: Router) { }
  
  onClick(provider: string) {
    if(provider=='atras'){
      this.router.navigate(['']);
    } else{
      this.router.navigate(['']);
    }
  }

  hideModal() {
    this.showModal = false;
  }
}
