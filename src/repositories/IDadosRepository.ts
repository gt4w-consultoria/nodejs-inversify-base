import { Dados } from '../models/Dados';

export interface IDadosRepository {
  getNewest(): Dados;
  create(user: Dados): Dados;
  find(query: string): Promise<Dados[]>;
}
