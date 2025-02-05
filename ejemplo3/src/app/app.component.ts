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
  title = 'ejemplo3';

  //propiedades
  producto = {
    id:0,
    descripcion:'',
    precio: 0
  }

  //arreglos de productos
  productos = [
    {id: 1, descripcion:'Gansito Marinela', precio: 13.50},
    {id: 2, descripcion:'Cheetos', precio: 17.00},
    {id: 3, descripcion:'Galletas Oreo', precio: 19.00},
    {id: 4, descripcion:'Coca-cola 600', precio: 20.00},
    {id: 5, descripcion:'Mamut Grande', precio: 10.00},
    {id: 6, descripcion:'Churumais', precio: 15.50}
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
      precio: this.producto.precio
    });
    this.producto.id = 0;
    this.producto.descripcion = '';
    this.producto.precio = 0;
  }

  //funciones para seleccionar un rpoducto existengte
  seleccionarProducto(productoSeleccionado: {id:number; descripcion: string; precio:number;}){
    this.producto.id = productoSeleccionado.id;
    this.producto.descripcion = productoSeleccionado.descripcion;
    this.producto.precio = productoSeleccionado.precio;
  }

  //funcion para modificar un producto (el producto seleccionado)
  modificarProducto(){
    for(let i=0; i< this.productos.length; i++){
      if(this.producto.id == this.productos[i].id) {
        this.productos[i].descripcion = this.producto.descripcion;
        this.productos[i].precio = this.producto.precio;

        this.producto.id = 0;
        this.producto.descripcion = '';
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
