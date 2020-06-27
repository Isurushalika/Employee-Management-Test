import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/departments';

  constructor(private http: HttpClient) { }

  getDepartment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  /*createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }*/

  updateDepartment(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  /*deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }*/

  getDepartmentList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
