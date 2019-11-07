import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import  {UsuarioService } from '../usuario.service';
import { Usuario } from "../usuario";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mascota-create',
  templateUrl: './mascota-create.component.html',
  styleUrls: ['./mascota-create.component.css']
})
export class MascotaCreateComponent implements OnInit {

usuarioForm: FormGroup;
usuarios: Usuario[];

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
  
  createUsuario(newUsuario: Usuario) {

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