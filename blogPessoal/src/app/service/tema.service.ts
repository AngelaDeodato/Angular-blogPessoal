import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }
token = {
  headers: new HttpHeaders().set('Authorization', localStorage.getItem('token'))
}

getAllTemas(){
  return this.http.get('http://93.188.161.223:9000/tema', this.token)
}

getByIdTema(id: number){
  return this.http.get(`http://93.188.161.223:9000/tema/${id}`, this.token)
}

}
