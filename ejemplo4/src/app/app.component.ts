import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo4';

  //propiedades
  nombreCliente = '';
  emailCliente = '';
  opinionCliente = '';
  statusCliente = '';
  municipioCliente = '';
  autorizacionCliente = false;

  enviado = false;

  //declaramos el formulario
  formOpinion = new FormGroup ({
    nombre: new FormControl('',[Validators.required, Validators.minLength(10)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    opinion: new FormControl('',[Validators.required, Validators.maxLength(500)]),
    status: new FormControl('',[Validators.required]),
    municipio: new FormControl('',[Validators.required]),
    autorizacion: new FormControl(false),
  });

  //metodo que se ejecuta cuando se envia un formulario
  onSubmit(){
    this.enviado=true;
    if(this.formOpinion.valid) {
      this.nombreCliente = this.formOpinion.value.nombre!;
      this.emailCliente = this.formOpinion.value.email!;
      this.opinionCliente = this.formOpinion.value.opinion!;
      this.statusCliente = this.formOpinion.value.status!;
      this.municipioCliente = this.formOpinion.value.municipio!;
      this.autorizacionCliente = this.formOpinion.value.autorizacion!;
    }
  }


}
