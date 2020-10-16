import { IDadosRepository } from '../repositories/IDadosRepository';
import { REPOSITORY_TYPES } from '../repositories/types';
import { container } from '../inversify.config';
import { Dados } from '../models/Dados';

class DadosService {
  constructor(private dadosRepository =
  container.get<IDadosRepository>(REPOSITORY_TYPES.IDadosRepository)) { }

  async saveDados(data: Dados) {
    return this.dadosRepository.create(data);
  }

  async getUltimaSincronizacao(): Promise<Dados> {
    return this.dadosRepository.getNewest();
  }
}

export default new DadosService();
