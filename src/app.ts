import express from 'express';
import 'reflect-metadata';
import { InversifyExpressServer } from 'inversify-express-utils';
import { container } from './inversify.config';
import './controllers/DadosController';
import './controllers/AuthController';

const server = new InversifyExpressServer(container);
server.setConfig((app) => {
  app.use(express.json());
});

const app = server.build();

export { app };
