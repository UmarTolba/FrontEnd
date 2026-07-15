import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Users } from './Users';
import { AuthRequest, AuthResponse, RegisterRequest } from './auth-models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private baseUrl = 'http://localhost:8081/api/users';
//                     http://localhost:8081/api/users

  constructor(private http: HttpClient) { }

  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, authRequest).pipe(
      tap(response => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  register(users: Users): Observable<object> {


    return this.http.post(`${this.baseUrl}`, users);
  }

  getProfile(): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}/profile`);
  }
}
