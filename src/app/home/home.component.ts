import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) { }
  
  iniciarSesion(provider: string) {
    if(provider=='facebook' || provider=='google'){
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/dashboard']);
    }
  }
}
