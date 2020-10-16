import { uuid } from 'uuidv4';

export class Dados {
  public readonly id: string;

  public dados: any;

  public usuario: string;

  public dataSincronizacao: Date;

  constructor(props: Omit<Dados, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
