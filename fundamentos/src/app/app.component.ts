import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fundamentos';

  //propiedades
  nombre = 'Pablo';
  aniosServicio = 20;
  email = 'humbertorv.ma22@utsjr.edu.mx';
  activo = true;
  alumnos = [25,24,26];
  numero=2;
  contador=0;
  desactivarBoton =true;

  productos = [
    {
      id: 1,
      descripcion: 'Sabritas',
      precio: 25.50
    },
    {
      id: 2,
      descripcion: 'Cheetos',
      precio: 22
    },
    {
      id: 3,
      descripcion: 'Taxis',
      precio: 28.50
    }
  ];

  //funcion   que muestra si esta activo o no 
  // de preferencia que siempre se inicie con minusculas y la funcion siempre lleva el () reciva o no algo y termina con {}
  esActivo(){
    if(this.activo){
      return 'Empleado activo';
    }else{
      return 'Empleado inactivo'
    }
  }

  //funcion que sume los elementos del arreglo de alumnos
  sumarAlumno(){
    let suma = 0;
    for(let i=0;i<this.alumnos.length;i++){
      suma += this.alumnos[i];
    }
    return suma;
  }

  //Funcion   que genere un numero aleatorio de 1  a 3
  generarNumero(){
    return Math.floor(Math.random() * 3)+1;
  }

  //funcion que incremente el contador
  incrementarContador(){
    this.contador++;

  }

  //funcion que decrementa el contador
  decrementerContador(){
    this.contador--;
  }

  //Funcion que cambia el valor de desactivar boton
  cambiarValor(){
    this.desactivarBoton = false;
  }
}
