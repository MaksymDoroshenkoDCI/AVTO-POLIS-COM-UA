import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNewsDto, UpdateNewsDto } from './dto/news.dto';

@Injectable()
export class NewsService {
    constructor(private prisma: PrismaService) { }

    async create(createNewsDto: CreateNewsDto) {
        return this.prisma.news.create({
            data: createNewsDto,
        });
    }

    async findAll() {
        return this.prisma.news.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        const news = await this.prisma.news.findUnique({ where: { id } });
        if (!news) throw new NotFoundException('News not found');
        return news;
    }

    async findBySlug(slug: string) {
        const news = await this.prisma.news.findUnique({ where: { slug } });
        if (!news) throw new NotFoundException('News not found');
        return news;
    }

    async update(id: string, updateNewsDto: UpdateNewsDto) {
        return this.prisma.news.update({
            where: { id },
            data: updateNewsDto,
        });
    }

    async remove(id: string) {
        return this.prisma.news.delete({ where: { id } });
    }

    async seed() {
        const existing = await this.prisma.news.count();
        if (existing > 3) return; // Якщо вже є хоча б 3, не дублюємо

        const initialNews = [
            {
                title: 'Нові тарифи автоцивілки у 2026 році',
                slug: 'new-tariffs-2026',
                excerpt: 'Що зміниться для водіїв і як це вплине на вартість страхування в Україні.',
                content: 'З 1 квітня 2026 року в Україні вступають в дію нові коефіцієнти розрахунку вартості ОСЦПВ. Основні зміни стосуватимуться міст з населенням понад 1 млн осіб та об\'єму двигуна автомобіля. Наш сервіс вже оновив калькулятор згідно з новими правилами.',
                image: '/news_tariffs.jpg',
                published: true,
            },
            {
                title: 'Що робити при ДТП? Покрокова інструкція',
                slug: 'what-to-do-accident',
                excerpt: 'Список дій: від включення аварійки до роботи зі страховою компанією.',
                content: 'Потрапляння в ДТП — це завжди стрес. Ми підготували для вас детальну інструкцію, як поводитися в такій ситуації, як правильно оформити Європротокол та у які терміни потрібно повідомити страхову компанію, щоб гарантовано отримати виплату.',
                image: '/news_accident.jpg',
                published: true,
            },
            {
                title: 'Зелена карта: правила виїзду за кордон',
                slug: 'green-card-rules-2026',
                excerpt: 'Які документи потрібні та як перевірити чинність поліса на кордоні.',
                content: 'При перетині кордону з країнами ЄС наявність Зеленої карти є обов\'язковою. Зверніть увагу, що зараз приймаються лише електронні поліси в форматі PDF або через застосунок Дія. Перевірка здійснюється за базою МТСБУ в режимі реального часу.',
                image: '/news_greencard.jpg',
                published: true,
            }
        ];

        for (const item of initialNews) {
            await this.prisma.news.upsert({
                where: { slug: item.slug },
                update: {},
                create: item
            });
        }
        return { message: 'News seeded successfully' };
    }
}
