/**
 * Define error-handling middleware functions in the same way as other middleware functions, except error-handling functions have four arguments instead of three: (err, req, res, next)
 * 
 * while processing api if service throws the error it will come to error handler and follow the logic inside error handler
 */

import { Request, Response, NextFunction } from "express";
import {RequestValidationError} from '../errors/request-validation-error';
import {DatabaseConnectionError} from '../errors/database-connection-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if(err instanceof RequestValidationError) {
    console.log("RequestValidationError", err);
  }

  if(err instanceof DatabaseConnectionError) {
    console.log("DatabaseConnectionError", err);
  }

  res.status(400).send({
    message: err.message,
  });
};
