import { Router } from 'express'
import { createFormation, deleteFormation, getFormations } from '../Controllers/formation.controller.js'
import { authMiddleware, authorize } from '../Utils/auth.middleware.js'

const router = Router();

// Toutes les routes de formation nécessitent une authentification
router.use(authMiddleware);

router.get('/', getFormations);

// Seuls les admins peuvent créer ou supprimer des formations
router.post('/', authorize('ADMIN'), createFormation);
router.delete('/:id', authorize('ADMIN'), deleteFormation);


export default router;
