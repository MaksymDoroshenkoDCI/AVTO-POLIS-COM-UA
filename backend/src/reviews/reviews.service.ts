import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    return this.prisma.review.create({ data });
  }

  async findAll() {
    return this.prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findPublished() {
    return this.prisma.review.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async update(id: string, data: any) {
    return this.prisma.review.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    return this.prisma.review.delete({ where: { id } });
  }

  async seed() {
    const existing = await this.prisma.review.count();
    if (existing > 0) return;

    const initialReviews = [
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

    for (const review of initialReviews) {
      await this.prisma.review.create({ data: review });
    }
  }
}
