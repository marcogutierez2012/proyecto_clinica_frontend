import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '../helper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = `${baseUrl}/usuario`;

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<any> {
    const url = `${this.userUrl}/listar-usuarios`;
    return this.http.get<any>(url);
  }

  registrarUsuario(usuario:any): Observable<any> {
    const url = `${this.userUrl}/registrar`;
    return this.http.post<any>(url, usuario);
  }

  eliminarUsuario(id: number): Observable<any> {
    const url = `${this.userUrl}/eliminar/${id}`;
    return this.http.delete<any>(url);
  }

}
