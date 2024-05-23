/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application, NextFunction, Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoute } from './app/modules/user/user.route';
import globalErrHandler from './app/middleware/globalErrHandler';
import notFound from './app/middleware/notFound';
import router from './app/route';

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1', router);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use(globalErrHandler);
app.use(notFound);

export default app;
