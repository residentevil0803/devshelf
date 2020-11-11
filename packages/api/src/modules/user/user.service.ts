import { PrismaClient } from '@prisma/client';
import type { User } from '@prisma/client';

const prisma = new PrismaClient();

export const findUserBy = async <K extends keyof User>(by: K, value: User[K]) => {
  return await prisma.user.findOne({
    where: {
      [by]: value,
    },
  });
};

export const findUserById = async (id: User['id']) => {
  return await prisma.user.findOne({
    where: {
      id,
    },
  });
};

export const createUser = async ({
  email,
  name,
  login,
  avatarUrl,
}: Pick<User, 'email' | 'name' | 'login' | 'avatarUrl'>) => {
  return await prisma.user.create({
    data: {
      email,
      name,
      login,
      avatarUrl,
    },
  });
};
