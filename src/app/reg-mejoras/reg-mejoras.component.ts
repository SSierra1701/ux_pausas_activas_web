import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-mejoras',
  templateUrl: './reg-mejoras.component.html',
  styleUrl: './reg-mejoras.component.css'
})
export class RegMejorasComponent {
  constructor(private router: Router) { }
  
  onClick() {
    this.router.navigate(['/dashboard']);
  }
}
