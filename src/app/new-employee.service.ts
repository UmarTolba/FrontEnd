import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employees } from './employees';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewEmployeeService {

    private baseUrl = `${environment.apiBaseUrl}/employees`;

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(`${this.baseUrl}`);
  }

  getEmployeeById(id: number): Observable<Employees> {
    return this.http.get<Employees>(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Employees): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, employee: Employees): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
