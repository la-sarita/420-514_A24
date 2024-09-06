import { Request, Response } from 'express';

export class OrderController {
    static getOrders(req: Request, res: Response) {
        res.send('Liste des commandes');
    }
}
