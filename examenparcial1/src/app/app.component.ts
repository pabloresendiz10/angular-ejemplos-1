import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examenparcial1';

  //propiedades
  producto = {
    id:0,
    descripcion:'',
    categoria: '',
    precio: 0
  }

  //arreglos de productos
  productos = [
    {id: 1, descripcion:'NINJA 500', categoria: 'SPORT', precio: 159990.00},
    {id: 2, descripcion:'NINJA 1000SX', categoria: 'SPORT', precio: 319990.00},
    {id: 3, descripcion:'NINJA ZX-4RR', categoria: 'SUPERSPORT', precio: 242990.00},
    {id: 4, descripcion:'NINJA ZX-6R', categoria: 'SUPERSPORT', precio: 289990.00},
    {id: 5, descripcion:'NINJA ZX-10R', categoria: 'SUPERSPORT', precio: 419990.00},
    {id: 6, descripcion:'NINJA H2 ABS', categoria: 'HYPERSPORT', precio: 849990.00}
  ];

  //metodo que determina si hay productos en el arreglo 
  hayProductos(){
    return this.productos.length > 0;
  }

  //funcion que agrega productos al arreglo
  agregarProducto(){
    if(this,this.producto.id == 0){
      alert('El ID del producto debe de ser diferente de CERO');
      return;
    }
    for(let i=0; i < this.productos.length; i++){
      if(this.producto.id == this.productos[i].id) {
        alert('Ya existe un producto con ese ID');
        return;
      }
    }
    this.productos.push({
      id: this.producto.id,
      descripcion: this.producto.descripcion,
      categoria: this.producto.categoria,
      precio: this.producto.precio
    });
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.categoria = '';
    this.producto.precio = 0;
  }

  //funciones para seleccionar un rpoducto existengte
  seleccionarProducto(productoSeleccionado: {id:number; descripcion: string; categoria: string; precio:number;}){
    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.categoria = productoSeleccionado.categoria;
    this.producto.precio = productoSeleccionado.precio;
  }

  //funcion para modificar un producto (el producto seleccionado)
  modificarProducto(){
    for(let i=0; i< this.productos.length; i++){
      if(this.producto.id == this.productos[i].id) {
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].categoria = this.producto.categoria;
        this.productos[i].precio = this.producto.precio;

        this.producto.id = 0;
        this.producto.descripcion = '';
        this.producto.categoria = '';
        this.producto.precio = 0;
        return;
      }
    }
    alert('No existe ID');
  }

  //funcion para eliminar un producto
  eliminarProducto(id: number){
    for(let i=0; i < this.productos.length; i++ ){
      if(id == this.productos[i].id){
        this.productos.splice(i,1);
        return;
      }
    }
  }
}
