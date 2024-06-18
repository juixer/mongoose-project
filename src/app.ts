/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import globalErrHandler from './app/middleware/globalErrHandler';
import notFound from './app/middleware/notFound';
import router from './app/route';
import cookieParser from 'cookie-parser';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors({
  origin:['http://localhost:5173']
}));
app.use(cookieParser());

// application routes

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrHandler);
app.use(notFound);

export default app;
