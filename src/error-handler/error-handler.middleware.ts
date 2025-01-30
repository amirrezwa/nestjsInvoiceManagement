import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ErrorHandlerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    try {
      next(); // Pass request to the next middleware or controller
    } catch (error) {
      console.error('Exception caught in middleware:', error);

      res.status(500).json({
        statusCode: 500,
        message: 'Internal Server Error - Caught in Middleware',
      });
    }
  }
}
