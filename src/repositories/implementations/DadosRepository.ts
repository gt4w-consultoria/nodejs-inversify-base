import { injectable } from 'inversify';
import { IDadosRepository } from '../IDadosRepository';
import { Dados } from '../../models/Dados';

@injectable()
export class DadosRepository implements IDadosRepository {
  find(query: string): Promise<Dados[]> {
    throw new Error('Método não implementado.');
  }

  getNewest(): Dados {
    const dados = new Dados({ dados: {}, usuario: 'usuário', dataSincronizacao: new Date() });
    console.log(dados);
    return dados;
  }

  create(dados: Dados): Dados {
    console.log('Criou um registro novo');
    return dados;
  }
}
