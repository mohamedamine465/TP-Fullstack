import { ajouterFormation, supprimerFormation, obtenirFormations } from '../Services/formation.service.js';
import sendResponse from '../Utils/response.util.js';

const getFormations = async (req, res) => {
  try {
    const formations = await obtenirFormations();
    return sendResponse(res, 200, true, 'Formations obtenues avec succès', formations);
  } catch (err) {
    return sendResponse(res, 400, false, err.message);
  }
};

const createFormation = async (req, res) => {
  try {
    const { titre, duree } = req.body;

    if (!titre || !duree) {
      return sendResponse(res, 400, false, 'Champs manquants (titre, duree)');
    }

    const result = await ajouterFormation(titre, duree);
    return sendResponse(res, 201, true, 'Formation ajoutée avec succès', result);

  } catch (err) {
    return sendResponse(res, 400, false, err.message);
  }
};

const deleteFormation = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return sendResponse(res, 400, false, 'ID de la formation requis');
    }

    const result = await supprimerFormation(id);
    return sendResponse(res, 200, true, 'Formation supprimée avec succès', result);
  } catch (err) {
    return sendResponse(res, 400, false, err.message);
  }
};



export { createFormation, deleteFormation, getFormations };
