import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Users } from './Users';
import { AuthRequest, AuthResponse, RegisterRequest } from './auth-models';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private baseUrl = `${environment.apiBaseUrl}/auth`;

  constructor(private http: HttpClient) { }

  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, {
      username: authRequest.username,
      password: authRequest.password
    }).pipe(
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
    const roleValue = users.role || 'USER';
    return this.http.post(`${this.baseUrl}/register`, {
      username: users.name,
      email: users.email,
      password: users.password,
      firstName: users.name,
      lastName: users.name,
      role: roleValue
    });
  }

  getProfile(): Observable<Users> {
    return this.http.get<Users>(`${this.baseUrl}/profile`);
  }
}
