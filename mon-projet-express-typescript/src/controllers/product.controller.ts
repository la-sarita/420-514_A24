import { Request, Response } from 'express';

export class ProductController {
    static getProducts(req: Request, res: Response) {
        res.send('Liste des produits');
    }
}
