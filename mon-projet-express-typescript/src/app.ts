import express, { Request, Response, NextFunction } from 'express';
import userRoutes from './routes/user.route';
import productRoutes from './routes/product.route';
import { errorMiddleware } from './middlewares/error.middleware';


const app = express();
// Middleware de parsing du JSON
app.use(express.json());

// Route de base
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});
app.use('/api', userRoutes);
app.use('/api', productRoutes);

app.use(errorMiddleware);


export default app;
