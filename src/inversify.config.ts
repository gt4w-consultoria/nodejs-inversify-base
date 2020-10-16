import { Container } from 'inversify';
import { IAuthProvider } from './providers/IAuthProvider';
import { AuthProvider } from './providers/implementations/AuthProvider';
import { PROVIDER_TYPES } from './providers/types';
import { IDadosRepository } from './repositories/IDadosRepository';
import { DadosRepository } from './repositories/implementations/DadosRepository';
import { REPOSITORY_TYPES } from './repositories/types';

const container = new Container();

// Repositories
container.bind<IDadosRepository>(REPOSITORY_TYPES.IDadosRepository).to(DadosRepository);

// Providers
container.bind<IAuthProvider>(PROVIDER_TYPES.IAuthProvider).to(AuthProvider);

export { container };
