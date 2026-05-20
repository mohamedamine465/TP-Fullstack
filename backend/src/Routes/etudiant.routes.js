import { Router } from 'express'
import { ajouterFormationEtudiant, enleverFormationEtudiant, obtenirFormationEtudiant } from '../Controllers/etudiant.controller.js'
import { authMiddleware, verifyOwner } from '../Utils/auth.middleware.js'

const router = Router();

router.use(authMiddleware);

// On applique verifyOwner sur toutes les routes qui utilisent :id_etudiant
router.get('/:id_etudiant/formation', verifyOwner('id_etudiant'), obtenirFormationEtudiant);
router.post('/:id_etudiant/formation/:id_formation', verifyOwner('id_etudiant'), ajouterFormationEtudiant);
router.delete('/:id_etudiant/formation', verifyOwner('id_etudiant'), enleverFormationEtudiant);


export default router;
