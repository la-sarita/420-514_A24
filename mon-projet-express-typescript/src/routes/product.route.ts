import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';

const router = Router();

router.get('/products', ProductController.getProducts);

export default router;
