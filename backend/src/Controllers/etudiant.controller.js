import { ajouterFormation, supprimerFormation, obtenirFormation } from '../Services/etudiant.service.js';
import sendResponse from '../Utils/response.util.js';

const obtenirFormationEtudiant = async (req, res) => {
  try {
    const { id_etudiant } = req.params;

    const formation = await obtenirFormation(id_etudiant);
    return sendResponse(res, 200, true, 'Formation obtenue avec succès', formation);
  } catch (err) {
    return sendResponse(res, 400, false, err.message);
  }
}

const ajouterFormationEtudiant = async (req, res) => {
  try {
    const { id_etudiant, id_formation } = req.params;

    const result = await ajouterFormation(id_etudiant, id_formation);
    return sendResponse(res, 201, true, 'Formation ajoutée avec succès', result);

  } catch (err) {
    return sendResponse(res, 400, false, err.message);
  }
};

const enleverFormationEtudiant = async (req, res) => {
  try {
    const { id_etudiant } = req.params;

    const result = await supprimerFormation(id_etudiant);
    return sendResponse(res, 200, true, 'Formation enlevée avec succès', result);
  } catch (err) {
    return sendResponse(res, 400, false, err.message);
  }
};



export { ajouterFormationEtudiant, enleverFormationEtudiant, obtenirFormationEtudiant };
