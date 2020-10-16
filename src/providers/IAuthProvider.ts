export interface ICredentials {
  username: string;
  password: string;
}

export interface IAuthProvider {
  login(usuario: ICredentials): Promise<void>;
}
