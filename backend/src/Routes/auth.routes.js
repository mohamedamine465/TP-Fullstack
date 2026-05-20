import { Router } from 'express'
import { login, register, logout } from '../Controllers/auth.controller.js'
import { authMiddleware } from '../Utils/auth.middleware.js'

const router = Router();

// Ajouter un admin par defaut pout les tests
router.post('/register-admin', async (req, res) => {
    const { nom, prenom, email, mot_de_passe } = req.body;
    try {
        const result = await register({ nom, prenom, email, mot_de_passe, role: 'ADMIN' });
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

router.post('/login', login);
router.post('/register', register);
router.post('/logout', authMiddleware, logout);


export default router;
