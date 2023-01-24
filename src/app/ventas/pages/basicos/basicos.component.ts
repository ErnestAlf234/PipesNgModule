import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower:string='Ernesto';
  nombreUpper:string='ALFONSO';
  nombreCompleto:string='ErNeStO AlfonSO';
  
  //Fecha del día de hoy
  fecha:Date= new Date();




}
