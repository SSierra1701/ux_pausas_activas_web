import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeButton: string = '';

  constructor(private router: Router) { }
  
  onClick(provider: string) {
    this.activeButton = provider;
    switch(provider){
      case "home":
        this.router.navigate(['/dashboard']);
        break;
        
      case "mejoras":
        this.router.navigate(['/registro-mejoras']);
        break;

      case "dolencias":
        this.router.navigate(['/registro-dolencias']);
        break;

      case "logout":
        this.router.navigate(['/home']);
        break;
    }
  }
}
