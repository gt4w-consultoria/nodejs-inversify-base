import { container } from '../inversify.config';
import { IAuthProvider, ICredentials } from '../providers/IAuthProvider';
import { PROVIDER_TYPES } from '../providers/types';

class AuthService {
  constructor(
    private authProvider = container.get<IAuthProvider>(PROVIDER_TYPES.IAuthProvider),
  ) {}

  login(usuario: ICredentials) {
    this.authProvider.login(usuario);
  }
}

export default new AuthService();
