import 'reflect-metadata';
import { Request, Response } from 'express';
import { controller, httpGet, httpPost } from 'inversify-express-utils';
import DadosService from '../services/DadosService';

@controller('/dados')
class DadosController {
  @httpPost('/create')
  async create(request: Request, response: Response) {
    DadosService.saveDados(request.body).then((dados) => response.status(200).json(dados));
  }

  @httpGet('/get')
  async get(request: Request, response: Response) {
    DadosService.getUltimaSincronizacao().then((dados) => response.status(200).json(dados));
  }
}

export default new DadosController();
