import { injectable } from 'inversify';
import { IAuthProvider, ICredentials } from '../IAuthProvider';

@injectable()
export class AuthProvider implements IAuthProvider {
  async login(usuario: ICredentials): Promise<void> {
    console.log(usuario);
  }
}
