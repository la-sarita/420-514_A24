import { Router } from 'express';
import { ProductController } from '../controllers/product.controller';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../interfaces/user.interface';

const router = Router();

const users: User[] = []; // Simuler une base de données en mémoire

router.post('/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user: User = { 
        id: req.body.id,
        name: req.body.name, 
        email: req.body.email, 
        username: req.body.username, 
        password: hashedPassword 
    };
    users.push(user);
    res.status(201).send('Utilisateur enregistré');
});

router.post('/login', async (req, res) => {
    const user = users.find(user => user.username === req.body.username);
    if (user && await bcrypt.compare(req.body.password, user.password)) {
        const accessToken = jwt.sign({ username: user.username }, 'SECRET_KEY', 
            { expiresIn: '1h' }
        );
        res.json({ accessToken });
    } else {
        res.status(403).send('Nom d’utilisateur ou mot de passe incorrect');
    }
});

export default router;