import 'reflect-metadata';
import 'express-async-errors';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';

import cors from 'cors';
import { errors } from 'celebrate';

import AppError from '@errors/AppError';
import routes from './routes';

import './container';
import './database';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response
      .status(err.statusCode)
      .json({ status: 'Error', message: err.message });
  }

  return response.status(500).json({
    status: 'Error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => console.log('Server has started at port: 3333'));
