import { Request, Response, NextFunction } from 'express';

export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack);
    res.status(500).send({ message: 'Internal Server Error' });
}
