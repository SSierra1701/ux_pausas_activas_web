import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-dolencias',
  templateUrl: './reg-dolencias.component.html',
  styleUrl: './reg-dolencias.component.css'
})
export class RegDolenciasComponent {
  constructor(private router: Router) { }
  
  onClick() {
    this.router.navigate(['/dashboard']);
  }
}
