import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicio/user/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent implements OnInit{

  usuario: any = {
    estado: 0,
    rol: {
      id: null // Dejarlo como null inicialmente
    }
  };

  constructor(private usuarioService: UserService) { }

  ngOnInit(): void {
  }

  submitForm() {
    // Llama al servicio para guardar el usuario
    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      (response) => {
        console.log('Usuario registrado correctamente:', response);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
  }

}
