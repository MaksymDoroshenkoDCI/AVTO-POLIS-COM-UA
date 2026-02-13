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
}
