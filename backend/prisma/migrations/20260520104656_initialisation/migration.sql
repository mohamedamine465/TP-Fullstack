-- CreateEnum
CREATE TYPE "FILIERE" AS ENUM ('GINF', 'GSEA', 'GSR', 'GIND');

-- CreateEnum
CREATE TYPE "ROLE" AS ENUM ('ETUDIANT', 'ADMIN');

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id_utilisateur" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mot_de_passe" TEXT NOT NULL,
    "role" "ROLE" NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id_utilisateur")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id_admin" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id_admin")
);

-- CreateTable
CREATE TABLE "Etudiant" (
    "id_etudiant" TEXT NOT NULL,
    "CNE" TEXT,
    "filiere" "FILIERE",
    "formationId" TEXT,

    CONSTRAINT "Etudiant_pkey" PRIMARY KEY ("id_etudiant")
);

-- CreateTable
CREATE TABLE "Formation" (
    "id_formation" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "duree" INTEGER NOT NULL,

    CONSTRAINT "Formation_pkey" PRIMARY KEY ("id_formation")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_nom_key" ON "Utilisateur"("nom");

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Etudiant_CNE_key" ON "Etudiant"("CNE");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_id_admin_fkey" FOREIGN KEY ("id_admin") REFERENCES "Utilisateur"("id_utilisateur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Etudiant" ADD CONSTRAINT "Etudiant_id_etudiant_fkey" FOREIGN KEY ("id_etudiant") REFERENCES "Utilisateur"("id_utilisateur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Etudiant" ADD CONSTRAINT "Etudiant_formationId_fkey" FOREIGN KEY ("formationId") REFERENCES "Formation"("id_formation") ON DELETE SET NULL ON UPDATE CASCADE;
