import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import  {UsuarioService } from '../usuario.service';
import { UsuarioDetail } from "../usuario-detail";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

usuarioForm: FormGroup;
usuarios: UsuarioDetail[];

 constructor(
    private usuarioService: UsuarioService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.usuarioForm = this.formBuilder.group({
      nombre: ["", Validators.required, ],
      ciudad: ["", Validators.required],
      correo: ["", Validators.required],
      celular: ["", Validators.required]
      
    });
  }
  
  createUsuario(newUsuario: UsuarioDetail) {

    console.warn("usuario creado", newUsuario);

    this.usuarioService.createUsuario(newUsuario).subscribe(usuario => {
      this.usuarios.push(usuario);
      this.showSuccess();
    });
    this.usuarioForm.reset();
  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(usuarios => (this.usuarios = usuarios));
  }

  showSuccess() {
     for (let i = 0; i < this.usuarios.length; i++){
      console.log(this.usuarios[i].id+' '+this.usuarios[i].correo+' '+this.usuarios[i].ciudad);
    }
    this.toastr.success("Usuario", "Creado exitosamente!", {"progressBar": true,timeOut:4000});
   
  }
}