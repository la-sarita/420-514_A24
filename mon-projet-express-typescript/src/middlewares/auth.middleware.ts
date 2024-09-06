import { Request, Response, NextFunction } from 'express';

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (token) {
        // Logique d'authentification ici
        next();
    } else {
        res.status(403).send('Non autorisé');
    }
}
