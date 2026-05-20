import prisma from "../Utils/prismaClient.js";

async function obtenirFormations() {
  const formations = await prisma.formation.findMany();
  return formations;
}

async function ajouterFormation(titre, duree) {
  const formation = await prisma.formation.create({
    data: {
      titre,
      duree: parseInt(duree),
    },
  });

  return formation;
}

async function supprimerFormation(id_formation) {
  const formation = await prisma.formation.delete({
    where: { id_formation: id_formation },
  });

  return formation;
}


export { ajouterFormation, supprimerFormation, obtenirFormations };
