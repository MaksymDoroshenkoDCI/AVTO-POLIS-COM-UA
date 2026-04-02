import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'mdoroshenko1@gmail.com';
  const rawPassword = 'Ltdeirb1380#@';
  const role = 'ADMIN';

  console.log('Checking for existing user...');
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    console.log('User already exists, updating their password to be sure...');
    const hashedPassword = await bcrypt.hash(rawPassword, 10);
    await prisma.user.update({
      where: { email },
      data: {
        password: hashedPassword,
        role: role,
        name: 'Адміністратор Макс',
      },
    });
    console.log(`Admin user ${email} successfully updated.`);
  } else {
    console.log('Creating new admin user...');
    const hashedPassword = await bcrypt.hash(rawPassword, 10);
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: role,
        name: 'Адміністратор Макс',
      },
    });
    console.log(`Admin user ${email} successfully created.`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
