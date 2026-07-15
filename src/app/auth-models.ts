import { Role } from './Users';

export interface AuthRequest {
  username?: string;
  password?: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  name: string;
  role: string;
}

export interface RegisterRequest {
  username?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  role?: Role;
}
