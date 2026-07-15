import { Role } from './Users';

export interface AuthRequest {
  name?: string;
  password?: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  name: string;
  role: string;
}

export interface RegisterRequest {
  name?: string;
  email?: string;
  password?: string;
  role?: Role;
}
