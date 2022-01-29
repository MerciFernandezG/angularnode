import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../core/interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public Url_Back: string = 'http://localhost:4000/api';

  constructor(private http: HttpClient) { }

  
  personList(): Observable<Person[]>{
    return this.http.get<Person[]>(`${this.Url_Back}`)
  }

  viewPerson(data:string): Observable<any>{
    return this.http.get(`${this.Url_Back}/${data}`)
  }

  registerPerson(data: Person){
    return this.http.post(`${this.Url_Back}`,data, {responseType: 'text'});
  }

}
