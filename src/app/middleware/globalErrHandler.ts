/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError, ZodIssue } from 'zod';
import { TErrorSources } from '../interface/error';
import config from '../config';

const globalErrHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode: number = err.statusCode || 500;
  let message: any = err.message || 'Something went wrong';

 

  let errorSources: TErrorSources = [
    {
      path: '',
      message: 'Something went wrong',
    },
  ];

const handleZodError = (err : ZodError) => {

  const errorSource : TErrorSources = err.issues.map((issue : ZodIssue) => {
    return{
      path: issue?.path[issue.path.length-1],
      message: issue?.message,
    }
  })

  const  statusCode = 400;
  return{
    statusCode,
    message: "Validation error",
    errorSources: errorSource
  }
}



  if (err instanceof ZodError){
   const simplifiedError =  handleZodError(err)
   statusCode = simplifiedError.statusCode;
   message = simplifiedError.message;
   errorSources = simplifiedError.errorSources
  }


    return res.status(statusCode).json({
      success: false,
      message,
      errorSources,
      stack: config.node_env === 'development' ? err?.stack : null,
    });
};

export default globalErrHandler;
