import prisma from '../Utils/prismaClient.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'votre_secret_tres_secure';

const generateToken = (user) => {
    return jwt.sign(
        { 
            id: user.id_utilisateur, 
            role: user.role, 
            email: user.email,
            id_etudiant: user.etudiant?.id_etudiant,
            id_admin: user.administrateur?.id_admin
        },
        JWT_SECRET,
        { expiresIn: '24h' }
    );
};

async function userRegister(email, mot_de_passe, nom, prenom, role = 'ETUDIANT') {
  const existingUser = await prisma.utilisateur.findUnique({ where: { email } });
  if (existingUser) {
    throw new Error('Cet email est déjà utilisé');
  }

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(mot_de_passe, salt);

  const normalizedRole = role ? role.toUpperCase() : 'ETUDIANT';

  const user = await prisma.utilisateur.create({
    data: {
      email,
      mot_de_passe: hashedPassword,
      nom,
      prenom,
      role: normalizedRole,
      ...(normalizedRole === 'ETUDIANT' ? { etudiant: { create: {} } } : {}),
      ...(normalizedRole === 'ADMIN' ? { administrateur: { create: {} } } : {}),
    },
    include: {
      etudiant: true,
      administrateur: true,
    }
  });

  const token = generateToken(user);

  const { mot_de_passe: _, ...userSafe } = user;
  return { user: userSafe, token };
}

async function userLogin(email, mot_de_passe) {
  const user = await prisma.utilisateur.findUnique({ 
    where: { email },
    include: {
        etudiant: true,
        administrateur: true
    }
  });

  if (!user) {
    throw new Error('Email ou mot de passe incorrect');
  }

  const isMatch = await bcrypt.compare(mot_de_passe, user.mot_de_passe);
  if (!isMatch) {
    throw new Error('Email ou mot de passe incorrect');
  }

  const token = generateToken(user);

  const { mot_de_passe: _, ...userSafe } = user;
  return { user: userSafe, token };
}

export { userRegister, userLogin };
