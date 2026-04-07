import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('Seed starting...');

  // 1. Створення Адміна
  const adminEmail = 'mdoroshenko1@gmail.com';
  const hashedPassword = await bcrypt.hash('admin12345', 10);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { password: hashedPassword, role: Role.ADMIN },
    create: {
      email: adminEmail,
      name: 'Maksym Doroshenko',
      password: hashedPassword,
      role: Role.ADMIN,
    },
  });
  console.log('Admin created:', admin.email);

  // 2. Створення Відгуків
  const reviews = [
    {
      author: 'Ірина Мостова',
      text: 'Оформлення автоцивілки зайняло всього кілька хвилин — все онлайн, без черг і паперів. Дуже зручно! Плюс приємно здивувала ціна. Рекомендую всім, хто цінує свій час!',
      rating: 5,
      avatarUrl: '/avatar_reviews_iryna.png',
      published: true,
    },
    {
      author: 'Олександр Кучеренко',
      text: 'Їхали з родиною до Польщі — зелена карта була потрібна терміново. Оформили за 5 хвилин, одразу отримали PDF на пошту. Все чітко, без зайвих дзвінків. Надійний сервіс!',
      rating: 5,
      avatarUrl: '/avatar_reviews_oleksandr.png',
      published: true,
    },
    {
      author: 'Світлана Кравченко',
      text: 'Перед поїздкою до Італії вирішила не ризикувати — взяла туристичне страхування. І не дарма! У Римі звернулася до лікаря, і всі витрати покрили. Працює бездоганно!',
      rating: 5,
      avatarUrl: '/avatar_reviews_olia.png',
      published: true,
    },
  ];

  for (const r of reviews) {
    await prisma.review.create({ data: r });
  }
  console.log('3 reviews created.');

  // 3. Створення Новин
  const news = [
    {
      title: 'Нові тарифи автоцивілки у 2026 році',
      slug: 'new-tariffs-2026',
      excerpt: 'Що зміниться для водіїв і як це вплине на вартість страхування в Україні.',
      content: 'З 1 квітня 2026 року в Україні вступають в дію нові коефіцієнти розрахунку вартості ОСЦПВ. Основні зміни стосуватимуться міст з населенням понад 1 млн осіб та об\'єму двигуна автомобіля. Наш сервіс вже оновив калькулятор згідно з новими правилами.',
      image: '/news_tariffs.png',
      published: true,
    },
    {
      title: 'Що робити при ДТП? Покрокова інструкція',
      slug: 'what-to-do-accident',
      excerpt: 'Список дій: від включення аварійки до роботи зі страховою компанією.',
      content: 'Потрапляння в ДТП — це завжди стрес. Ми підготували для вас детальну інструкцію, як поводитися в такій ситуації, як правильно оформити Європротокол та у які терміни потрібно повідомити страхову компанію, щоб гарантовано отримати виплату.',
      image: '/news_accident.png',
      published: true,
    },
    {
      title: 'Зелена карта: правила виїзду за кордон',
      slug: 'green-card-rules-2026',
      excerpt: 'Які документи потрібні та як перевірити чинність поліса на кордоні.',
      content: 'При перетині кордону з країнами ЄС наявність Зеленої карти є обов\'язковою. Зверніть увагу, що зараз приймаються лише електронні поліси в форматі PDF або через застосунок Дія. Перевірка здійснюється за базою МТСБУ в режимі реального часу.',
      image: '/news_greencard.png',
      published: true,
    },
  ];

  for (const n of news) {
    await prisma.news.upsert({
      where: { slug: n.slug },
      update: {},
      create: n,
    });
  }
  console.log('3 news articles created.');

  console.log('Seed finished successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
