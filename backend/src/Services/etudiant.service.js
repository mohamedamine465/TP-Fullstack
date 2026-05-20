import prisma from "../Utils/prismaClient.js";

async function obtenirFormation(id_etudiant) {
  const etudiant = await prisma.etudiant.findUnique({
    where: { id_etudiant: id_etudiant },
    include: {
      formation: true,
    },
  });
  return etudiant ? etudiant.formation : null;
}

async function ajouterFormation(id_etudiant, id_formation) {
  const updatedEtudiant = await prisma.etudiant.update({
    where: { id_etudiant: id_etudiant },
    data: {
      formationId: id_formation,
    },
  });

  return updatedEtudiant;
}

async function supprimerFormation(id_etudiant) {
  const updatedEtudiant = await prisma.etudiant.update({
    where: { id_etudiant: id_etudiant },
    data: {
      formationId: null,
    },
  });

  return updatedEtudiant;
}


export { ajouterFormation, supprimerFormation, obtenirFormation };
