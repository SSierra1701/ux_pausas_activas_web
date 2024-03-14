import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  iniciarSesion(provider: string) {
    if(provider=='facebook' || provider=='google'){
      console.log(provider)
    } 
  }
}
