/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const globalErrHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode: number = err.statusCode || 500;
  const message: any = err.message || 'Something went wrong';
  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
};

export default globalErrHandler;
