import { userLogin, userRegister } from '../Services/auth.service.js';
import sendResponse from '../Utils/response.util.js';

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000 // 24 heures
};

const register = async (req, res) => {
  try {
    const { email, mot_de_passe, nom, prenom, role } = req.body;

    if (!email || !mot_de_passe || !nom || !prenom) {
      return sendResponse(res, 400, false, 'Champs manquants (email, mot_de_passe, nom, prenom)');
    }

    const { user, token } = await userRegister(email, mot_de_passe, nom, prenom, role);
    
    res.cookie('token', token, cookieOptions);
    return sendResponse(res, 201, true, 'Inscription réussie', { user, token });

  } catch (err) {
    return sendResponse(res, 400, false, err.message);
  }
};


const login = async (req, res) => {
  try {
    const { email, mot_de_passe } = req.body;

    if (!email || !mot_de_passe) {
        return sendResponse(res, 400, false, 'Email et mot de passe requis');
    }

    const { user, token } = await userLogin(email, mot_de_passe);

    res.cookie('token', token, cookieOptions);
    return sendResponse(res, 200, true, 'Connexion réussie', { user, token });

  } catch (err) {
    return sendResponse(res, 401, false, err.message);
  }
};


const logout = async (req, res) => {
  try {
    res.clearCookie('token');
    return sendResponse(res, 200, true, 'Déconnexion réussie');
  } catch (err) {
    return sendResponse(res, 500, false, 'Erreur serveur');
  }
};

export { register, login, logout };
