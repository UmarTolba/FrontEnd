export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  HR_MANAGER = 'HR_MANAGER'
}

export class Users {
   name!: string;
  email!: string;
  password!: string;
  role!: Role;
}


/*
  "name": "string",
  "email": "string@s.s",
  "password": "string",
  "role": "ROLE_ADMIN"
}
*/