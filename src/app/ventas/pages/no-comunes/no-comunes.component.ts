import { Component } from '@angular/core';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i-18 n select
  nombre:string='T-rex';
  clima:string ='tierra';
  objMapa ={
    'agua':'acuatico',
    'tierra':'terrestre',
    'viento':'volador'
  }
  //i-18 n Plural
  dinosaurios:string[]=['T-rex','Megalodón','Apatosaurus','Pinacosaurus'];
  mapaDinosaurios={
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos dos clientes esperando',
    'other':'tenemos muchos clientes esperando',


  }

  cambiarDinosaurio(){
    this.nombre=' Pterosaurios';
    this.clima='viento'

  }
  borrar(){
    this.dinosaurios.pop();

  }
  persona={
    nombre:'Ernesto',
    edad:22,
    direccion:'Tlaxcala',

  }
  //JSON Pipe
  heroes=[
    {
      nombre:'Superman',
      volar:true,
      
    },
    {
      nombre:'Batman',
      volar:false,

    },
    {
      nombre:'Linterna Verde',
      volar:true,

    }
  ]


}











