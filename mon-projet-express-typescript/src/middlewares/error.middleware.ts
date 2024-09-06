import { Request, Response, NextFunction } from 'express';

export function errorMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    console.error(err);
    res.status(500).send('Erreur serveur');
}
