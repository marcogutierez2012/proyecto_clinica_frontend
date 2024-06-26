import { Component, OnInit } from '@angular/core';
import { UserService } from '../../servicio/user/user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
  providers:[DatePipe]
})
export class ListaComponent implements OnInit {

  users: any[] = [];

  constructor(private userService: UserService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.userService.listarUsuarios().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  eliminarUsuario(id: number) {
    if (confirm(`¿Estás seguro de eliminar al usuario con ID ${id}?`)) {
      this.userService.eliminarUsuario(id).subscribe(
        () => {
          console.log(`Usuario con ID ${id} eliminado correctamente.`);
          // Volver a cargar la lista de usuarios después de eliminar
          this.userService.listarUsuarios();
        },
        (error) => {
          console.error('Error al eliminar usuario:', error);
        }
      );
    }
  }

  formatDates() {
    this.users.forEach(user => {
      user.fechaNacimiento = this.datePipe.transform(user.fechaNacimiento, 'dd/MM/yyyy');
    });
  }
}
