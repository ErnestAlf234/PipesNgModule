import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    nombre:string='ErneSto alFOnso';
    numero:number=1000000;

    persona ={
      nombre:'Ernesto Alfonso',
      edad: 21,
      sexo:'Maculino',
      casado:false
    }
    
    mostrarNombre(){
      console.log(this.nombre);
      console.log(this.numero);
      console.log(this.persona);
    }
    constructor(private primengConfig: PrimeNGConfig) {}
    ngOnInit() {
      this.primengConfig.ripple = true;
    }

    
}
