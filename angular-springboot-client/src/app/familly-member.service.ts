import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FamillyMemberService {
  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/famillymembers';

  constructor(private http: HttpClient) { }

  getFamillyMembers(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFamillyMember(famillyMember: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, famillyMember);
  }

  updateFamillyMember(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFamillyMember(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFamillyMemberList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
