export interface User {
  id: string;
  email: string;
  userName: string;
}

export interface LoggedUser {
  email: string;
  displayName?: string;
  photoURL?: string;
}
