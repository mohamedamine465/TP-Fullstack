import jwt from 'jsonwebtoken';
import sendResponse from './response.util.js';

const JWT_SECRET = process.env.JWT_SECRET || 'votre_secret_tres_secure';

const authMiddleware = (req, res, next) => {
    // On vérifie le token dans les cookies en priorité, puis dans les headers
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    if (!token) {
        return sendResponse(res, 401, false, 'Accès non autorisé. Token manquant.');
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return sendResponse(res, 401, false, 'Token invalide ou expiré.');
    }
};

const authorize = (roles = []) => {
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return (req, res, next) => {
        if (roles.length && !roles.includes(req.user.role)) {
            return sendResponse(res, 403, false, 'Accès interdit. Permission insuffisante.');
        }
        next();
    };
};

/**
 * Vérifie si l'utilisateur est soit un ADMIN, soit l'étudiant concerné par l'ID en paramètre.
 * @param {string} paramName - Le nom du paramètre dans req.params (ex: 'id_etudiant')
 */
const verifyOwner = (paramName = 'id_etudiant') => {
    return (req, res, next) => {
        const idFromParams = req.params[paramName];
        const user = req.user;

        // Si l'utilisateur est ADMIN, il a tous les droits
        if (user.role === 'ADMIN') {
            return next();
        }

        // Sinon, on vérifie si l'id_etudiant du token correspond à celui de l'URL
        if (user.id_etudiant === idFromParams) {
            return next();
        }

        return sendResponse(res, 403, false, "Accès interdit. Vous ne pouvez pas accéder aux données d'un autre étudiant.");
    };
};

export { authMiddleware, authorize, verifyOwner };
